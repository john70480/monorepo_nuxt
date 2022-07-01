// import * as http from './http';
import { TgClient } from './tgClient';
import { usePlatform } from '@tg/stores/src/platform';
import { useSession } from '@tg/stores/src/session';

export let getEncryptWorker: Promise<void> | undefined;
export function defineTgApi(options: {
	getBaseUrl: () => string,
	getHeaders: () => {
		platform: string,
		ticket: number | undefined,
		username: string | undefined,
		vga: string,
		deviceInfo: string,
		domain: string,
		uuid: string,
	} | undefined,
	/**
 * 如果需要啟用加密，傳入session userId，否則傳入undefined
 */
	getEncryptUserId: () => string | undefined,
}) {

	return {
		get tg() {

			const _tg = getAppClient().tg;
			return new Proxy(_tg, {
				get(target, p) {
					const fn = target[p as keyof typeof target];
					return new Proxy(fn, {
						async apply(target, thisArg, args) {

							const platform = usePlatform();
							const session = useSession();

							return target.apply(thisArg, [{
								platform: 'Web_1.0',
								ticket: session.user?.ticket,
								username: session.user?.username,
								vga: platform.vga,
								deviceInfo: platform.deviceInfo,
								domain: platform.domain,
								uuid: platform.uuid,
								...args[0],
							}]);
						}
					})
				}
			});
		},
		get ip() {
			return getAppClient().ip;
		},
		get headers() {
			return options.getHeaders()
		}
	};

	function getAppClient() {

		const tgClient = new TgClient(
			{
				BASE: import.meta.env.VITE_TG_RELAY_API_URL,
				HEADERS: options.getHeaders(),
			});
		tgClient.encryptUserId = options.getEncryptUserId();
		if (usePlatform().isEncrypt && !getEncryptWorker) {
			if (!usePlatform().encrypt) {
				getEncryptWorker = tgClient.getEncrypt()
			}
		}
		return tgClient
	}
}

const tgApi = defineTgApi({
	getBaseUrl: () => import.meta.env.VITE_TG_RELAY_API_URL,
	getHeaders: () => {
		const platform = usePlatform();
		const session = useSession();
		return {
			platform: 'Web_1.0',
			ticket: session.user?.ticket,
			username: session.user?.username,
			vga: platform.vga,
			deviceInfo: platform.deviceInfo,
			domain: platform.domain,
			uuid: platform.uuid,
			Lang: 'zh-cn',
		}
	},
	getEncryptUserId: () => {
		const platform = usePlatform();
		if (platform.isEncrypt) {
			const session = useSession();
			return session.userId.toString();
		}
	},
})
export const useTgApi = () => tgApi;

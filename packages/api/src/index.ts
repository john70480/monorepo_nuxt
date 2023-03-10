// import * as http from './http';
import { TgClient } from './tgClient';
import { usePlatform } from '@tg/stores/platform';
import { useSession } from '@tg/stores/session';

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
				BASE: options.getBaseUrl(),
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

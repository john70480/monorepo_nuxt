/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './tg/core/BaseHttpRequest';
import type { OpenAPIConfig } from './tg/core/OpenAPI';
import { AxiosHttpRequest } from './tg/core/AxiosHttpRequest';

import { Service } from './tg/services/Service';
import { IpService } from './tg/services/IpService';
import { v4 as uuidv4 } from "uuid";
import { Base64 } from 'js-base64';
import type {
    SetEncryptionParams,
} from './types';

import { usePlatform } from '@tg/stores/src/platform';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class TgClient {

    public readonly tg: Service;
    public readonly ip: IpService;

    public readonly request: BaseHttpRequest;

    public encryptUserId: string | undefined = ''

    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = AxiosHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://tstgen.tg7777.net/relayApi',
            VERSION: config?.VERSION ?? '0.5.83',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.tg = new Service(this.request);
        this.ip = new IpService(this.request);
    }

    public async getEncrypt() {
        const key = uuidv4().replace(/-/g, "");
        const iv = uuidv4().replace(/-/g, "").substring(0, 16);
        const params: SetEncryptionParams = {
            iv: Base64.encode(iv),
            key: Base64.encode(key),
            userId: this.encryptUserId,
        };

        const data = await this.tg.apiOthersSetEncryption({ formData: params });
        if (data.StatusCode === '0' && data.Payload) {
            console.log('apiOthersSetEncryption', data);

            const { aesIv, aesKey, token } = data.Payload;
            usePlatform().encrypt = {
                key: aesKey,
                iv: aesIv,
                token: token,
            };
        }
    }

}


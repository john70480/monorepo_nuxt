/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class IpService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * IP對應語系
     * @returns any
     * @throws ApiError
     */
    public postApiInternalGetLangByIp({
        platform,
        formData,
    }: {
        /**
         * APP版本號
         */
        platform: string,
        formData: {
            /**
             * 查詢IP
             */
            ip: string;
        },
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        Message?: string;
        /**
         * 回覆代碼
         * - 0 成功
         * - 4444 IP異常
         *
         */
        StatusCode?: number;
        /**
         * 回傳內容
         */
        Payload?: {
            /**
             * 查詢IP
             */
            userIp?: string;
            /**
             * 對應語系(若無對應會是預設zh-cn)
             */
            langType?: string;
            /**
             * 國家名稱
             */
            country?: string;
            /**
             * 國別代碼
             */
            countryCode?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/internal/get_lang_by_ip',
            headers: {
                'Platform': platform,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

}

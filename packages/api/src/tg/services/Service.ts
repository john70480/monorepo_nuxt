/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { intger } from '../models/intger';
import type { striing } from '../models/striing';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class Service {

    constructor(public readonly httpRequest: BaseHttpRequest) { }

    /**
     * 取得會員歷史帳務
     * @returns any 取得會員歷史帳務
     * @throws ApiError
     */
    public getApiAccountingGetUserHistory({
        platform = 'Android_400',
        uid = 717237,
        category = '',
        platformCode = '',
    }: {
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * 會員id
         */
        uid?: number,
        /**
         * 平台類型代碼，全部帶空值 (tg | sports | casinos | pokers | gaming | lotteries | esports)
         */
        category?: string,
        /**
         * 第三方平台代碼，全部帶空值 (saba | wm_casino | ob_poker | ob_casino | ag_casino | ky_poker | ly_poker | jdb_gaming | cq9_gaming | ob_lottery | sgwin_lottery | bbin_casino | ob_sport | allbet_casino | im_sport | kx_poker | mt_poker | ai_sport | bg_casino | dg_casino | pt_gaming | pg_gaming | mg_gaming)
         */
        platformCode?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass 4444:參數有誤
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 本周資料
             */
            thisWeek?: Array<any>;
            /**
             * 上周資料
             */
            lastWeek?: Array<any>;
            /**
             * 上上周資料
             */
            lastTwoWeek?: Array<any>;
            /**
             * 年度資料
             */
            thisYear?: Array<any>;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/accounting/get_user_history/{uid}',
            path: {
                'uid': uid,
            },
            headers: {
                'Platform': platform,
            },
            query: {
                'category': category,
                'platformCode': platformCode,
            },
        });
    }

    /**
     * 取得會員歷史帳務明細
     * @returns any 取得會員歷史帳務明細
     * @throws ApiError
     */
    public getApiAccountingGetUserHistoryDetail({
        platform = 'Android_400',
        uid = 717237,
        start = '2020-06-22',
        end = '2020-06-22',
        lang = 'zh-cn',
        category = '',
        platformCode = '',
    }: {
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * 會員id
         */
        uid?: number,
        /**
         * 開始日期
         */
        start?: string,
        /**
         * 結束日期
         */
        end?: string,
        /**
         * 多語言zh-cn(簡體中文)、zh-hk(繁體中文)、en-us(英文)
         */
        lang?: string,
        /**
         * 平台類型代碼，全部帶空值 (tg | sports | casinos | pokers | gaming | lotteries | esports)
         */
        category?: string,
        /**
         * 第三方平台代碼，全部帶空值 (saba | wm_casino | ob_poker | ob_casino | ag_casino | ky_poker | ly_poker | jdb_gaming | cq9_gaming | ob_lottery | sgwin_lottery | bbin_casino | ob_sport | allbet_casino | im_sport | kx_poker | mt_poker | ai_sport | bg_casino | dg_casino | pt_gaming | pg_gaming | mg_gaming)
         */
        platformCode?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass 4444:參數有誤
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 已下單資料
             */
            ordered?: Array<any>;
            /**
             * 未下單資料
             */
            notOrder?: Array<any>;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/accounting/get_user_history_detail/{uid}',
            path: {
                'uid': uid,
            },
            headers: {
                'Platform': platform,
                'lang': lang,
            },
            query: {
                'start': start,
                'end': end,
                'category': category,
                'platformCode': platformCode,
            },
        });
    }

    /**
     * 取得會員總帳表
     * @returns any 取得會員總帳表
     * @throws ApiError
     */
    public getApiAccountingGetUserReport({
        platform = 'Android_400',
        uid = 717237,
        category = '',
        platformCode = '',
    }: {
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * 會員id
         */
        uid?: number,
        /**
         * 平台類型代碼，全部帶空值 (tg | sports | casinos | pokers | gaming | lotteries | esports)
         */
        category?: string,
        /**
         * 第三方平台代碼，全部帶空值 (saba | wm_casino | ob_poker | ob_casino | ag_casino | ky_poker | ly_poker | jdb_gaming | cq9_gaming | ob_lottery | sgwin_lottery | bbin_casino | ob_sport | allbet_casino | im_sport | kx_poker | mt_poker | ai_sport | bg_casino | dg_casino | pt_gaming | pg_gaming | mg_gaming)
         */
        platformCode?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass 4444:參數有誤
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 本周結果加總
             */
            thisWeekAfterSum?: string;
            /**
             * 本周獎金加總
             */
            thisWeekRewardSum?: string;
            /**
             * 本周智能下單結果加總
             */
            thisWeekAutoBetAfterSum?: string;
            /**
             * 本周體育結果加總
             */
            thisWeekSportsAfterSum?: string;
            /**
             * 本周娛樂結果加總
             */
            thisWeekGamingAfterSum?: string;
            /**
             * 上周結果加總
             */
            lastWeekAfterSum?: string;
            /**
             * 上周獎金加總
             */
            lastWeekRewardSum?: string;
            /**
             * 上周智能下單結果加總
             */
            lastWeekAutoBetAfterSum?: string;
            /**
             * 上周體育結果加總
             */
            lastWeekSportsAfterSum?: string;
            /**
             * 上周娛樂結果加總
             */
            lastWeekGamingAfterSum?: string;
            /**
             * 上上周結果加總
             */
            lastTwoWeekAfterSum?: string;
            /**
             * 上上周獎金加總
             */
            lastTwoWeekRewardSum?: string;
            /**
             * 上上周智能下單結果加總
             */
            lastTwoWeekAutoBetAfterSum?: string;
            /**
             * 上上周體育結果加總
             */
            lastTwoWeekSportsAfterSum?: string;
            /**
             * 上上周娛樂結果加總
             */
            lastTwoWeekGamingAfterSum?: string;
            /**
             * 近一年結果加總
             */
            thisYearAfterSum?: string;
            /**
             * 近一年獎金加總
             */
            thisYearRewardSum?: string;
            /**
             * 近一年智能下單結果加總
             */
            thisYearAutoBetAfterSum?: string;
            /**
             * 近一年體育結果加總
             */
            thisYearSportsAfterSum?: string;
            /**
             * 近一年娛樂結果加總
             */
            thisYearGamingAfterSum?: string;
            /**
             * 本周資料
             */
            thisWeek?: Array<any>;
            /**
             * 上周資料
             */
            lastWeek?: Array<any>;
            /**
             * 上上周資料
             */
            lastTwoWeek?: Array<any>;
            /**
             * 年度資料
             */
            thisYear?: Array<any>;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/accounting/get_user_report/{uid}',
            path: {
                'uid': uid,
            },
            headers: {
                'Platform': platform,
            },
            query: {
                'category': category,
                'platformCode': platformCode,
            },
        });
    }

    /**
     * 取得總帳表明細
     * @returns any 取得總帳表明細
     * @throws ApiError
     */
    public getApiAccountingGetUserReportDetail({
        platform = 'Android_400',
        uid = 717237,
        date = '2020-06-22',
        timeType = 'day',
        rewardType = 'tg',
        lang = 'zh-cn',
        category = '',
        platformCode = '',
    }: {
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * 會員id
         */
        uid?: number,
        /**
         * 日期
         */
        date?: string,
        /**
         * 日期類型 (month | day)
         */
        timeType?: string,
        /**
         * 查詢類型 (tg | directpush | team | autobet | sports | gaming)
         */
        rewardType?: string,
        /**
         * 多語言zh-cn(簡體中文)、zh-hk(繁體中文)、en-us(英文)
         */
        lang?: string,
        /**
         * 平台類型代碼，全部帶空值 (tg | sports | casinos | pokers | gaming | lotteries | esports)
         */
        category?: string,
        /**
         * 第三方平台代碼，全部帶空值 (saba | wm_casino | ob_poker | ob_casino | ag_casino | ky_poker | ly_poker | jdb_gaming | cq9_gaming | ob_lottery | sgwin_lottery | bbin_casino | ob_sport | allbet_casino | im_sport | kx_poker | mt_poker | ai_sport | bg_casino | dg_casino | pt_gaming | pg_gaming | mg_gaming)
         */
        platformCode?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass 4444:參數有誤
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 總筆數
             */
            totalNum?: string;
            /**
             * 總金額
             */
            totalMoney?: string;
            /**
             * 注單資料，包含TG和第三方
             */
            eventData?: Array<any>;
            /**
             * 第三方注單資料
             */
            thirdData?: Array<any>;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/accounting/get_user_report_detail/{uid}',
            path: {
                'uid': uid,
            },
            headers: {
                'Platform': platform,
                'lang': lang,
            },
            query: {
                'date': date,
                'time_type': timeType,
                'reward_type': rewardType,
                'category': category,
                'platformCode': platformCode,
            },
        });
    }

    /**
     * 取得會員鎖定錢包金額
     * @returns any 取得會員鎖定錢包金額
     * @throws ApiError
     */
    public getApiAccountingGetUserStayQuota({
        platform = 'Android_400',
        uid = 9382,
    }: {
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * 會員id
         */
        uid?: number,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass 4444:參數有誤
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 金額
             */
            data?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/accounting/get_user_stay_quota/{uid}',
            path: {
                'uid': uid,
            },
            headers: {
                'Platform': platform,
            },
        });
    }

    /**
     * 取得會員鎖定錢包明細
     * @returns any 取得會員鎖定錢包明細
     * @throws ApiError
     */
    public getApiAccountingGetUserStayQuotaDetail({
        platform = 'Android_400',
        uid = 9382,
        lang = 'zh-cn',
    }: {
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * 會員id
         */
        uid?: number,
        /**
         * 多語言zh-cn(簡體中文)、zh-hk(繁體中文)、en-us(英文)
         */
        lang?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass 4444:參數有誤
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 總筆數
             */
            count?: string;
            /**
             * 總金額
             */
            total?: string;
            data?: Array<any>;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/accounting/get_user_stay_quota_detail/{uid}',
            path: {
                'uid': uid,
            },
            headers: {
                'Platform': platform,
                'lang': lang,
            },
        });
    }

    /**
     * 取得會員體驗錢包歷程明細
     * @returns any 取得會員體驗錢包歷程明細
     * @throws ApiError
     */
    public getApiAccountingGetExperienceProcessDetail({
        platform = 'Android_400',
        uid = 897762,
        lang = 'zh-cn',
    }: {
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * 會員id
         */
        uid?: number,
        /**
         * 多語言zh-cn(簡體中文)、zh-hk(繁體中文)、en-us(英文)
         */
        lang?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass 4444:參數有誤
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            data?: Array<any>;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/accounting/get_experience_process_detail/{uid}',
            path: {
                'uid': uid,
            },
            headers: {
                'Platform': platform,
                'lang': lang,
            },
        });
    }

    /**
     * 總帳表明細 - 各平台獎金統計
     * @returns any 取得總帳表明細
     * @throws ApiError
     */
    public getApiAccountingGetUserReportRewardStatistic({
        platform = 'Android_400',
        uid = 717237,
        date = '2020-06-22',
        timeType = 'day',
    }: {
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * 會員id
         */
        uid?: number,
        /**
         * 日期
         */
        date?: string,
        /**
         * 日期類型 (month | day)
         */
        timeType?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass 4444:參數有誤
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * TG獎金
             */
            tg?: string;
            /**
             * 體育獎金
             */
            sports?: string;
            /**
             * 真人獎金
             */
            casinos?: string;
            /**
             * 棋牌獎金
             */
            pokers?: string;
            /**
             * 電子獎金
             */
            gaming?: string;
            /**
             * 彩票獎金
             */
            lotteries?: string;
            /**
             * 電競獎金
             */
            esports?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/accounting/get_user_report_reward_statistic/{uid}',
            path: {
                'uid': uid,
            },
            headers: {
                'Platform': platform,
            },
            query: {
                'date': date,
                'time_type': timeType,
            },
        });
    }

    /**
     * 取得歷年賽事統計(聯盟列表)
     * @returns any 回傳歷年賽事統計(聯盟列表)
     * @throws ApiError
     */
    public getApiGamesCorrectScoreList({
        platform = 'Android_400',
        lang,
    }: {
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * 語言zh-cn、zh-hk、en-us
         */
        lang?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass 4444:參數錯誤
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 聯盟列表
             */
            list?: Array<any>;
            /**
             * 熱門聯盟列表
             */
            popular?: Array<{
                /**
                 * 聯盟ID
                 */
                id?: number;
                /**
                 * 聯盟名稱
                 */
                name?: string;
                /**
                 * 聯盟Logo
                 */
                logo?: string;
            }>;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/games/correct_score/list',
            headers: {
                'Platform': platform,
                'lang': lang,
            },
        });
    }

    /**
     * 取得歷年賽事統計(統計資料) 歐洲杯請帶45
     * @returns any 回傳歷年賽事統計(統計資料)
     * @throws ApiError
     */
    public getApiGamesCorrectScoreDetail({
        leagueId,
        platform = 'Android_400',
        lang,
    }: {
        /**
         * url上需帶聯盟ID
         */
        leagueId: number,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * 語言zh-cn、zh-hk、en-us
         */
        lang?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 聯盟ID
             */
            id?: number;
            /**
             * 聯盟聯盟
             */
            name?: string;
            /**
             * 聯盟Logo
             */
            logo?: string;
            /**
             * 比分內容
             */
            content?: Array<{
                /**
                 * 年份
                 */
                title?: string;
                /**
                 * 遊戲名稱(賽季-聯盟-場數)
                 */
                games?: string;
                /**
                 * 統計資料
                 */
                statistics?: Array<any>;
            }>;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/games/correct_score/{leagueId}/detail',
            path: {
                'leagueId': leagueId,
            },
            headers: {
                'Platform': platform,
                'lang': lang,
            },
        });
    }

    /**
     * 取得歷年賽事統計(聯盟搜尋)
     * @returns any 回傳歷年賽事統計(聯盟搜尋)
     * @throws ApiError
     */
    public getApiGamesCorrectScoreSearch({
        q,
        platform = 'Android_400',
        lang,
    }: {
        /**
         * 關鍵字(需兩個字以上)
         */
        q: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * 語言zh-cn、zh-hk、en-us
         */
        lang?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass 4444:參數錯誤
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: Array<any>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/games/correct_score/search',
            headers: {
                'Platform': platform,
                'lang': lang,
            },
            query: {
                'q': q,
            },
        });
    }

    /**
     * 取得盤口各選項交易量
     * @returns any 取得盤口各選項交易量
     * @throws ApiError
     */
    public getApiGamesDealmoney({
        gameId = '746490.3',
        marketId = '746490.302',
    }: {
        /**
         * gameId
         */
        gameId?: string,
        /**
         * marketId
         */
        marketId?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: Array<{
            /**
             * 選項id
             */
            selectionId?: number;
            /**
             * 選項下注量總和
             */
            dealMoney?: number;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/games/dealmoney/{gameId}/{marketId}',
            path: {
                'gameId': gameId,
                'marketId': marketId,
            },
        });
    }

    /**
     * 賽事列表
     * @returns any 賽事列表
     * @throws ApiError
     */
    public getApiGamesMatchList({
        vga,
        deviceInfo,
        uuid,
        platform = 'Android_400',
        ticket = 35883569,
        username = 'pf123',
        type,
        lang,
    }: {
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * 登入id
         */
        ticket?: number,
        /**
         * 使用者名稱
         */
        username?: string,
        /**
         * 賽事列表類型 UEFA:歐洲國家杯 olympic:東京奧運
         */
        type?: any,
        /**
         * 語言zh-cn、zh-hk、en-us
         */
        lang?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: Array<any>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/games/match_list',
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'Username': username,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
                'lang': lang,
            },
            query: {
                'type': type,
            },
        });
    }

    /**
     * 盤口資料
     * @returns any 回傳結果
     * @throws ApiError
     */
    public getApiGamesMarketSelection({
        vga,
        deviceInfo,
        uuid,
        gameId,
        platform = 'Android_400',
        ticket = 35883569,
        username = 'pf123',
        lang,
    }: {
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * 比賽ID
         */
        gameId: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * 登入id
         */
        ticket?: number,
        /**
         * 使用者名稱
         */
        username?: string,
        /**
         * 語言zh-cn、zh-hk、en-us
         */
        lang?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0 Pass
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 比賽ID
             */
            gameId?: string;
            /**
             * 比賽名稱
             */
            gameName?: string;
            /**
             * 主隊名稱
             */
            home?: string;
            /**
             * 客隊名稱
             */
            away?: string;
            /**
             * 聯盟ID
             */
            competitionId?: string;
            /**
             * 聯盟名稱
             */
            competitionName?: string;
            /**
             * 比賽時間
             */
            gameTime?: string;
            /**
             * 是否有直播 0:無 1:有
             */
            liveStreaming?: string;
            /**
             * 直播間ID ，若無直播為-1
             */
            matchId?: number;
            optionList?: Array<any>;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/games/market_selection',
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'Username': username,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
                'lang': lang,
            },
            query: {
                'gameId': gameId,
            },
        });
    }

    /**
     * 撤單
     * @returns any 回傳結果
     * @throws ApiError
     */
    public postApiGamesVerifyCancelBet({
        vga,
        deviceInfo,
        uuid,
        platform = 'Android_400',
        ticket = 35883569,
        username = 'pf123',
        formData,
    }: {
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * 登入id
         */
        ticket?: number,
        /**
         * 使用者名稱
         */
        username?: string,
        formData?: {
            /**
             * 下單單號
             */
            betId?: string;
        },
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 0 Pass 撤单执行成功
         * - 2101 撤单人并非下单人，撤单失败
         * - 2102 撤单执行成功，該單已撤單
         * - 2103 已过开赛时间，撤单失败
         * - 2104 仅可在下单后180秒内撤单，撤单失败
         * - 2105 3分钟内最多撤单 5 次，请稍后再试
         * - 2106 1天内最多撤单10次，请稍后再试
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: any;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/games/verify_cancel_bet/{userId}',
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'Username': username,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * 熱門投注賽事(4)
     * @returns any 熱門投注賽事(4)
     * @throws ApiError
     */
    public getApiGamesPopularBets({
        platform = 'Android_400',
        lang,
    }: {
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * 語言zh-cn、zh-hk、en-us
         */
        lang?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: Array<any>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/games/popular_bets',
            headers: {
                'Platform': platform,
                'lang': lang,
            },
        });
    }

    /**
     * 下注
     * @returns any 下注
     * @throws ApiError
     */
    public postApiGamesBet({
        vga,
        deviceInfo,
        uuid,
        domain,
        platform = 'Android_400',
        ticket = 35883569,
        username = 'pf123',
        formData,
    }: {
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * 網域
         */
        domain: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * 登入id
         */
        ticket?: number,
        /**
         * 使用者名稱
         */
        username?: string,
        formData?: {
            /**
             * 比賽資訊token
             */
            token?: string;
            /**
             * 下注金額
             */
            size?: string;
            /**
             * 獲利率 5.67%時 傳送 0.0567
             */
            profit?: string;
            /**
             * 保本選項時驗證碼Key
             */
            captchaKey?: string;
            /**
             * 保本選項時用戶輸入的驗證碼
             */
            captcha?: string;
            /**
             * 錢包類型 0 一般 1 體驗金錢包
             */
            walletType?: string;
            /**
             * 智能下單手動下單用參數，執行序號
             */
            execNumber?: string;
            /**
             * 智能下單手動下單用參數，授權TG系統自動執行 (0不授權、1授權)
             */
            authExec?: string;
        },
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 0：Pass
         * - 4444:参数有误
         * - 1710:待确认
         * - 1711:交易金额大于可用馀额
         * - 1712:比赛关闭
         * - 1713:重复交易
         * - 1714:您已重复下单，请稍候再试
         * - 1717:请联系上层管理员或客服人员
         * - 1718:赔率小于1
         * - 1719:金额小于$minBetSize
         * - 1721:体验金活动下注限制
         * - 1722:您的体验金活动已到期，请重新操作。
         * - 1723:禁止相同IP重复下单同场保本赛事
         * - 1731:图形验证码错误
         * - 1749:此选项目前无法交易
         * - 1750:获利率变更
         * - 1753:交易金额已超过该赔率可交易金额
         * - 1771:超过单项$setValue限制
         * - 1772:超过单玩法$setValue限制
         * - 1773:超过单场$setValue限制
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 微商廣告設定 1:顯示橫幅,也顯示廣告(非微商,已達門檻,無設定不顯示) 2:顯示橫幅,不顯示廣告 3:不用橫幅,不用廣告
             */
            advSet?: number;
            /**
             * 超过下注限制時回傳限制額度
             */
            messageValue?: number;
            /**
             * 交易金额已超过该赔率可交易金额回傳赔率
             */
            originalOdd?: string;
            /**
             * 交易金额大于可用馀额回傳保留獎金
             */
            keepBonus?: string;
            /**
             * 下注成功單號
             */
            betId?: string;
            /**
             * 下注金額
             */
            dealMoney?: string;
            /**
             * betStatus 為 W 延遲收單時回傳"待确认"
             */
            note?: string;
            /**
             * 當前獲利率
             */
            profit?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/games/bet',
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'Username': username,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
                'Domain': domain,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * 對戰紀錄
     * @returns any 下注
     * @throws ApiError
     */
    public getApiGamesEventRecord({
        matchId,
        lang,
    }: {
        /**
         * url上需帶match id
         */
        matchId: number,
        /**
         * 語言zh-cn、zh-hk、en-us
         */
        lang?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 賽事資訊
             */
            info?: any;
            /**
             * 伤停情况
             */
            injury?: {
                /**
                 * 主队伤停情况
                 */
                home?: Array<{
                    /**
                     * 球員ID
                     */
                    id?: number;
                    /**
                     * 球员名称
                     */
                    name?: string;
                    /**
                     * 球员位置
                     */
                    position?: string;
                    /**
                     * 球员logo
                     */
                    logo?: string;
                    /**
                     * 伤停原因
                     */
                    reason?: string;
                    /**
                     * 影响场次
                     */
                    missedMatches?: number;
                    /**
                     * 开始时间
                     */
                    startTime?: number;
                    /**
                     * 归队时间
                     */
                    endTime?: number;
                    /**
                     * 1-受伤 2-停赛
                     */
                    type?: number;
                }>;
                /**
                 * 客隊伤停情况
                 */
                away?: Array<{
                    /**
                     * 球員ID
                     */
                    id?: number;
                    /**
                     * 球员名称
                     */
                    name?: string;
                    /**
                     * 球员位置
                     */
                    position?: string;
                    /**
                     * 球员logo
                     */
                    logo?: string;
                    /**
                     * 伤停原因
                     */
                    reason?: string;
                    /**
                     * 影响场次
                     */
                    missedMatches?: number;
                    /**
                     * 开始时间
                     */
                    startTime?: number;
                    /**
                     * 归队时间
                     */
                    endTime?: number;
                    /**
                     * 1-受伤 2-停赛
                     */
                    type?: number;
                }>;
            };
            /**
             * 联赛积分
             */
            league?: {
                /**
                 * 主隊積分資訊
                 */
                home?: {
                    /**
                     * 排名
                     */
                    position?: number;
                    /**
                     * 积分
                     */
                    pts?: number;
                    /**
                     * 已赛场数
                     */
                    played?: number;
                    /**
                     * 胜场数
                     */
                    won?: number;
                    /**
                     * 平场数
                     */
                    drawn?: number;
                    /**
                     * 失败场数
                     */
                    lost?: number;
                    /**
                     * 进球数
                     */
                    goals?: number;
                    /**
                     * 客场进球
                     */
                    awayGoals?: number;
                    /**
                     * 失球数
                     */
                    against?: number;
                    /**
                     * 净胜球数
                     */
                    diff?: number;
                };
                /**
                 * 客隊積分資訊
                 */
                away?: {
                    /**
                     * 排名
                     */
                    position?: number;
                    /**
                     * 积分
                     */
                    pts?: number;
                    /**
                     * 已赛场数
                     */
                    played?: number;
                    /**
                     * 胜场数
                     */
                    won?: number;
                    /**
                     * 平场数
                     */
                    drawn?: number;
                    /**
                     * 失败场数
                     */
                    lost?: number;
                    /**
                     * 进球数
                     */
                    goals?: number;
                    /**
                     * 客场进球
                     */
                    awayGoals?: number;
                    /**
                     * 失球数
                     */
                    against?: number;
                    /**
                     * 净胜球数
                     */
                    diff?: number;
                };
            };
            /**
             * 历史交锋
             */
            history?: {
                /**
                 * 一般所有歷史交鋒
                 */
                normal?: Array<{
                    /**
                     * 主隊
                     */
                    home?: string;
                    /**
                     * 客隊
                     */
                    away?: string;
                    /**
                     * 全場比分
                     */
                    score?: string;
                    /**
                     * 半場比分
                     */
                    halfScore?: string;
                    /**
                     * 聯盟
                     */
                    competition?: string;
                    /**
                     * 聯盟ID
                     */
                    competitionId?: number;
                    /**
                     * 開賽時間
                     */
                    openDate?: string;
                    /**
                     * 盤路
                     */
                    handicap?: {
                        /**
                         * 讓分
                         */
                        handicap?: string;
                        /**
                         * 結果 1:贏  2:輸  3:走
                         */
                        result?: number;
                    };
                }>;
                /**
                 * 主客隊相同歷史交鋒
                 */
                same?: Array<{
                    /**
                     * 主隊
                     */
                    home?: string;
                    /**
                     * 客對
                     */
                    away?: string;
                    /**
                     * 全場比分
                     */
                    score?: string;
                    /**
                     * 半場比分
                     */
                    halfScore?: string;
                    /**
                     * 聯盟
                     */
                    competition?: string;
                    /**
                     * 聯盟ID
                     */
                    competitionId?: number;
                    /**
                     * 開賽時間
                     */
                    openDate?: string;
                    /**
                     * 盤路
                     */
                    handicap?: {
                        /**
                         * 讓分
                         */
                        handicap?: string;
                        /**
                         * 結果 1:贏  2:輸  3:走
                         */
                        result?: number;
                    };
                }>;
            };
            /**
             * 近期战绩
             */
            recent?: any;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/games/event_record/{gameId}',
            path: {
                'matchId': matchId,
            },
            headers: {
                'lang': lang,
            },
        });
    }

    /**
     * 確認延遲注單是否有被審核，解鎖lock畫面用
     * @returns any 回傳延遲注單是否有被審核
     * @throws ApiError
     */
    public getApiGamesCheckReview({
        vga,
        deviceInfo,
        uuid,
        platform = 'Android_400',
        username = 'pjojo',
        ticket = 35883569,
        betId = 35883569,
    }: {
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * 使用者名稱
         */
        username?: string,
        /**
         * 登入id
         */
        ticket?: number,
        /**
         * 注單ID
         */
        betId?: number,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 6001：審核同意 6002:審核拒絕 6000:lock
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 注單ID
             */
            betId?: string;
            /**
             * 審核後獲利率
             */
            profit?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/games/check_review/{betId}',
            path: {
                'betId': betId,
            },
            headers: {
                'Platform': platform,
                'Username': username,
                'Ticket': ticket,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
        });
    }

    /**
     * 取得會員未過帳交易明細(新版含三方遊戲)
     * @returns any 取得會員未過帳交易明細(新版含三方遊戲)
     * @throws ApiError
     */
    public getApiGamesBetInfo({
        vga,
        deviceInfo,
        uuid,
        username = 'Pc891',
        ticket = 0,
        // username = 'Pc891',
        lang,
        category,
        platformCode,
    }: {
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * 會員帳號
         */
        username?: string,
        /**
         * login_id
         */
        ticket?: number,
        /**
         * 會員帳號
         */
        username?: string,
        /**
         * 語言zh-cn、zh-hk、en-us
         */
        lang?: string,
        /**
         * 不帶預設所有
         * - tg (TG平台): platformCode包含 tg (TG平台)
         * - casinos (真人) : platformCode包含wm_casino(WM真人)
         * - sports (體育) : platformCode包含saba(沙巴)、ob_sport(OB體育)、im_sport(IM體育)、ai_sport(AI體育)
         * - lotteries (彩票) : platformCode包含ob_lottery(OB彩票)、sgwin_lottery(雙贏彩票)
         *
         */
        category?: string,
        /**
         * tg(TG平台)、wm_casino(WM真人)、saba(沙巴)、ob_lottery(ob彩票)、sgwin_lottery(雙贏彩票)、ob_sport(OB體育)、im_sport(IM體育)、ai_sport(AI體育)
         */
        platformCode?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 總筆數
             */
            totalNum?: string;
            /**
             * 總交易金額
             */
            totalMoney?: string;
            /**
             * 總預估獲利
             */
            totalProfit?: string;
            /**
             * 注單內容
             */
            betData?: Array<any>;
            /**
             * 預約下單內容
             */
            reserveData?: Array<any>;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/games/bet_info/{username}',
            path: {
                'username': username,
            },
            headers: {
                'Ticket': ticket,
                'username': username,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
                'lang': lang,
            },
            query: {
                'category': category,
                'platformCode': platformCode,
            },
        });
    }

    /**
     * 取得賽事結果
     * @returns any 回傳指定日期賽果
     * @throws ApiError
     */
    public getApiGamesGameResult({
        platform = 'Android_421',
        lang,
        openDate = '2020-04-23',
    }: {
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * 語言zh-cn、zh-hk、en-us
         */
        lang?: string,
        /**
         * 日期
         */
        openDate?: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/games/game_result/{openDate}',
            path: {
                'openDate': openDate,
            },
            headers: {
                'Platform': platform,
                'lang': lang,
            },
        });
    }

    /**
     * 取得聯盟近期賽事列表
     * @returns any 回傳歷年賽事統計(統計資料)
     * @throws ApiError
     */
    public getApiGamesLeaguesRecentMatches({
        platform = 'Android_999',
        leagueId = '45',
        lang,
    }: {
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * url上需帶聯盟ID 歐洲杯(45) 東奧(olympics)
         */
        leagueId?: string,
        /**
         * 語言zh-cn、zh-hk、en-us
         */
        lang?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass
         */
        statusCode?: number;
        /**
         * 賽事資料
         */
        payload?: {
            /**
             * 今日/明日/本周
             */
            'today/tomorrow/thisweek'?: Array<any>;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/games/leagues/{leagueId}/recent_matches',
            path: {
                'leagueId': leagueId,
            },
            headers: {
                'Platform': platform,
                'lang': lang,
            },
        });
    }

    /**
     * 取得聯盟近期賽事視頻列表
     * @returns any 回傳歷年賽事統計(統計資料)
     * @throws ApiError
     */
    public getApiGamesLeaguesLiveStreamingList({
        platform = 'Android_999',
        leagueId = 'all',
        lang,
    }: {
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * url上需帶聯盟ID 不限制聯盟則帶(all) 歐洲杯(45) 東奧(olympics)
         */
        leagueId?: string,
        /**
         * 語言zh-cn、zh-hk、en-us
         */
        lang?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass
         */
        statusCode?: number;
        /**
         * 賽事資料
         */
        payload?: Array<any>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/games/leagues/{leagueId}/live_streaming_list',
            path: {
                'leagueId': leagueId,
            },
            headers: {
                'Platform': platform,
                'lang': lang,
            },
        });
    }

    /**
     * 取得聯盟完整賽程
     * @returns any 回傳聯盟完整賽程資訊
     * @throws ApiError
     */
    public getApiGamesLeaguesMatches({
        platform = 'Android_999',
        leagueId = 45,
        seasonId,
        lang,
    }: {
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * url上需帶聯盟ID 歐洲杯(45) 東奧男足(11) 東奧男足(12)
         */
        leagueId?: number,
        /**
         * 賽季ID 沒帶預設聯盟當前賽季
         */
        seasonId?: string,
        /**
         * 語言zh-cn、zh-hk、en-us
         */
        lang?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 當前賽季ID
             */
            curSeasonId?: number;
            /**
             * 當前階段ID
             */
            curStageId?: number;
            /**
             * 賽季列表
             */
            seasons?: Array<any>;
            /**
             * 階段列表
             */
            stages?: Array<any>;
            /**
             * 聯盟列表
             */
            leagues?: Array<any>;
            /**
             * 隊伍列表
             */
            teams?: Array<any>;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/games/leagues/{leagueId}/matches',
            path: {
                'leagueId': leagueId,
            },
            headers: {
                'Platform': platform,
                'lang': lang,
            },
            query: {
                'season_id': seasonId,
            },
        });
    }

    /**
     * 取得聯盟積分資訊
     * @returns any 回傳聯盟賽季積分榜資訊
     * @throws ApiError
     */
    public getApiGamesLeaguesSeasonTables({
        platform = 'Android_999',
        leagueId = 45,
        seasonId,
        lang,
    }: {
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * url上需帶聯盟ID 歐洲杯(45) 東奧男足(11) 東奧男足(12)
         */
        leagueId?: number,
        /**
         * 賽季ID 沒帶預設聯盟當前賽季
         */
        seasonId?: string,
        /**
         * 語言zh-cn、zh-hk、en-us
         */
        lang?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 當前賽季ID
             */
            curSeasonId?: number;
            /**
             * 當前階段ID
             */
            curStageId?: number;
            /**
             * 賽季列表
             */
            seasons?: Array<any>;
            /**
             * 階段列表
             */
            stages?: Array<any>;
            /**
             * 隊伍列表
             */
            teams?: Array<any>;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/games/leagues/{leagueId}/season_tables',
            path: {
                'leagueId': leagueId,
            },
            headers: {
                'Platform': platform,
                'lang': lang,
            },
            query: {
                'season_id': seasonId,
            },
        });
    }

    /**
     * 取得聯盟對陣表資訊
     * @returns any 回傳聯盟對陣表資訊
     * @throws ApiError
     */
    public getApiGamesLeaguesBattleTables({
        platform = 'Android_999',
        leagueId = '45',
    }: {
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * url上需帶聯盟ID 歐洲杯(45) 東奧(olympics)
         */
        leagueId?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 對陣表資訊
             */
            battleTables?: Array<any>;
            /**
             * 隊伍列表
             */
            teams?: Array<any>;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/games/leagues/{leagueId}/battle_tables',
            path: {
                'leagueId': leagueId,
            },
            headers: {
                'Platform': platform,
            },
        });
    }

    /**
     * 賽事引導
     * @returns any 回傳結果
     * @throws ApiError
     */
    public getApiGamesMatchGuideUserMatch({
        vga,
        deviceInfo,
        uuid,
        userId,
        matchId,
        platform = 'Android_400',
        ticket = 35883569,
        username = 'pf123',
        lang = 'zh-cn',
    }: {
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * 使用者ID
         */
        userId: string,
        /**
         * 比賽ID
         */
        matchId: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * 登入id
         */
        ticket?: number,
        /**
         * 使用者名稱
         */
        username?: string,
        /**
         * 語言 zh-cn、zh-hk、en-us
         */
        lang?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0 Pass 4444:參數錯誤
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            gameList?: Array<any>;
            information?: any;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/games/match_guide/user/{userId}/match/{matchId}',
            path: {
                'userId': userId,
                'matchId': matchId,
            },
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'Username': username,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
                'lang': lang,
            },
        });
    }

    /**
     * 曬單
     * @returns any 回傳結果
     * @throws ApiError
     */
    public postApiGamesMatchPublish({
        vga,
        deviceInfo,
        uuid,
        platform = 'Android_400',
        ticket = 35883569,
        username = 'pf123',
        lang = 'zh-cn',
        formData,
    }: {
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * 登入id
         */
        ticket?: number,
        /**
         * 使用者名稱
         */
        username?: string,
        /**
         * 語言 zh-cn、zh-hk、en-us
         */
        lang?: string,
        formData?: {
            /**
             * 聊天室ID
             */
            roomId?: string;
            /**
             * 使用者ID
             */
            userId?: intger;
            /**
             * 會員帳號
             */
            username?: string;
            /**
             * 要曬單的單號，多個請用,個開
             */
            betData?: string;
        },
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0 Pass 4444:參數錯誤 1778:晒单延迟中
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 聊天室ID
             */
            roomId?: string;
            /**
             * 使用者ID
             */
            userId?: string;
            /**
             * 會員帳號
             */
            username?: string;
            /**
             * 會員等級
             */
            level?: string;
            /**
             * 曬單時間
             */
            createTime?: number;
            dealData?: Array<any>;
        };
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/games/match_publish',
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'Username': username,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
                'lang': lang,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * 取得專區導覽列及首場賽事時間
     * @returns any 回專區導覽列及首場賽事時間
     * @throws ApiError
     */
    public getApiGamesMajorEventsNavigation({
        platform = 'Android_999',
    }: {
        /**
         * APP版本號
         */
        platform?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 歐洲盃專區
             */
            majorEvent?: {
                /**
                 * 首場賽事時間
                 */
                firstTime?: string;
                navigation?: Array<string>;
                /**
                 * 專區名稱
                 */
                name?: string;
            };
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/games/major_events/navigation',
            headers: {
                'Platform': platform,
            },
        });
    }

    /**
     * 預約下注
     * @returns any 預約下注
     * @throws ApiError
     */
    public postApiGamesReservationAdd({
        vga,
        deviceInfo,
        uuid,
        domain,
        platform = 'Android_400',
        ticket = 35883569,
        username = 'pf123',
        formData,
    }: {
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * 網域
         */
        domain: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * 登入id
         */
        ticket?: number,
        /**
         * 使用者名稱
         */
        username?: string,
        formData?: {
            userId?: number;
            /**
             * 比賽資訊token
             */
            token?: string;
            /**
             * 下注金額
             */
            size?: string;
            /**
             * 獲利率範圍設定-開始 下限獲利率-1% 單位%
             */
            profitStart?: string;
            /**
             * 獲利率範圍設定-結束 上限獲利率+1% 單位%
             */
            profitEnd?: string;
            /**
             * 選項獲利率
             */
            profit?: string;
        },
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 0：Pass
         * - 4444:参数有误
         * - 1774:不可预约保本
         * - 1775:预约下注已达上限
         * - 1776:预约失败
         * - 1779:赛事资料异动
         * - 1782:距离开赛时间小于三分钟
         * - 1783:设定的获利%区间需与目前获利%±1%以内
         * - 1784:交易金额大于TG总额
         * - 1785:使用者被禁止下注，无法预约
         * - 1771:超过单项{messageVale}限制 ，剩下額度{remainingQuota}
         * - 1772:超过单玩法{messageVale}限制 ，剩下額度{remainingQuota}
         * - 1773:超过单场{messageVale}限制 ，剩下額度{remainingQuota}
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 預約單號
             */
            reservationId?: string;
            /**
             * 賽事名稱
             */
            gameName?: string;
            /**
             * 玩法市場
             */
            marketName?: string;
            /**
             * 選項
             */
            selectionName?: string;
            /**
             * 預約下注金額
             */
            size?: string;
            /**
             * 微商廣告設定 1:顯示橫幅,也顯示廣告(非微商,已達門檻,無設定不顯示) 2:顯示橫幅,不顯示廣告 3:不用橫幅,不用廣告
             */
            advSet?: number;
            /**
             * 超过下注限制時回傳限制額度
             */
            messageValue?: number;
            /**
             * 選項獲利率
             */
            profit?: string;
            /**
             * 剩餘可預約額度
             */
            remainingQuota?: number;
            /**
             * 玩法類型 1:波膽 2:半場波膽 3:總入球 0:首入球
             */
            marketType?: string;
            /**
             * 選項ID
             */
            selectionId?: string;
            /**
             * 主隊
             */
            home?: string;
            /**
             * 客隊
             */
            away?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/games/reservation/add',
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'Username': username,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
                'Domain': domain,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * 預約詳情
     * @returns any 預約詳情
     * @throws ApiError
     */
    public getApiGamesReservationLog({
        vga,
        deviceInfo,
        uuid,
        domain,
        userId,
        reservationId,
        platform = 'Android_400',
        ticket = 35883569,
        username = 'pf123',
    }: {
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * 網域
         */
        domain: string,
        /**
         * 使用者ID
         */
        userId: string,
        /**
         * 預約下注單號
         */
        reservationId: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * 登入id
         */
        ticket?: number,
        /**
         * 使用者名稱
         */
        username?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 0：Pass
         * - 4444:参数有误
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 預約內容
             */
            reservation?: {
                /**
                 * 預約下注金額
                 */
                dealMoney?: string;
                /**
                 * 預約獲利率下限
                 */
                profitStart?: string;
                /**
                 * 預約獲利率上限
                 */
                profitEnd?: string;
                /**
                 * 預約時間
                 */
                createdAt?: string;
            };
            /**
             * 回傳內容
             */
            history?: Array<any>;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/games/reservation/log/{userId}/{reservationId}',
            path: {
                'userId': userId,
                'reservationId': reservationId,
            },
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'Username': username,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
                'Domain': domain,
            },
        });
    }

    /**
     * 取消預約下注
     * @returns any 取消預約下注
     * @throws ApiError
     */
    public postApiGamesReservationCancel({
        vga,
        deviceInfo,
        uuid,
        domain,
        platform = 'Android_400',
        ticket = 35883569,
        username = 'pf123',
        formData,
    }: {
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * 網域
         */
        domain: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * 登入id
         */
        ticket?: number,
        /**
         * 使用者名稱
         */
        username?: string,
        formData?: {
            userId?: number;
            /**
             * 預約單號
             */
            reservationId?: number;
        },
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 0：Pass
         * - 4444:参数有误
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: any;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/games/reservation/cancel',
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'Username': username,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
                'Domain': domain,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * 保留餘額
     * @returns any 回傳指定會員保留餘額
     * @throws ApiError
     */
    public getApiFinanceGameMoneyHold({
        uid = 203189,
    }: {
        /**
         * 會員id
         */
        uid?: number,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass 4444:參數有誤
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 保留餘額
             */
            amount?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/finance/game_money_hold/{uid}',
            path: {
                'uid': uid,
            },
        });
    }

    /**
     * 儲值金額限制資訊
     * @returns any 回傳最高及最低可儲值金額
     * @throws ApiError
     */
    public getApiFinanceSaveMoneyLimit({
        type = 46,
    }: {
        /**
         * 儲值管道 例如 46:优代付-支付宝 77:百富-网银支付(會變動)
         */
        type?: number,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass 4444:參數有誤或是type不存在
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 最高金額
             */
            maxLimit?: number;
            /**
             * 最低金額
             */
            minLimit?: number;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/finance/save_money_limit/{type}',
            path: {
                'type': type,
            },
        });
    }

    /**
     * 查詢會員保留額度
     * @returns any 回傳會員互轉時間及點數
     * @throws ApiError
     */
    public getApiFinanceStayPoint({
        platform = 'Android_400',
        uid = 789212,
        type = 1,
    }: {
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * 查詢之會員代碼
         */
        uid?: number,
        /**
         * 模式:0-提領頁面會員互轉保留餘額, 1-互轉頁面會員互轉保留餘額
         */
        type?: number,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass 4444:參數有誤
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 查詢之會員代碼
             */
            uid?: string;
            /**
             * 需保留額度
             */
            stayPoint?: string;
            /**
             * 保留(最近)時間
             */
            stayTime?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/finance/stay_point/{uid}/{type}',
            path: {
                'uid': uid,
                'type': type,
            },
            headers: {
                'Platform': platform,
            },
        });
    }

    /**
     * 檢查互轉帳號
     * @returns any 檢查互轉帳號
     * @throws ApiError
     */
    public getApiFinanceCheckUsername({
        uid = 14265,
        username = 'KHY007',
    }: {
        /**
         * 會員id
         */
        uid?: number,
        /**
         * username
         */
        username?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass 4444:參數有誤 1302:找不到轉入會員ID 1303:轉出轉入ID相同
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 狀態碼
             */
            reCode?: string;
            /**
             * 訊息
             */
            reMsg?: string;
            /**
             * 轉入會員id
             */
            incomeUid?: number;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/finance/check_username/{uid}/{username}',
            path: {
                'uid': uid,
                'username': username,
            },
        });
    }

    /**
     * 提領手續費
     * @returns any 提領手續費
     * @throws ApiError
     */
    public getApiFinanceReceiveFee({
        platform = 'Android_400',
        username = 'KHY007',
    }: {
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * 帳號
         */
        username?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass 1310:查無此帳號 4444:參數有誤
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 開始時間
             */
            startTime?: string;
            /**
             * 結束時間
             */
            endTime?: string;
            /**
             * 第幾次提領
             */
            times?: string;
            /**
             * 今日尚可提領金額
             */
            withdrawableAmount?: string;
            /**
             * 今日可提領金額上限
             */
            dailyWithdrawableAmount?: string;
            /**
             * 可提領金額是否無限制
             */
            unlimitedWithdrawableAmount?: string;
            /**
             * 手續費
             */
            fee?: string;
            /**
             * 手續費減免次數
             */
            freeReductionsNum?: string;
            /**
             * 提領次數
             */
            reached?: string;
            /**
             * 提领次数限制的开关
             */
            isEnable?: string;
            /**
             * 免費手續費次數是否無限制
             */
            unlimitedFee?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/finance/receive_fee/{username}',
            path: {
                'username': username,
            },
            headers: {
                'Platform': platform,
            },
        });
    }

    /**
     * 銀行列表
     * @returns any 回傳銀行列表
     * @throws ApiError
     */
    public getApiFinanceBankList({
        platform = 'Android_400',
        lang = 'zh-cn',
    }: {
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * 多語言zh-cn(簡體中文)、zh-hk(繁體中文)、en-us(英文)
         */
        lang?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: Array<any>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/finance/bank_list',
            headers: {
                'Platform': platform,
                'lang': lang,
            },
        });
    }

    /**
     * 取得支付方式
     * @returns any 取得支付方式
     * @throws ApiError
     */
    public getApiFinanceUserPaymentMethod({
        username = 'PYDNA',
        ip = '123.123.123.123',
        platform = 'Web_1.0',
        lang = 'zh-cn',
    }: {
        /**
         * 帳號
         */
        username?: string,
        /**
         * 用戶IP
         */
        ip?: string | null,
        /**
         * 平台
         */
        platform?: string,
        /**
         * 多語言zh-cn(簡體中文)、zh-hk(繁體中文)、en-us(英文)
         */
        lang?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass 4444參數有誤 1310:查無帳號 1311:此帐号无法进行充值，请联系上层或客服 1312:此帐号无法进行充值，请联系上层或客服
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            block1?: {
                /**
                 * 區塊名稱
                 */
                title?: string;
                /**
                 * 支付渠道
                 */
                datalist?: Array<any>;
            };
            block2?: {
                /**
                 * 區塊名稱
                 */
                title?: string;
                /**
                 * 支付渠道
                 */
                datalist?: Array<any>;
            };
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/finance/user_payment_method/{username}',
            path: {
                'username': username,
            },
            headers: {
                'ip': ip,
                'Platform': platform,
                'lang': lang,
            },
        });
    }

    /**
     * 查詢銀行帳戶
     * @returns any 回傳銀行帳戶
     * @throws ApiError
     */
    public getApiFinanceBankAccountName({
        username = 'pjojo',
    }: {
        /**
         * 會員帳號
         */
        username?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 回覆訊息
             */
            message?: string;
            /**
             * 回覆代碼 0：Pass，4444：未傳入會員帳號 1320:無此帳號資料 1321:無帳戶名稱資料
             */
            statusCode?: number;
            /**
             * 回傳內容
             */
            payload?: {
                /**
                 * 帳戶名
                 */
                accountName?: string;
            };
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/finance/bank_account_name/{username}',
            path: {
                'username': username,
            },
        });
    }

    /**
     * 驗證充值提現
     * @returns any 回傳驗證結果
     * @throws ApiError
     */
    public getApiFinanceCheckWithdrawFrequency({
        platform = 'Android_400',
        username = 'pjojo',
        type = 1,
    }: {
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * 會員帳號
         */
        username?: string,
        /**
         * 存提款(1:存款/2:提款)
         */
        type?: number,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass 1305:每笔充值需间隔30秒以上,请稍后再尝试 1306:每笔提领需间隔60秒以上,请稍后再尝试
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 回覆訊息
             */
            message?: string;
            /**
             * 回覆代碼 0：Pass，4444：未傳入會員帳號 1320:無此帳號資料 1321:無帳戶名稱資料
             */
            statusCode?: number;
            /**
             * 回傳內容
             */
            payload?: {
                /**
                 * 驗證狀態
                 */
                status?: string;
            };
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/finance/check_withdraw_frequency/{username}/{type}',
            path: {
                'username': username,
                'type': type,
            },
            headers: {
                'Platform': platform,
            },
        });
    }

    /**
     * 充值渠道資訊資料
     * @returns any 回傳帳戶渠道資訊
     * @throws ApiError
     */
    public getApiFinanceBankInfo({
        platform = 'Android_400',
        username = 'pjojo',
        type = 1,
        amount = 100,
    }: {
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * 會員帳號
         */
        username?: string,
        /**
         * 類別(公司:1銀行,2臨櫃,3支付寶,4微信,5QQ 第三方:11銀行,12臨櫃,13支付寶,14微信,15QQ)
         */
        type?: number,
        /**
         * 儲值金額
         */
        amount?: number,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass 1350:類別選擇錯誤 1351:充值金额不正確 1352:平台帐务整理中请稍等3~5分钟再试 1353:不符合充值金額 1354:無支付渠道資料
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 序號
             */
            id?: number;
            /**
             * 銀行名稱
             */
            fbank?: string;
            /**
             * 分行名稱
             */
            fbranch?: string;
            /**
             * 帳戶號碼
             */
            faccount?: string;
            /**
             * 戶名
             */
            fname?: string;
            /**
             * 類別
             */
            type?: number;
            /**
             * 網址
             */
            url?: string;
            /**
             * 備註
             */
            note?: string;
            /**
             * 備註提示
             */
            noteNotice?: string;
            /**
             * 掃碼提示
             */
            paycodeMsg?: string;
            /**
             * 掃碼檔案名稱
             */
            payQR?: string;
            /**
             * 鏈類型 0:一般貨幣 1:ERC20 2:TRC20 3:OMNI
             */
            chainType?: number;
            /**
             * 匯率
             */
            exchangeRate?: number;
            /**
             * 充值最低金額
             */
            moneyMin?: number;
            /**
             * 充值最高金額
             */
            moneyMax?: number;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/finance/bank_info/{username}/{type}/{amount}',
            path: {
                'username': username,
                'type': type,
                'amount': amount,
            },
            headers: {
                'Platform': platform,
            },
        });
    }

    /**
     * 會員互轉
     * @returns any 回傳會員互轉是否成功
     * @throws ApiError
     */
    public postApiFinanceUserInterchange({
        vga,
        deviceInfo,
        ip,
        formData,
        platform = 'Android_400',
        ticket = 35883569,
        username = 'PYDNA',
        uuid = '裝置UUID',
        domain = '網域',
    }: {
        /**
         * 顯卡名稱
         */
        vga: string,
        /**
         * 裝置資訊
         */
        deviceInfo: string,
        /**
         * 會員ip
         */
        ip: string,
        formData: {
            /**
             * 轉出帳號
             */
            payUserName: string;
            /**
             * 轉入帳號
             */
            incomeUserName: string;
            /**
             * 密碼
             */
            withdrawPassword: string;
            /**
             * 金額
             */
            amount: string;
        },
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * 登入id
         */
        ticket?: number,
        /**
         * 使用者名稱
         */
        username?: string,
        /**
         * 裝置UUID
         */
        uuid?: string,
        /**
         * 網域
         */
        domain?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass / 2201：请重新确认交易密码 / 2202：请重新确认金额 / 2203：互转点数必须大于或等于100点 / 2204：会员帐号错误 / 2205：该身份限制提领动作 / 2206：转入会员帐号错误 / 2207：请重新确认转入转出帐号 / 2208：转出帐号限制 / 2209：转入帐号限制 / 2210：转入系统帐号限制 / 2211：请联系上层或客服 / 2212：未有提领纪录 / 2213：重复互转，请至交易明细查询结果 / 2214：会员身份错误|交易密码 / 2215：交易额度超过可用余额 / 2216：尚有会员互转保留额度100(200分钟) / 2217：尚有赛事保留额度 100 / 2218：新增交易记录失败 / 2219：确认交易失败 / 2220：更新交易记录失败 / 2238：您的会员互转功能已被关闭，无法使用会员互转
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 互轉單號
             */
            orderNum?: string;
            /**
             * 互轉時間
             */
            orderTime?: string;
            /**
             * 互轉金額
             */
            orderAmount?: string;
            /**
             * 轉出帳號
             */
            payUserName?: string;
            /**
             * 轉入帳號
             */
            incomeUserName?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/finance/user_interchange',
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'Username': username,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'ip': ip,
                'uuid': uuid,
                'Domain': domain,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * 取得交易紀錄明細
     * @returns any 取得交易紀錄明細
     * @throws ApiError
     */
    public getApiFinanceMemberMoneyList({
        platform = 'Android_400',
        uid = 281087,
        lang = 'zh-cn',
    }: {
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * 會員id
         */
        uid?: number,
        /**
         * 多語言zh-cn(簡體中文)、zh-hk(繁體中文)、en-us(英文)
         */
        lang?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass 4444:參數有誤
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 總筆數
             */
            totalNum?: string;
            dataList?: Array<any>;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/finance/member_money_list/{uid}',
            path: {
                'uid': uid,
            },
            headers: {
                'Platform': platform,
                'lang': lang,
            },
        });
    }

    /**
     * 申請充值提領
     * @returns any 回傳會員申請提領是否成功
     * @throws ApiError
     */
    public postApiFinanceSaveMoney({
        platform = 'Android_400',
        ticket = 35883569,
        username = 'PYDNA',
        ip = '127.0.0.1',
        vga = 'Google SwiftShader',
        deviceInfo = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36',
        uuid = '裝置UUID',
        domain = '網域',
        formData,
    }: {
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * 登入id
         */
        ticket?: number,
        /**
         * 使用者名稱
         */
        username?: string,
        /**
         * 用戶IP
         */
        ip?: string,
        /**
         * 用戶顯卡資訊
         */
        vga?: string,
        /**
         * 用戶裝置資訊
         */
        deviceInfo?: string,
        /**
         * 裝置UUID
         */
        uuid?: string,
        /**
         * 網域
         */
        domain?: string,
        formData?: {
            /**
             * 申請類型 1:充值 2:提領
             */
            action: string;
            /**
             * 申請金額
             */
            amount: string;
            /**
             * 充值帳戶ID，充值時必填，提領時可留空
             */
            companyAccount?: string;
            /**
             * 提領密碼，充值時可留空，提領時必填
             */
            withdrawPassword?: string;
            /**
             * 申請用戶帳號
             */
            username: string;
            /**
             * 申請渠道名稱，充值時可留空，提領時必填
             */
            saveBy?: string;
            /**
             * 申請銀行名稱，充值時可留空，提領時必填
             */
            bankName?: string;
            /**
             * 帳戶號碼
             */
            accountNum: string;
            /**
             * 帳戶戶名
             */
            accountName: string;
            /**
             * 提領手續費，充值時可留空，提領時必填
             */
            fee?: string;
            /**
             * 匯率
             */
            rate: string;
        },
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：success / 2221：银行材料在48小时内有变更过 / 2222：金额小于100 / 2223：30 | 60秒内有充直/提领成功记录 / 2224：未填写打款人栏位/打款人文字长度大于20 / 2225：尚有赛事保留余额 / 2226：传入资料内含出入管理黑名单 / 2227：打款人户名有误 / 2228：该帐号不可充值 / 2229：该帐号不可提领 / 2230：付款方式不得为空 / 2231：提领的卡号或银行与后台不符 / 2232：无可用渠道 / 2233：汇率已异动 / 2234：提领密码有误 / 2235：已超过每日提领限额 / 2236：手续费不符 / 2237：帐户余额不足 / 2238：数字货币提款功能尚未激活，需要有银行卡提款成功记录才能激活此功能 / 2239：TXID格式错误 / 2240：目前尚未开放此渠道
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: any;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/finance/save_money',
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'Username': username,
                'ip': ip,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
                'Domain': domain,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * 使用者是否有銀行卡提款成功記錄
     * @returns any 使用者是否有銀行卡提款成功記錄
     * @throws ApiError
     */
    public getApiFinanceCheckFirstTakeMoney({
        platform = 'Android_400',
        username = 'P9586',
    }: {
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * 會員帳號
         */
        username?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass，4444：參數有誤
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 使用者是否有銀行卡提款成功記錄  ('1':有提领成功纪录 ;'0':未有提领成功纪录)
             */
            isFirstTakeMoney?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/finance/check_first_take_money',
            headers: {
                'Platform': platform,
                'username': username,
            },
        });
    }

    /**
     * 判斷輸入的帳戶名稱是否與資料庫一致
     * @returns any 判斷輸入的帳戶名稱是否與資料庫一致
     * @throws ApiError
     */
    public postApiFinanceCheckSameAccountName({
        formData,
        platform = 'Android_400',
    }: {
        formData: {
            /**
             * 會員編號
             */
            uid: string;
            /**
             * 帳戶名稱
             */
            accountName: string;
        },
        /**
         * APP版本號
         */
        platform?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass，4444：參數有誤
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 判斷輸入的帳戶名稱是否與資料庫一致  ('1':一致 ;'0':不一致或無資料)
             */
            checkResult?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/finance/check_same_account_name',
            headers: {
                'Platform': platform,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * 第三方錢包轉帳
     * @returns any 回傳第三方錢包轉帳結果
     * @throws ApiError
     */
    public postApiFinanceUserSabaTransferFund({
        platform = 'Android_400',
        ticket = 35883569,
        username = 'PYDNA',
        ip = '127.0.0.1',
        vga = 'Google SwiftShader',
        deviceInfo = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36',
        uuid = '裝置UUID',
        domain = '網域',
        formData,
    }: {
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * 登入id
         */
        ticket?: number,
        /**
         * 使用者名稱
         */
        username?: string,
        /**
         * 用戶IP
         */
        ip?: string,
        /**
         * 用戶顯卡資訊
         */
        vga?: string,
        /**
         * 用戶裝置資訊
         */
        deviceInfo?: string,
        /**
         * 裝置UUID
         */
        uuid?: string,
        /**
         * 網域
         */
        domain?: string,
        formData?: {
            /**
             * 第三方代碼 沙巴體育:saba|WM真人:wm_casino|OB棋牌:ob_poker|OB真人:ob_casino|AG真人:ag_casino|開元棋牌:ky_poker|樂遊棋牌:ly_poker|JDB電子:jdb_gaming|CQ9電子:cq9_gaming|OB彩票:ob_lottery|雙贏彩票:sgwin_lottery|BBIN真人:bbin_casino|OB體育:ob_sport|Allbet真人:allbet_casino|IM體育:im_sport|凱旋棋牌:kx_poker|美天棋牌:mt_poker|AI體育:ai_sport|BG真人:bg_casino|DG真人:dg_casino|PT電子:pt_gaming|PG電子:pg_gaming|MG電子:mg_gaming
             */
            thirdParty?: string;
            /**
             * 轉帳方式 0:第三方轉至tg錢包 1:tg錢包轉第三方
             */
            direction: string;
            /**
             * 轉帳金額
             */
            amount: string;
        },
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0:Pass, 2303:处理中, 2304:转帐失败, 4444:參數有誤, 1310:查無帳號, 2301:该身份限制转帐动作, 2302:您有转帐仍在处理中，请5分钟后重新再试
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 當statusCode=2304時，转帐失败時的原因 => 2:会员余额不足, 3:超过转帐金额限制, 4:系统错误，请联系客服, 5:转帐金额受限，请联系客服, 6:(第三方名稱)系统维护中, 7:(第三方名稱)系统忙绿中，请稍后再试, 8:帐号被锁定，请联系客服, 10:转帐作业需间隔5秒以上，请稍后在进行操作, 11:(第三方名稱)转账功能已锁定，请联系客服, 12:转账过于频繁，(第三方名稱)转账功能已锁定，请联系客服, 13:游戏进行中，请稍后在进行操作
             */
            transferCode?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/finance/user_saba_transfer_fund',
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'Username': username,
                'ip': ip,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
                'Domain': domain,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * 第三方轉回主錢包
     * @returns any 回傳第三方轉回主錢包結果
     * @throws ApiError
     */
    public postApiFinanceThirdPartyTransferBackTg({
        platform = 'Android_400',
        ticket = 35883569,
        username = 'PYDNA',
        ip = '127.0.0.1',
        vga = 'Google SwiftShader',
        deviceInfo = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36',
        uuid = '裝置UUID',
        domain = '網域',
    }: {
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * 登入id
         */
        ticket?: number,
        /**
         * 使用者名稱
         */
        username?: string,
        /**
         * 用戶IP
         */
        ip?: string,
        /**
         * 用戶顯卡資訊
         */
        vga?: string,
        /**
         * 用戶裝置資訊
         */
        deviceInfo?: string,
        /**
         * 裝置UUID
         */
        uuid?: string,
        /**
         * 網域
         */
        domain?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0:Pass, 4444:參數有誤, 1310:查無帳號, 2301:该身份限制转帐动作, 2302:您有转帐仍在处理中，请5分钟后重新再试
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            saba?: {
                /**
                 * 轉帳結果 0:Pass, 1310:查無帳號, 2301:该身份限制转帐动作, 2302:您有转帐仍在处理中，请5分钟后重新再试, 1:处理中, 2:会员余额不足, 3:超过转帐金额限制, 4:系统错误，请联系客服, 5:转帐金额受限，请联系客服, 6:(第三方名稱)系统维护中, 7:(第三方名稱)系统忙绿中，请稍后再试, 8:帐号被锁定，请联系客服, 10:转帐作业需间隔5秒以上，请稍后在进行操作, 11:(第三方名稱)转账功能已锁定，请联系客服, 12:转账过于频繁，(第三方名稱)转账功能已锁定，请联系客服, 13:游戏进行中，请稍后在进行操作
                 */
                transferCode?: string;
                /**
                 * 轉帳金額
                 */
                balance?: string;
            };
            wm_casino?: {
                /**
                 * 轉帳結果
                 */
                transferCode?: string;
                /**
                 * 轉帳結果 0:Pass, 1310:查無帳號, 2301:该身份限制转帐动作, 2302:您有转帐仍在处理中，请5分钟后重新再试, 1:处理中, 2:会员余额不足, 3:超过转帐金额限制, 4:系统错误，请联系客服, 5:转帐金额受限，请联系客服, 6:(第三方名稱)系统维护中, 7:(第三方名稱)系统忙绿中，请稍后再试, 8:帐号被锁定，请联系客服, 10:转帐作业需间隔5秒以上，请稍后在进行操作, 11:(第三方名稱)转账功能已锁定，请联系客服, 12:转账过于频繁，(第三方名稱)转账功能已锁定，请联系客服, 13:游戏进行中，请稍后在进行操作
                 */
                balance?: string;
            };
        };
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/finance/third_party_transfer_back_tg',
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'Username': username,
                'ip': ip,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
                'Domain': domain,
            },
        });
    }

    /**
     * 取得會員獎金公告
     * @returns any 取得會員獎金公告
     * @throws ApiError
     */
    public getApiNoticeRewardNotices({
        vga,
        deviceInfo,
        uuid,
        userId = 10308,
        ticket = 120298108,
        username = 'P9586',
        platform = 'Android_400',
    }: {
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * 會員ID
         */
        userId?: number,
        /**
         * login_id
         */
        ticket?: number,
        /**
         * 會員帳號
         */
        username?: string,
        /**
         * APP版本號
         */
        platform?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass，3020：非微商會員
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            rewardNotices?: Array<{
                /**
                 * 獎金公告ID
                 */
                noticeId?: number;
                /**
                 * 賽事名稱
                 */
                eventName?: string;
                /**
                 * 開賽時間
                 */
                openDate?: string;
                /**
                 * 聯盟名稱
                 */
                competition?: string;
                /**
                 * 會員ID
                 */
                userId?: number;
                /**
                 * 總獎金金額
                 */
                reward?: string;
                /**
                 * 是否已讀
                 */
                isRead?: number;
                /**
                 * 筆數
                 */
                num?: number;
            }>;
            contributionNotices?: Array<{
                /**
                 * 是否已讀
                 */
                isRead?: number;
                /**
                 * 應發貢獻度發放獎金
                 */
                contributionreward?: string;
                /**
                 * 已發貢獻度發放獎金
                 */
                assignContributionReward?: string;
                /**
                 * 貢獻度發放獎金百分比
                 */
                contributionSharePercent?: string;
                /**
                 * 貢獻度起始月份時間
                 */
                contributionStartMonth?: string;
                /**
                 * 貢獻度結束月份時間
                 */
                accTime?: string;
                /**
                 * 當月累計貢獻度總和
                 */
                contributionTotal?: string;
                /**
                 * 貢獻度獎金發放時間
                 */
                contributionRewardUpdateTime?: string;
                /**
                 * 手續費(固定5%)
                 */
                fee?: string;
            }>;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/notice/reward_notices/{userId}',
            path: {
                'userId': userId,
            },
            headers: {
                'Ticket': ticket,
                'username': username,
                'Platform': platform,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
        });
    }

    /**
     * 獎金公告全部已讀
     * @returns any 獎金公告全部已讀
     * @throws ApiError
     */
    public putApiNoticeRewardNotices({
        vga,
        deviceInfo,
        uuid,
        userId = 10308,
        ticket = 120298108,
        username = 'P9586',
        platform = 'Android_400',
    }: {
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * 會員ID
         */
        userId?: number,
        /**
         * login_id
         */
        ticket?: number,
        /**
         * 會員帳號
         */
        username?: string,
        /**
         * APP版本號
         */
        platform?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass，3001：非微商會員
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: any;
    }> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/notice/reward_notices/{userId}',
            path: {
                'userId': userId,
            },
            headers: {
                'Ticket': ticket,
                'username': username,
                'Platform': platform,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
        });
    }

    /**
     * 取得會員獎金公告明細
     * @returns any 獎金公告明細列表
     * @throws ApiError
     */
    public getApiNoticeRewardNoticesDetail({
        vga,
        deviceInfo,
        uuid,
        noticeId = 2,
        platform = 'Android_400',
        ticket = 120294940,
        username = 'pjojo',
    }: {
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * 公告ID
         */
        noticeId?: number,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * login id
         */
        ticket?: number,
        /**
         * username
         */
        username?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 筆數
             */
            num?: number;
            /**
             * 總獎金金額
             */
            allReward?: string;
            data?: Array<{
                /**
                 * 1=直推獎金2=團體獎金
                 */
                reward_type?: number;
                /**
                 * 訂單編號
                 */
                orderId?: string;
                /**
                 * 獎金金額
                 */
                reward?: string;
                /**
                 * 發放時間
                 */
                time?: string;
            }>;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/notice/reward_notices_detail/{noticeId}',
            path: {
                'noticeId': noticeId,
            },
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'Username': username,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
        });
    }

    /**
     * 更改會員是否允許廣告(下單成功後微商廣告)
     * @returns any 回傳廣告設定更新訊息
     * @throws ApiError
     */
    public getApiNoticeMemberAdvset({
        vga,
        deviceInfo,
        uuid,
        ticket = 120298108,
        username = 'P9586',
        platform = 'Web_1.0',
        // username = 'PYDNA',
        setvalue = '1',
    }: {
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * login_id
         */
        ticket?: number,
        /**
         * 會員帳號
         */
        username?: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * 會員username
         */
        username?: string,
        /**
         * 設定值(0:關閉;1:開啟)
         */
        setvalue?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass，4444：參數有誤，1601：無須更新
         */
        statusCode?: number;
        payload?: {
            /**
             * 更新通過(1)
             */
            msg?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/notice/member_advset/{username}/{setvalue}',
            path: {
                'username': username,
                'setvalue': setvalue,
            },
            headers: {
                'Ticket': ticket,
                'username': username,
                'Platform': platform,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
        });
    }

    /**
     * 更改會員是否允許廣告(type固定為2:登入後體驗金廣告)
     * @returns any 回傳廣告設定更新訊息
     * @throws ApiError
     */
    public getApiNoticeMemberAdvset1({
        vga,
        deviceInfo,
        uuid,
        ticket = 120298108,
        username = 'P9586',
        platform = 'Web_1.0',
        // username = 'PYDNA',
        setvalue = '1',
        type = '2',
    }: {
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * login_id
         */
        ticket?: number,
        /**
         * 會員帳號
         */
        username?: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * 會員username
         */
        username?: string,
        /**
         * 設定值(0:關閉;1:開啟)
         */
        setvalue?: string,
        /**
         * 1:下單後微商廣告 2:登入後體驗金廣告
         */
        type?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass，4444：參數有誤，1601：無須更新
         */
        statusCode?: number;
        payload?: {
            /**
             * 更新通過(1)
             */
            msg?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/notice/member_advset/{username}/{setvalue}/{type}',
            path: {
                'username': username,
                'setvalue': setvalue,
                'type': type,
            },
            headers: {
                'Ticket': ticket,
                'username': username,
                'Platform': platform,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
        });
    }

    /**
     * 取得全站或會員個人公告
     * @returns any 公告列表
     * @throws ApiError
     */
    public getApiNoticeList({
        username,
        ticket,
        vga,
        deviceInfo,
        uuid,
        type,
        siteClass,
        platform = 'Web_1.0',
        lang,
    }: {
        /**
         * 會員帳號
         */
        username: string,
        /**
         * login_id
         */
        ticket: number,
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * 公告分類 2全站公告 3個人公告 4登入公告
         */
        type: 2 | 3 | 4,
        /**
         * 區域版本參數
         */
        siteClass: 'CN' | 'UK',
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * 多國參數
         */
        lang?: 'en-us' | 'zh-cn' | 'zh-hk',
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass，4444：參數錯誤
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            categoryList?: Array<any>;
            'data(系統公告、個人公告)'?: Array<any>;
            'data(登入公告)'?: Array<any>;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/notice/list/{type}',
            path: {
                'type': type,
            },
            headers: {
                'Platform': platform,
                'username': username,
                'Ticket': ticket,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
                'lang': lang,
                'siteClass': siteClass,
            },
        });
    }

    /**
     * 取得會員未讀公告
     * @returns any 未讀通知
     * @throws ApiError
     */
    public apiNoticeUnread({
        vga,
        deviceInfo,
        uuid,
        ticket = 120298108,
        username = 'P9586',
        platform = 'Web_1.0',
    }: {
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * login_id
         */
        ticket?: number,
        /**
         * 會員帳號
         */
        username?: string,
        /**
         * APP版本號
         */
        platform?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass，4444：參數錯誤
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 個人公告未讀數量
             */
            noticeSum?: number;
            /**
             * 獎金公告未讀數量
             */
            rewardSum?: number;
            /**
             * 智能下單公告未讀數量
             */
            autoBetSum?: number;
            /**
             * 貢獻度獎金公告未讀數量
             */
            contributionSum?: number;
            /**
             * 全站公告資訊(noticeSum或rewardSum不為0才有)
             */
            frontsite?: Array<any>;
            /**
             * 個人公告資訊(noticeSum不為0才有)
             */
            notice?: Array<any>;
            /**
             * 未讀獎金公告金額 (小豬用)
             */
            rewardMoney?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/notice/unread',
            headers: {
                'Ticket': ticket,
                'username': username,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
                'Platform': platform,
            },
        });
    }

    /**
     * 貢獻反饋金公告全部已讀
     * @returns any 貢獻反饋金公告全部已讀
     * @throws ApiError
     */
    public putApiNoticeContributionNotices({
        vga,
        deviceInfo,
        uuid,
        userId = 10308,
        ticket = 120298108,
        username = 'P9586',
        platform = 'Android_400',
    }: {
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * 會員ID
         */
        userId?: number,
        /**
         * login_id
         */
        ticket?: number,
        /**
         * 會員帳號
         */
        username?: string,
        /**
         * APP版本號
         */
        platform?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: any;
    }> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/notice/contribution_notices/{userId}',
            path: {
                'userId': userId,
            },
            headers: {
                'Ticket': ticket,
                'username': username,
                'Platform': platform,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
        });
    }

    /**
     * 公告已讀(限個人公告使用)
     * @returns any 公告已讀(限個人公告使用)
     * @throws ApiError
     */
    public putApiNoticeDetail({
        vga,
        deviceInfo,
        uuid,
        ticket = 120298108,
        username = 'P9586',
        platform = 'Web_1.0',
        noticeId = 2,
    }: {
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * login_id
         */
        ticket?: number,
        /**
         * 會員帳號
         */
        username?: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * 公告編號
         */
        noticeId?: number,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass，4444：參數錯誤
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: any;
    }> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/notice/detail/{noticeId}',
            path: {
                'noticeId': noticeId,
            },
            headers: {
                'Ticket': ticket,
                'username': username,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
                'Platform': platform,
            },
        });
    }

    /**
     * 取得首頁橫幅資訊
     * @returns any
     * @throws ApiError
     */
    public getApiNoticeBanners({
        platform,
        lang,
        _for,
    }: {
        /**
         * APP版本號
         */
        platform: string,
        /**
         * 語系
         */
        lang?: string,
        /**
         * 格式
         */
        _for?: 'TG_BUSINESS',
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: Array<any>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/notice/banners',
            headers: {
                'Platform': platform,
                'lang': lang,
            },
            query: {
                'for': _for,
            },
        });
    }

    /**
     * 取得會員推播狀態
     * @returns any 回傳指定會員推播狀態
     * @throws ApiError
     */
    public getApiNoticeNotificationStatus({
        vga,
        deviceInfo,
        uuid,
        platform = 'Android_400',
        ticket = 35883569,
        username = 'pf123',
        uid = 264427,
    }: {
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * 登入id
         */
        ticket?: number,
        /**
         * 使用者名稱
         */
        username?: string,
        /**
         * 會員id
         */
        uid?: number,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass，1801：此user 沒有註冊推播
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 會員id
             */
            userId?: number;
            tg?: {
                /**
                 * 推播開關 0:關 1:開
                 */
                pushStatus?: number;
                /**
                 * 推播時是否帶音效 0:否 1:是
                 */
                pushSounds?: number;
            };
            autoBet?: {
                /**
                 * 智能自動下單成功 0:關 1:開
                 */
                autoBetSuccess?: number;
                /**
                 * 智能自動下單失敗 0:否 1:是
                 */
                autoBetFail?: number;
                /**
                 * 智能設置自動暫停通知 0:否 1:是
                 */
                autoBetStop?: number;
                /**
                 * 智能設置自動關閉通知 0:否 1:是
                 */
                autoBetClose?: number;
                /**
                 * 智能下單推播提示音 0:否 1:是
                 */
                autoBetPushSounds?: number;
                /**
                 * 智能下單震動提示 0:否 1:是
                 */
                autoBetPushVibrate?: number;
            };
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/notice/notification_status/{uid}',
            path: {
                'uid': uid,
            },
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'Username': username,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
        });
    }

    /**
     * 推播註冊
     * @returns any 推播註冊結果
     * @throws ApiError
     */
    public postApiNoticeNotificationRegister({
        vga,
        deviceInfo,
        uuid,
        platform = 'Android_400',
        ticket = 35883569,
        username = 'pf123',
        formData,
    }: {
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * 登入id
         */
        ticket?: number,
        /**
         * 使用者名稱
         */
        username?: string,
        formData?: {
            /**
             * 使用者ID
             */
            userId?: string;
            /**
             * 使用者裝置token
             */
            tokenId?: string;
            /**
             * 設備系統os
             */
            tokenOs?: string;
            /**
             * 推播商
             */
            tokenType?: string;
        },
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass 4444:參數錯誤
         */
        statusCode?: number;
        payload?: any;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/notice/notification_register',
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'Username': username,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * 推播開關控制
     * @returns any 推播狀態更新成功
     * @throws ApiError
     */
    public postApiNoticeNotificationSwitch({
        vga,
        deviceInfo,
        uuid,
        platform = 'Android_450',
        ticket = 35883569,
        username = 'pf123',
        userId = 281075,
        eventType = 2,
        pushStatus = 1,
    }: {
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * 登入id
         */
        ticket?: number,
        /**
         * 使用者名稱
         */
        username?: string,
        /**
         * 使用者ID
         */
        userId?: number,
        /**
         * - 1 改變推播狀態
         * - 2 改變音效狀態
         * - 3 智能自動下單成功
         * - 4 智能自動下單失敗
         * - 5 智能設置自動暫停通知
         * - 6 智能設置自動關閉通知
         * - 7 智能下單推播提示音
         * - 8 智能下單震動提示
         *
         */
        eventType?: number,
        /**
         * 開關狀態 0:關 1:開
         */
        pushStatus?: number,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 0 Pass
         * - 4444 參數錯誤
         * - 1801 使用者未註冊推播
         *
         */
        statusCode?: number;
        payload?: any;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/notice/notification_switch',
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'Username': username,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
            query: {
                'userId': userId,
                'eventType': eventType,
                'pushStatus': pushStatus,
            },
        });
    }

    /**
     * 推播登出裝置(清除token)
     * @returns any 取得新聞內容
     * @throws ApiError
     */
    public postApiNoticeNotificationLogout({
        vga,
        deviceInfo,
        uuid,
        platform = 'Android_400',
        ticket = 35883569,
        username = 'pf123',
        formData,
    }: {
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * 登入id
         */
        ticket?: number,
        /**
         * 使用者名稱
         */
        username?: string,
        formData?: {
            /**
             * 使用者ID
             */
            userId?: string;
            /**
             * 使用者裝置token
             */
            tokenId?: string;
            /**
             * 設備系統os
             */
            tokenOs?: string;
            /**
             * 推播商
             */
            tokenType?: string;
        },
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass 4444:參數錯誤
         */
        statusCode?: number;
        payload?: any;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/notice/notification_logout',
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'Username': username,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * 取得細部服務狀態
     * @returns any 回傳各服務狀態
     * @throws ApiError
     */
    public getApiNoticeApiStatus({
        platform,
        mode,
    }: {
        /**
         * APP版本號
         */
        platform: string,
        /**
         * 模式(all:全站所有 mobile:行動裝置 )
         */
        mode: 'all' | 'mobile',
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: Array<{
            /**
             * api編號
             */
            apiId?: string;
            /**
             * api英文名稱
             */
            apiNameEn?: string;
            /**
             * api中文名稱
             */
            apiNameCh?: string;
            /**
             * 啟用狀態 0：未啟用，1：啟用
             */
            status?: number;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/notice/api_status/{mode}',
            path: {
                'mode': mode,
            },
            headers: {
                'Platform': platform,
            },
        });
    }

    /**
     * 取得在線人數
     * @returns any
     * @throws ApiError
     */
    public getApiNoticeOnlineNumber({
        platform,
    }: {
        /**
         * APP版本號
         */
        platform: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 0 success
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 在線人數
             */
            number?: number;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/notice/online_number',
            headers: {
                'Platform': platform,
            },
        });
    }

    /**
     * 取得客服渠道
     * @returns any 回傳QRCode&客服資訊（保留10分鐘)
     * @throws ApiError
     */
    public getApiNoticeServiceChannel({
        platform,
    }: {
        /**
         * APP版本號
         */
        platform: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: Array<({
            /**
             * 客服類別
             * - qq
             * - wei
             *
             */
            item?: string;
            /**
             * 資料碼(帳號)
             */
            num?: string;
            /**
             * QRCODE圖片位址
             */
            img?: string;
        } | {
            /**
             * 除錯用(和後台設定同步)
             */
            type?: number;
            /**
             * 客服URL類型
             * - 0:內嵌客服
             * - 1:開啟外部連結
             *
             */
            openLink?: number;
            /**
             * 客服類別
             * - serviceOnline
             *
             */
            item?: string;
            /**
             * 客服目前的網址
             */
            serviceUrl?: string;
        })>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/notice/service_channel',
            headers: {
                'Platform': platform,
            },
        });
    }

    /**
     * 取得新聞列表
     * @returns any 回傳新聞列表
     * @throws ApiError
     */
    public getApiNoticeNewsList({
        platform,
        ticket,
        username,
        vga,
        deviceInfo,
        uuid,
    }: {
        /**
         * APP版本號
         */
        platform: string,
        /**
         * 登入ID
         */
        ticket: string,
        /**
         * 會員名稱
         */
        username: string,
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: Array<{
            /**
             * 新聞編號
             */
            id?: number;
            /**
             * 新聞標題
             */
            title?: string;
            /**
             * 新聞圖片
             */
            thumbnail?: string;
            /**
             * 新聞時間 0000-00-00 00:00:00
             */
            newsTime?: string;
            /**
             * 按讚數
             */
            likes?: number;
            /**
             * 瀏覽數
             */
            views?: number;
            /**
             * 新聞內容 擷取100個字元
             */
            shortContent?: string;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/notice/news_list',
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'username': username,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
        });
    }

    /**
     * 取得新聞內容
     * @returns any 取得新聞內容
     * @throws ApiError
     */
    public getApiNoticeNewsDetail({
        ticket,
        username,
        vga,
        deviceInfo,
        uuid,
        platform = 'Web_1.0',
        id = 0,
    }: {
        /**
         * 登入ID
         */
        ticket: string,
        /**
         * 會員名稱
         */
        username: string,
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * 新聞ID
         */
        id?: number,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass 4444:參數錯誤
         */
        statusCode?: number;
        payload?: {
            /**
             * 新聞編號
             */
            id?: number;
            /**
             * 新聞標題
             */
            title?: string;
            /**
             * 新聞圖片
             */
            titleImg?: string;
            /**
             * 新聞時間 0000-00-00 00:00:00
             */
            newsTime?: string;
            /**
             * 新聞內容 擷取100個字元
             */
            content?: string;
            /**
             * 瀏覽數
             */
            views?: number;
            /**
             * 按讚數
             */
            likes?: number;
            /**
             * 新聞留言數
             */
            MessageCount?: number;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/notice/news_detail/{id}',
            path: {
                'id': id,
            },
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'username': username,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
        });
    }

    /**
     * 新聞按讚功能
     * @returns any
     * @throws ApiError
     */
    public postApiNoticeNewsLike({
        platform,
        ticket,
        username,
        vga,
        deviceInfo,
        uuid,
        formData,
    }: {
        /**
         * APP版本號
         */
        platform: string,
        /**
         * 登入ID
         */
        ticket: string,
        /**
         * 會員名稱
         */
        username: string,
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        formData?: {
            /**
             * 使用者ID
             */
            userId?: number;
            /**
             * 新聞ID
             */
            newsId?: number;
        },
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 0 success 4444 參數錯誤 1604 新闻按赞失败，已经按过赞了
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: any;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/notice/news_like',
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'username': username,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * 傳送用戶留言到後端
     * @returns any
     * @throws ApiError
     */
    public postApiNoticeNewsWriteMessage({
        platform,
        ticket,
        username,
        vga,
        deviceInfo,
        uuid,
        formData,
    }: {
        /**
         * APP版本號
         */
        platform: string,
        /**
         * 登入ID
         */
        ticket: string,
        /**
         * 會員名稱
         */
        username: string,
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        formData?: {
            /**
             * 使用者ID
             */
            userId?: number;
            /**
             * 新聞ID
             */
            newsId?: number;
            /**
             * 留言內容
             */
            content?: string;
        },
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 0 success 4444 參數錯誤 1603 留言失敗
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: any;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/notice/news_write_message',
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'username': username,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * 取得新聞留言列表
     * @returns any 取得新聞留言列表
     * @throws ApiError
     */
    public getApiNoticeNewsMessageList({
        platform,
        ticket,
        username,
        vga,
        deviceInfo,
        uuid,
        id,
    }: {
        /**
         * APP版本號
         */
        platform: string,
        /**
         * 登入ID
         */
        ticket: string,
        /**
         * 會員名稱
         */
        username: string,
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * 新聞ID
         */
        id: number,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass 4444:參數錯誤
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: Array<{
            /**
             * 新聞編號
             */
            msgId?: number;
            /**
             * 留言使用者
             */
            poster?: string;
            /**
             * 留言內容
             */
            content?: string;
            /**
             * 留言時間 0000-00-00 00:00:00
             */
            time?: string;
            /**
             * 按讚數
             */
            like?: number;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/notice/news_message_list/{id}',
            path: {
                'id': id,
            },
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'username': username,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
        });
    }

    /**
     * 留言按讚功能
     * @returns any
     * @throws ApiError
     */
    public postApiNoticeMsgLike({
        platform,
        ticket,
        username,
        vga,
        deviceInfo,
        uuid,
        formData,
    }: {
        /**
         * APP版本號
         */
        platform: string,
        /**
         * 登入ID
         */
        ticket: string,
        /**
         * 會員名稱
         */
        username: string,
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        formData?: {
            /**
             * 使用者ID
             */
            userId?: number;
            /**
             * 留言ID
             */
            messageId?: number;
        },
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 0 success 4444 參數錯誤 1605 新闻留言按赞失败，已经按过赞了
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: any;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/notice/msg_like',
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'username': username,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * 取得平台服務狀態
     * @returns any 取得平台服務狀態
     * @throws ApiError
     */
    public getApiNoticeServiceStatus({
        vga,
        deviceInfo,
        uuid,
        serviceCode,
        ticket = 120298108,
        username = 'P9586',
        platform = 'Android_500',
    }: {
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * 平台代碼
         */
        serviceCode: 'tgbusiness' | 'auto' | 'live',
        /**
         * login_id
         */
        ticket?: number,
        /**
         * 會員帳號
         */
        username?: string,
        /**
         * APP版本號
         */
        platform?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: Array<{
            /**
             * 平台代碼
             * - tgbusiness:微商平台
             * - auto:智能平台
             * - live:直播平台
             *
             */
            serviceCode?: string;
            /**
             * 平台服務狀態
             * - 0:一般模式
             * - 1:維護模式
             *
             */
            serviceStatus?: number;
            /**
             * 維護時間
             */
            time?: string;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/notice/service_status/{serviceCode}',
            path: {
                'serviceCode': serviceCode,
            },
            headers: {
                'Ticket': ticket,
                'username': username,
                'Platform': platform,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
        });
    }

    /**
     * 取得活動類別與列表
     * @returns any 取得活動類別與列表
     * @throws ApiError
     */
    public getApiActivityActivityCategory({
        username,
        ticket,
        vga,
        deviceInfo,
        uuid,
        platform = 'Android_500',
        lang,
    }: {
        /**
         * 會員帳號
         */
        username: string,
        /**
         * login_id
         */
        ticket: number,
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * 多國參數
         */
        lang?: 'en-us' | 'zh-cn' | 'zh-hk',
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: Array<{
            /**
             * 類別ID
             */
            categoryId?: number;
            /**
             * 類別名稱
             */
            categoryName?: string;
            activity?: Array<any>;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/activity/activity_category',
            headers: {
                'Platform': platform,
                'username': username,
                'Ticket': ticket,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
                'lang': lang,
            },
        });
    }

    /**
     * 【微商】取得活動類別與列表
     * @returns any 【微商】取得活動類別與列表
     * @throws ApiError
     */
    public getApiActivityActivityCategory1({
        vga,
        deviceInfo,
        uuid,
        ticket = 120298108,
        username = 'P9586',
        platform = 'Android_400',
        viewKind = '2',
    }: {
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * login_id
         */
        ticket?: number,
        /**
         * 會員帳號
         */
        username?: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * 活動類別(1:全體會員可看 2:微商會員可看)
         */
        viewKind?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: Array<{
            /**
             * 類別ID
             */
            categoryId?: number;
            /**
             * 類別名稱
             */
            categoryName?: string;
            activity?: Array<any>;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/activity/activity_category/{viewKind}',
            path: {
                'viewKind': viewKind,
            },
            headers: {
                'Ticket': ticket,
                'username': username,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
                'Platform': platform,
            },
        });
    }

    /**
     * 取得會員活動報名狀態
     * @returns any 取得會員活動報名狀態
     * @throws ApiError
     */
    public getApiActivityUserActivity({
        username,
        ticket,
        vga,
        deviceInfo,
        uuid,
        userId,
        platform = 'Web_1.0',
        lang,
        activityId = '0',
    }: {
        /**
         * 會員帳號
         */
        username: string,
        /**
         * login_id
         */
        ticket: number,
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * 會員編號
         */
        userId: string,
        /**
         * APP版本號 (ex. Android_500)
         */
        platform?: string,
        /**
         * 多國參數
         */
        lang?: 'en-us' | 'zh-cn' | 'zh-hk',
        /**
         * 活動編號(若要撈全部活動請帶0)
         */
        activityId?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass，4444：參數有誤
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: Array<{
            /**
             * 分類id
             */
            categoryId?: number;
            /**
             * 分類名稱
             */
            categoryName?: string;
            /**
             * 活動id
             */
            activityId?: number;
            /**
             * 活動名稱
             */
            activityName?: string;
            /**
             * 剩餘可申請次數
             */
            applyNum?: number;
            /**
             * 廣告設定手機圖
             */
            mobileImg?: string;
            /**
             * 廣告設定網頁圖
             */
            webImg?: string;
            detail?: Array<any>;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/activity/user_activity/{activityId}',
            path: {
                'userId': userId,
                'activityId': activityId,
            },
            headers: {
                'Platform': platform,
                'username': username,
                'Ticket': ticket,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
                'lang': lang,
            },
        });
    }

    /**
     * 【微商】取得會員活動報名狀態
     * @returns any 【微商】取得會員活動報名狀態
     * @throws ApiError
     */
    public getApiActivityUserActivity1({
        vga,
        deviceInfo,
        uuid,
        ticket = 120298108,
        username = 'P9586',
        platform = 'Android_300',
        userId = '8070',
        activityId = '0',
        viewKind = '2',
    }: {
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * login_id
         */
        ticket?: number,
        /**
         * 會員帳號
         */
        username?: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * 會員編號
         */
        userId?: string,
        /**
         * 活動編號(若要撈全部活動請帶0)
         */
        activityId?: string,
        /**
         * 活動類別(1:全體會員可看 2:微商會員可看)
         */
        viewKind?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass，4444：參數有誤
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: Array<{
            /**
             * 分類id
             */
            categoryId?: number;
            /**
             * 分類名稱
             */
            categoryName?: string;
            /**
             * 活動id
             */
            activityId?: number;
            /**
             * 活動名稱
             */
            activityName?: string;
            /**
             * 剩餘可申請次數
             */
            applyNum?: number;
            /**
             * 廣告設定手機圖
             */
            mobileImg?: string;
            /**
             * 廣告設定網頁圖
             */
            webImg?: string;
            detail?: Array<any>;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/activity/user_activity/{activityId}/{viewKind}',
            path: {
                'userId': userId,
                'activityId': activityId,
                'viewKind': viewKind,
            },
            headers: {
                'Ticket': ticket,
                'username': username,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
                'Platform': platform,
            },
        });
    }

    /**
     * 會員申請報名活動
     * @returns any 會員申請報名活動
     * @throws ApiError
     */
    public postApiActivityUserActivity({
        username,
        ticket,
        vga,
        deviceInfo,
        uuid,
        platform = 'Android_500',
        lang,
        ip = '172.0.2.3',
        activityId = 2,
        applyReward = 20,
    }: {
        /**
         * 會員帳號
         */
        username: string,
        /**
         * login_id
         */
        ticket: number,
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * 多國參數
         */
        lang?: 'en-us' | 'zh-cn' | 'zh-hk',
        /**
         * 會員IP
         */
        ip?: string,
        /**
         * 活動編號
         */
        activityId?: number,
        /**
         * 申請金額
         */
        applyReward?: number,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 0 申请成功
         * - 1401 申請失敗
         * - 1402 不是申请时段
         * - 1403 目前无法申请
         * - 1404 会员资格不符-$msg
         * - 1405 設定异常 - $msg
         * - 1406 IP异常
         * - 1407 前一次申请尚未結束
         * - 1408 获利金额未达申请项目标准
         * - 1409 失利金额未达申请项目标准
         * - 1410 充值金额未达申请项目标准
         * - 1411 失利金额未达最低门槛
         * - 1412 首存金额未达申请项目标准
         * - 1413 注册日不符合系统规范
         * - 1414 曾经有过充值记录
         * - 1415 已申请过此活动
         * - 1416 净充值金额未达申请项目标准
         * - 1417 很抱歉，您直推的有效会员数未达申请项目条件!
         * - 1418 很抱歉，您直推的USDT累计充值未达申请项目条件!
         * - 1419 充值或提领功能关闭无法申请，请联系线上客服
         * - 1422 很抱歉，您VIP等级未达申请项目条件!
         * - 1423 很抱歉，您帐户总额未达申请项目条件!
         * - 1426 很抱歉，您的欧洲杯投资总结果未达申请项目条件!
         * - 4444 参数有误
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 活動名稱
             */
            activityName?: string;
            /**
             * 模組id(模組5為體驗金模組)
             */
            moduleId?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/activity/user_activity/{activityId}/{applyReward}',
            path: {
                'activityId': activityId,
                'applyReward': applyReward,
            },
            headers: {
                'Platform': platform,
                'username': username,
                'Ticket': ticket,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
                'lang': lang,
                'ip': ip,
            },
        });
    }

    /**
     * 取得活動資訊明細
     * @returns any 取得活動資訊明細
     * @throws ApiError
     */
    public getApiActivityActivityInformation({
        platform = 'Android_500',
        username,
        ticket,
        lang,
        activityId = '2',
    }: {
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * 會員帳號
         */
        username?: string,
        /**
         * login_id
         */
        ticket?: number,
        /**
         * 多國參數
         */
        lang?: 'en-us' | 'zh-cn' | 'zh-hk',
        /**
         * 活動編號
         */
        activityId?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass，4444：參數有誤
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: Array<{
            /**
             * 分類ID
             */
            categoryId?: number;
            /**
             * 分類名稱
             */
            categoryName?: string;
            /**
             * 活動名稱
             */
            activityName?: string;
            /**
             * 活動開始時間
             */
            allowDurationStart?: string;
            /**
             * 活動結束時間
             */
            allowDurationEnd?: string;
            /**
             * 活動狀態 2暫停前台會員申請 3關閉 (已刪除 or 前台不顯示) 4刪除 (包含後台都不顯示)開放
             */
            activityStatus?: number;
            /**
             * 網頁版活動圖
             */
            webBanner?: string;
            /**
             * 手機版活動圖
             */
            mobileBanner?: string;
            /**
             * 附件圖
             */
            linkUrl?: string;
            /**
             * 申請解鎖提領按鈕的狀態
             * - 0:不顯示
             * - 1:顯示
             * - 2:灰色按鈕
             *
             */
            pickupUnlock?: string;
            /**
             * 會員可否申請此活動 0:不可申請 1:可以申請
             */
            canApply?: number;
            /**
             * 此活動不能申請的原因
             * - 0:無異常
             * - 1:為純廣告不可申請
             * - 2:不在活動開放時間
             * - 3:活動門檻未過
             * - 4:不在可申請時間
             * - 5:參加條件不符
             * - 6:申請項目未達標
             * - 7:目前活動無法申請
             * - 8:前一次申請尚未結束
             *
             */
            applyStatus?: number;
            condition?: Array<any>;
            allowDate?: Array<any>;
            auditEntry?: Array<any>;
            pattern?: Array<any>;
            reward?: Array<any>;
            /**
             * 會員可否申請此活動 0:不可申請 1:可以申請
             */
            applyNum?: string;
            /**
             * 所需顯示之會員資料
             */
            userInformation?: Array<any>;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/activity/activity_information/{activityId}',
            path: {
                'activityId': activityId,
            },
            headers: {
                'Platform': platform,
                'username': username,
                'Ticket': ticket,
                'lang': lang,
            },
        });
    }

    /**
     * 次級活動申請
     * @returns any 次級活動申請
     * @throws ApiError
     */
    public postApiActivityApplyFunctional({
        vga,
        deviceInfo,
        uuid,
        formData,
        platform = 'Android_300',
        username = 'P9586',
        ticket = 120298108,
        ip = '172.0.2.3',
    }: {
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        formData: {
            /**
             * 活動編號
             */
            activityId: number;
        },
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * 會員帳號
         */
        username?: string,
        /**
         * login_id
         */
        ticket?: number,
        /**
         * 會員IP
         */
        ip?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 0 申请成功
         * - 1401 申請失敗
         * - 1420 最後一筆申請不是複審通過的狀態
         * - 1421 提領功能並未被關閉
         * - 4444 参数有误
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: any;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/activity/apply_functional',
            headers: {
                'Platform': platform,
                'username': username,
                'Ticket': ticket,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
                'ip': ip,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * 會員登入
     * @returns any
     * @throws ApiError
     */
    public postApiMembersLogin({
        platform,
        ip,
        deviceInfo,
        vga,
        uuid,
        formData,
        siteClass,
    }: {
        /**
         * APP版本號
         */
        platform: string,
        /**
         * IP
         */
        ip: string,
        /**
         * 裝置資訊
         */
        deviceInfo: string,
        /**
         * 顯卡名稱(渲染器)
         */
        vga: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        formData: {
            /**
             * 會員帳號
             */
            username: string;
            /**
             * 會員密碼
             */
            password: string;
            /**
             * 手機末四碼(判定為陌生裝置時需傳入)
             */
            lastFour?: string;
        },
        /**
         * 站台分類 CN:內地 UK:國際
         */
        siteClass?: 'CN' | 'UK',
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 0 登入成功
         * - 1051 密码错误
         * - 1053 帐密有特殊符号
         * - 1054 您登入次数过于频繁，请于60秒钟后再尝试
         * - 1056 查无此帐号
         * - 1199 该帐号未曾于此装置登入过
         * - 1120 手機末四碼有誤
         *
         * 黑名單
         *
         * - 1046 登入失败，请联系上层或客服
         * - 1047 登入失败，请联系上层或客服
         * - 1048 登入失败，请联系上层或客服
         * - 1049 登入失败，请联系上层或客服
         *
         * 帳號鎖定
         *
         * - 1052 此会员登入错误五次以上，锁定帐号
         * - 1060 此帐号已锁定，请洽上层管理员或客服
         * - 1061 此会员登入错误五次以上，锁定IP
         * - 1062 此帐号已锁定，请洽上层管理员或客服
         * - 1065 此会员七天未登入，锁定帐号
         * - 1067 此帐号已被风控
         * - 1068 此IP禁止登入
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 會員名稱
             */
            username?: string;
            /**
             * 會員Id
             */
            userid?: number;
            /**
             * 會員暱稱
             */
            usernickname?: string;
            /**
             * 首次登入
             * - 0 不是
             * - 1 是 (進入補註冊)
             *
             */
            firstLogin?: number;
            /**
             * 登入Id(ticket)
             */
            id?: number;
            /**
             * 固定為1
             */
            type?: string;
            /**
             * 登入token
             */
            token?: string;
            /**
             * 體驗金活動ID  (沒活動時ID = 0)
             *
             */
            activityId?: number;
            /**
             * 密码错误次數 (在狀態1051時出現)
             */
            errorcount?: number;
        };
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/members/login',
            headers: {
                'Platform': platform,
                'ip': ip,
                'deviceInfo': deviceInfo,
                'vga': vga,
                'uuid': uuid,
                'siteClass': siteClass,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * 會員登入(APP)
     * @returns any
     * @throws ApiError
     */
    public postApiMembersLoginApp({
        platform,
        ip,
        deviceInfo,
        vga,
        uuid,
        formData,
        siteClass,
    }: {
        /**
         * APP版本號
         */
        platform: string,
        /**
         * IP
         */
        ip: string,
        /**
         * 裝置資訊
         */
        deviceInfo: string,
        /**
         * 顯卡名稱(渲染器)
         */
        vga: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        formData: {
            /**
             * 會員帳號
             */
            username: string;
            /**
             * 會員密碼
             */
            password: string;
            /**
             * 手機末四碼(判定為陌生裝置時需傳入)
             */
            lastFour?: string;
        },
        /**
         * 站台分類 CN:內地 UK:國際
         */
        siteClass?: 'CN' | 'UK',
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 0 登入成功
         * - 1051 密码错误
         * - 1053 帐密有特殊符号
         * - 1054 您登入次数过于频繁，请于60秒钟后再尝试
         * - 1056 查无此帐号
         * - 1199 该帐号未曾于此装置登入过
         * - 1120 手機末四碼有誤
         * - 2000 站台停用
         *
         * 黑名單
         *
         * - 1046 登入失败，请联系上层或客服
         * - 1047 登入失败，请联系上层或客服
         * - 1048 登入失败，请联系上层或客服
         * - 1049 登入失败，请联系上层或客服
         *
         * 帳號鎖定
         *
         * - 1052 此会员登入错误五次以上，锁定帐号
         * - 1060 此帐号已锁定，请洽上层管理员或客服
         * - 1061 此会员登入错误五次以上，锁定IP
         * - 1062 此帐号已锁定，请洽上层管理员或客服
         * - 1065 此会员七天未登入，锁定帐号
         * - 1067 此帐号已被风控
         * - 1068 此IP禁止登入
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 會員名稱
             */
            username?: string;
            /**
             * 會員Id
             */
            userid?: number;
            /**
             * 會員暱稱
             */
            usernickname?: string;
            /**
             * 首次登入
             * - 0 不是
             * - 1 是 (進入補註冊)
             *
             */
            firstLogin?: number;
            /**
             * 登入Id(ticket)
             */
            id?: number;
            /**
             * 固定為1
             */
            type?: string;
            /**
             * 登入token
             */
            token?: string;
            /**
             * 體驗金活動ID  (沒活動時ID = 0)
             *
             */
            activityId?: number;
            /**
             * 所有體育平台餘額轉回TG錢包
             * - 0:未開啟免轉錢包
             * - 1:已執行
             *
             */
            allTransferToTg?: number;
            /**
             * 環境設定相關
             */
            settings?: {
                /**
                 * 驗證方式(陣列)
                 */
                authMethod?: Array<string>;
                /**
                 * 國家
                 */
                country?: string;
                /**
                 * 幣別
                 */
                currency?: string;
                /**
                 * 語系(陣列)
                 */
                languages?: Array<string>;
            };
            /**
             * 密码错误次數 (在狀態1051時出現)
             */
            errorcount?: number;
        };
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/members/login/app',
            headers: {
                'Platform': platform,
                'ip': ip,
                'deviceInfo': deviceInfo,
                'vga': vga,
                'uuid': uuid,
                'siteClass': siteClass,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * 會員登出
     * @returns any
     * @throws ApiError
     */
    public postApiMembersLogout({
        platform,
        username,
        ticket,
        vga,
        deviceInfo,
        uuid,
    }: {
        /**
         * APP版本號
         */
        platform: string,
        /**
         * 會員名稱
         */
        username: string,
        /**
         * 登入ID
         */
        ticket: number,
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 詳見代碼表 TG系統 網站狀態
         * - 詳見代碼表 帳戶登入問題
         * - 0 $username logout/$username already logout
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: any;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/members/logout',
            headers: {
                'Platform': platform,
                'username': username,
                'ticket': ticket,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
        });
    }

    /**
     * 取得安全性問題
     * @returns any 安全性問題清單
     * @throws ApiError
     */
    public getApiMembersSecurityQuestion({
        platform,
        lang,
    }: {
        /**
         * APP版本號
         */
        platform: string,
        /**
         * 多國參數
         */
        lang?: 'en-us' | 'zh-cn' | 'zh-hk',
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: Array<{
            /**
             * 問題編號
             */
            id?: number;
            /**
             * 題目
             */
            question?: string;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/members/security_question',
            headers: {
                'Platform': platform,
                'lang': lang,
            },
        });
    }

    /**
     * 取得國碼列表
     * @returns any 回傳國碼列表
     * @throws ApiError
     */
    public getApiMembersGetCountryCode({
        platform = 'Android_600',
        lang = 'zh-cn',
    }: {
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * 多語言zh-cn(簡體中文)、zh-hk(繁體中文)、en-us(英文)
         */
        lang?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: Array<{
            /**
             * 國家名稱
             */
            country?: string;
            /**
             * 國碼
             */
            code?: number;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/members/get_country_code',
            headers: {
                'Platform': platform,
                'lang': lang,
            },
        });
    }

    /**
     * 檢查手機號碼重複
     * 允許下列呼叫方式
     * - 一率檢查 /api/members/mobile_check/{mobile}
     * - p、z、n線不檢查 /api/members/mobile_check/{mobile}/{username}
     *
     * @returns any 回傳手機號碼是否重覆
     * @throws ApiError
     */
    public getApiMembersMobileCheck({
        platform,
        mobile = '86-16574486918',
        username,
    }: {
        /**
         * APP版本號
         */
        platform: string,
        /**
         * 手機號碼
         */
        mobile?: string,
        /**
         * 會員帳號(註冊時傳入L20)
         */
        username?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 0：Pass
         * - 1551：请输入手机号码
         * - 1552：请正确输入手机号码
         * - 1553：此手机号已绑定
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: any;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/members/mobile_check/{mobile}',
            path: {
                'mobile': mobile,
                'username': username,
            },
            headers: {
                'Platform': platform,
            },
        });
    }

    /**
     * 會員註冊帳號選單
     * @returns any 回傳會員註冊帳號選單
     * @throws ApiError
     */
    public getApiMembersUsernameList({
        platform,
        l20 = 'PP888',
    }: {
        /**
         * APP版本號
         */
        platform: string,
        /**
         * 代理帳號
         */
        l20?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass，4444：未傳入代理帳號，3001:代理失效
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 會員帳號選單
             */
            usernameList?: Array<string>;
            /**
             * 驗證會員帳號檢查碼
             */
            checkKey?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/members/username_list/{l20}',
            path: {
                'l20': l20,
            },
            headers: {
                'Platform': platform,
            },
        });
    }

    /**
     * 查詢代理
     * @returns any 回傳簡訊寄送結果
     * @throws ApiError
     */
    public getApiMembersAid({
        username,
        platform = 'Web_1.0',
    }: {
        /**
         * 會員帳號
         */
        username: string,
        /**
         * APP版本號
         */
        platform?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：pass，4444：參數錯誤
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 代理Id
             */
            aid?: number;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/members/aid/{username}',
            path: {
                'username': username,
            },
            headers: {
                'Platform': platform,
            },
        });
    }

    /**
     * 會員註冊
     * @returns any 會員註冊
     * @throws ApiError
     */
    public postApiMembersAdd({
        platform,
        deviceInfo,
        vga,
        uuid,
        ip,
        formData,
        siteClass,
    }: {
        /**
         * APP版本號
         */
        platform: string,
        /**
         * 裝置資訊
         */
        deviceInfo: string,
        /**
         * 顯卡名稱(渲染器)
         */
        vga: any,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * 用戶IP
         */
        ip: string,
        formData: {
            /**
             * 代理帳號
             */
            l20: string;
            /**
             * 對應[會員註冊帳號選單]回傳的checkKey
             */
            checkKey: string;
            /**
             * 代理推廣帳號(不能和code欄位同時有值)
             */
            agentCode?: string;
            /**
             * 微商推廣碼(不能和agentCode欄位同時有值)
             * 若此欄位有值 referrer欄位為必填
             *
             */
            code?: string;
            /**
             * 推廣人帳號
             */
            referrer?: string;
            /**
             * 會員帳號
             */
            username: string;
            /**
             * 登入密碼
             */
            password: string;
            /**
             * 手機號碼(含國碼)
             */
            mobile: string;
            /**
             * 註冊使用瀏覽器
             * - 1:chrome
             * - 2:safari
             * - 3:ie
             * - 4:edge
             * - 5:360
             * - 6:firefox
             * - 7:tgapp
             * - 8:其他
             * - 9:百度
             * - 10:搜狗
             * - 11:UC
             * - 12:QQ
             * - 13:猎豹
             * - 14:2345
             * - 15:傲游
             * - 16:小米
             * - 17:華為
             * - 18:vivo
             * - 19:三星
             * - 20:魅族
             * - 21:用友云
             * - 22:微信app
             * - 23:opera
             *
             */
            browser: number;
            /**
             * email
             */
            email?: string;
        },
        /**
         * 站台分類
         * - CN :內地
         * - UK :國際
         *
         */
        siteClass?: 'CN' | 'UK',
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 0：Pass
         * - 1001:请输入帐号
         * - 1002:请输入密码
         * - 1003:请确认代理商帐号
         * - 1009:注册失败，请联系上层或客服
         * - 1010:注册失败，请联系上层或客服
         * - 1014:帐号异常，请重新操作
         * - 3010:code失效
         * - 1015:请正确输入Email
         * - 1016:「ZZZXXXX」此手机号已绑定
         * - 1017:上层帐号异常，请联系客服
         * - 1018:上层帐号异常，请联系客服
         * - 1019:「ZZZXXXX」此帐号已使用
         * - 1020:新增会员失败
         * - 1022:新增等級失敗
         * - 1025:请输入推荐人帐号
         * - 1026:推荐人帐号不符
         * 手機號碼驗證相關
         * - 1551:请输入手机号码
         * - 1552:请正确输入手机号码
         * - 1553:此手机号已绑定
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 可參加的活動Id及相關圖片網址
             */
            activityData?: {
                /**
                 * 活動Id
                 */
                activityId?: number;
                /**
                 * 廣告圖片網址
                 */
                url?: string;
                /**
                 * 廣告附件圖網址
                 */
                attachUrl?: string;
            };
        };
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/members/add',
            headers: {
                'Platform': platform,
                'deviceInfo': deviceInfo,
                'vga': vga,
                'uuid': uuid,
                'ip': ip,
                'siteClass': siteClass,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * 會員資訊(簡版)
     * @returns any 回傳會員資訊
     * @throws ApiError
     */
    public apiMembersInfoUserId({
        vga,
        deviceInfo,
        uuid,
        platform = 'Web_1.0',
        ticket = 0,
        username = 'PQW728',
        userId = '718846',
    }: {
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * login_id
         */
        ticket?: number,
        /**
         * 會員帳號
         */
        username?: string,
        /**
         * 會員ID
         */
        userId?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass，4444：參數錯誤
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 會員帳號
             */
            username?: string;
            /**
             * 會員暱稱
             */
            nickname?: string;
            /**
             * 會員餘額
             */
            quota?: string;
            /**
             * 會員等級
             */
            userLevel?: string;
            /**
             * 最大設置數量上限
             */
            maxSetNum?: string;
            /**
             * 設置自動重啟時間
             */
            restartRunning?: string;
            /**
             * 設置執行時間區間選項
             */
            executionInterval?: Array<number>;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/members/info/{userId}',
            path: {
                'userId': userId,
            },
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'username': username,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
        });
    }

    /**
     * 會員詳細資訊
     * @returns any
     * @throws ApiError
     */
    public getApiMembersInfo({
        platform,
        username,
        ticket,
        vga,
        deviceInfo,
        uuid,
    }: {
        /**
         * APP版本號
         */
        platform: string,
        /**
         * 會員名稱
         */
        username: string,
        /**
         * 登入ID
         */
        ticket: number,
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 詳見代碼表 TG系統 網站狀態
         * - 詳見代碼表 帳戶登入問題
         * - 0 Pass
         * - 4444 参数有误
         * - 1091 查詢失败，请联系上层或客服
         * - 1092 等级资料异常，请联系上层或客服
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 銀行驗證
             * - 0:關
             * - 1:開 1就要檢查銀行帳號 互轉時檢查是否有提領成功紀錄
             *
             */
            enableBankVerifyCode?: number;
            /**
             * 驗證碼開關
             */
            enableVerifyCode?: number;
            /**
             * 會員帳號
             */
            username?: string;
            /**
             * 會員暱稱
             */
            usernickname?: string;
            maxrisk?: string;
            /**
             * 下單金額
             */
            betsize?: string;
            /**
             * 提領密碼 (0:無 1:有)
             */
            withdrawPassword?: number;
            /**
             * 充值鎖定
             */
            saveMoneyBlocked?: number;
            /**
             * 提領鎖定
             */
            withdrawMoneyBlocked?: number;
            email?: string;
            /**
             * 存款總額
             */
            saveTotal?: string;
            /**
             * 提領總額
             */
            withdrawTotal?: string;
            /**
             * 交易總額
             */
            dealMoneyTotal?: string;
            /**
             * 輸贏記錄
             */
            winClose?: string;
            /**
             * 帳戶餘額
             */
            quota?: string;
            /**
             * 會員等級
             */
            level?: number;
            /**
             * 可下注活動Id
             */
            canSetBet?: Array<number>;
            /**
             * 保留奬金額度(鎖定錢包) [格式####.##]
             */
            stayReward?: string;
            /**
             * 是否正在申請體驗金 0:否 1:是
             */
            trialEvent?: number;
            /**
             * 體驗金錢包額度 (格式#####.#)
             */
            trialQuota?: string;
            /**
             * 體驗金錢包狀態
             * * 0 體驗金收回或非體驗金期間(體驗金到期或未申請)
             * * 1 體驗金期間
             *
             */
            trialStatus?: number;
            /**
             * 互轉狀態 0:開啟 1:鎖定
             */
            transferBlocked?: number;
            /**
             * 免轉錢包
             * - 0 關閉
             * - 1 開啟
             * - 999 此用戶無免轉錢包
             *
             */
            transferWallet?: number;
            /**
             * 會員層級
             */
            accountLevelName?: string;
            /**
             * 是否通過手機檢核
             * - 0 否未綁定手機號碼、區碼為886、手機長度為10碼
             * - 1 是
             *
             */
            mobilePass?: number;
            /**
             * 提領最低限額
             */
            withdrawalMin?: string;
            /**
             * 每日預約下單剩餘次數
             */
            reserveRemainNum?: number;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/members/info',
            headers: {
                'Platform': platform,
                'username': username,
                'ticket': ticket,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
        });
    }

    /**
     * 取得會員資訊資料
     * @returns any
     * @throws ApiError
     */
    public getApiMembersContactInfo({
        platform,
        username,
        ticket,
        vga,
        deviceInfo,
        uuid,
    }: {
        /**
         * APP版本號
         */
        platform: string,
        /**
         * 會員名稱
         */
        username: string,
        /**
         * 登入ID
         */
        ticket: number,
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 0 Pass
         * - 1504 无此相关资讯
         * - 4444 参数错误,
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 銀行帳號
             */
            bankAccount?: string;
            /**
             * 會員暱稱
             */
            nickname?: string;
            /**
             * 隱藏密碼
             */
            passwordHidden?: string;
            /**
             * 隱藏提領密碼
             */
            withDrawPasswordHidden?: string;
            /**
             * QQ帳號
             */
            qq?: string;
            /**
             * 手機號碼2
             */
            phone2?: string;
            /**
             * 微信帳號
             */
            weChat?: string;
            /**
             * SKPYE帳號
             */
            skype?: string;
            /**
             * 電子信箱
             */
            email?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/members/contact_info',
            headers: {
                'Platform': platform,
                'username': username,
                'ticket': ticket,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
        });
    }

    /**
     * 會員資產
     * @returns any
     * @throws ApiError
     */
    public getApiMembersAssets({
        platform,
        username,
        ticket,
        vga,
        deviceInfo,
        uuid,
        type,
    }: {
        /**
         * APP版本號
         */
        platform: string,
        /**
         * 會員名稱
         */
        username: string,
        /**
         * 登入ID
         */
        ticket: number,
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * 資訊回傳格式
         * - full：完整版
         * - short：精簡版
         *
         */
        type: 'full' | 'short',
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 詳見代碼表 TG系統 網站狀態
         * - 詳見代碼表 帳戶登入問題
         * - 0 Pass
         * - 4444 参数有误
         * - 1091 查詢失败，请联系上层或客服
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 存款總額
             */
            saveTotal?: string;
            /**
             * 提領總額
             */
            withdrawTotal?: string;
            /**
             * 交易總額
             */
            dealMoneyTotal?: string;
            /**
             * 帳戶餘額
             */
            quota?: string;
            /**
             * 保留奬金額度(鎖定錢包) [格式####.##]
             */
            stayReward?: string;
            /**
             * 是否正在申請體驗金 0:否 1:是
             */
            trialEvent?: number;
            /**
             * 體驗金錢包額度 (格式#####.#)
             */
            trialQuota?: string;
            /**
             * 第三方錢包餘額
             */
            'thirdPartyWallet(short:精簡版)'?: any;
            /**
             * 第三方錢包餘額
             */
            'thirdPartyWallet(full:完整版)'?: Array<any>;
            /**
             * 體驗金錢包狀態
             * * 0 體驗金收回或非體驗金期間(體驗金到期或未申請)
             * * 1 體驗金期間
             *
             */
            trialStatus?: number;
            /**
             * 免轉錢包開關
             * * 0:關閉
             * * 1:開啟
             *
             */
            autoTransfer?: number;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/members/assets/{type}',
            path: {
                'type': type,
            },
            headers: {
                'Platform': platform,
                'username': username,
                'ticket': ticket,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
        });
    }

    /**
     * 會員功能類訊息
     * @returns any
     * @throws ApiError
     */
    public getApiMembersFunctional({
        platform,
        username,
        ticket,
        vga,
        deviceInfo,
        uuid,
        type,
    }: {
        /**
         * APP版本號
         */
        platform: string,
        /**
         * 會員名稱
         */
        username: string,
        /**
         * 登入ID
         */
        ticket: number,
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * 資訊回傳內容(會依type回傳相關欄位)
         * - top_up：充值(充值鎖定、會員層級、銀行戶名)
         * - withdraw：提領(提領鎖定、提領最低限額、銀行驗證、有無提領資料、銀行戶名)
         * - P2P：互轉(互轉狀態、是否通過手機檢核、驗證碼開關、銀行驗證、有無提領資料、銀行戶名)
         * - bet：下注(每日預約下單剩餘次數)
         *
         */
        type: 'top_up' | 'withdraw' | 'P2P' | 'bet',
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 詳見代碼表 TG系統 網站狀態
         * - 詳見代碼表 帳戶登入問題
         * - 0 Pass
         * - 4444 参数有误
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 充值鎖定
             */
            saveMoneyBlocked?: number;
            /**
             * 會員層級
             */
            accountLevelName?: string;
            /**
             * 提領鎖定
             */
            withdrawMoneyBlocked?: number;
            /**
             * 提領最低限額
             */
            withdrawalMin?: string;
            /**
             * 銀行驗證 0:關 1:開 1就要檢查銀行帳號 互轉時檢查是否有提領成功紀錄
             */
            enableBankVerifyCode?: number;
            /**
             * 是否通過手機檢核 0 否未綁定手機號碼、區碼為886、手機長度為10碼 1 是
             */
            mobilePass?: number;
            /**
             * 互轉狀態 0:開啟 1:鎖定
             */
            transferBlocked?: number;
            /**
             * 驗證碼開關
             */
            enableVerifyCode?: number;
            /**
             * 每日預約下單剩餘次數
             */
            reserveRemainNum?: number;
            /**
             * 銀行戶名
             */
            bankAccountName?: string;
            /**
             * 有無提領資料
             * - 0: 未設定過提領資料(進行設定提領資料流程)
             * - 1: 設定過提領資料
             *
             */
            hasWithdrawInfo?: number;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/members/functional/{type}',
            path: {
                'type': type,
            },
            headers: {
                'Platform': platform,
                'username': username,
                'ticket': ticket,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
        });
    }

    /**
     * 會員等級詳細
     * @returns any
     * @throws ApiError
     */
    public getApiMembersLevel({
        platform,
        vga,
        deviceInfo,
        uuid,
        ticket = 717237,
        username = 'P3325',
    }: {
        /**
         * APP版本號
         */
        platform: string,
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * 登入Id
         */
        ticket?: number,
        /**
         * 會員帳號
         */
        username?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 0 Pass
         * - 4444 参数有误
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 累計充值
             */
            chargeDiff?: string;
            /**
             * 保級差額
             */
            keepQuantDiff?: string;
            /**
             * 保級實貨量
             */
            upgradeKeepDiff?: string;
            /**
             * 經驗值百分比
             */
            totalQuantProgress?: number;
            /**
             * 下一級實貨量
             */
            upgradeNeed?: string;
            /**
             * 會員目前TG等級
             */
            lv?: number;
            /**
             * 會員等級狀態 (0:關 1:開)
             */
            status?: number;
            /**
             * 會員帳號
             */
            username?: string;
            /**
             * 保級期間累積實貨量
             */
            keepQuantity?: string;
            /**
             * 會員至今累積實貨量
             */
            totalQuantity?: string;
            /**
             * 更新時間
             */
            lastUpdate?: string;
            /**
             * 現在等級優惠
             */
            offer?: {
                /**
                 * 反點百分比
                 */
                returnPointPercent?: string;
                /**
                 * 減免手續費次數
                 */
                fee?: number;
                /**
                 * 每日提領金額上限
                 */
                withdrawLimit?: string;
                /**
                 * 智能特權-設置數量
                 */
                threads?: number;
                /**
                 * 智能特權-執行間隔(分鐘)
                 */
                matchIntervals?: number;
                /**
                 * 智能特權-設置重啟間隔(分鐘)
                 */
                restartIntervals?: number;
            };
            /**
             * 為了減少request消耗, 加入以下欄位
             * - tg_api/getUserStayQuota回傳值
             * - lumen/c2GetMatchBetInfo的正在交易筆數
             *
             */
            extra?: {
                /**
                 * 正在交易筆數
                 */
                totalBetCount?: number;
                /**
                 * 鎖定錢包金額
                 */
                stayReward?: string;
            };
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/members/level',
            headers: {
                'Platform': platform,
                'ticket': ticket,
                'username': username,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
        });
    }

    /**
     * 會員等級規則
     * @returns any
     * @throws ApiError
     */
    public getApiMembersLevelRuleSet({
        platform,
    }: {
        /**
         * APP版本號
         */
        platform: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 0 Pass
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: Array<{
            /**
             * 等級
             */
            lv?: number;
            /**
             * 實貨量門檻
             */
            totalQuantity?: string;
            /**
             * 充值門檻
             */
            levelSave?: string;
            /**
             * 保級實貨量門檻
             */
            keepQuantity?: string;
            /**
             * 保級充值門檻
             */
            keepSave?: string;
            /**
             * 反點百分比
             */
            returnPointPercent?: string;
            /**
             * 減免手續費次數
             */
            fee?: number;
            /**
             * 每日提領金額上限
             */
            withdrawLimit?: string;
            /**
             * 智能特權-設置數量
             */
            threads?: number;
            /**
             * 智能特權-執行間隔(分鐘)
             */
            matchIntervals?: number;
            /**
             * 智能特權-設置重啟間隔(分鐘)
             */
            restartIntervals?: number;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/members/level/rule_set',
            headers: {
                'Platform': platform,
            },
        });
    }

    /**
     * 取得全站下注下限
     * @returns any
     * @throws ApiError
     */
    public getApiMembersConfigBetThreshold({
        platform,
    }: {
        /**
         * APP版本號
         */
        platform: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 0 Pass
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 下注下限值
             */
            size?: number;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/members/config/bet_threshold',
            headers: {
                'Platform': platform,
            },
        });
    }

    /**
     * 取得會員收款地址資料
     * @returns any
     * @throws ApiError
     */
    public getApiMembersDigitalCurrencyAddress({
        platform,
        vga,
        deviceInfo,
        uuid,
        username = 'P9586',
        ticket = 18304421,
    }: {
        /**
         * APP版本號
         */
        platform: string,
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * 會員帳號
         */
        username?: string,
        /**
         * login_id
         */
        ticket?: number,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0 Pass
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 參照資料(幣別名稱, 鏈名稱, 提領資料)
             */
            currencies?: Array<{
                /**
                 * 幣別Id
                 */
                currency?: string;
                /**
                 * 幣別名稱
                 */
                currencyName?: string;
                /**
                 * 鏈Id
                 */
                chainType?: string;
                /**
                 * 鏈名稱
                 */
                chainName?: string;
                /**
                 * 收款地址可新增狀態
                 * - 1 可新增
                 * - 0 不可新增(已達上限)
                 * - -1 不可新增(渠道關閉)
                 *
                 */
                addable?: number;
                /**
                 * 渠道狀態
                 * - false 關閉
                 * - true 開
                 *
                 */
                isEnable?: boolean;
                /**
                 * 提領最小值
                 */
                moneyLimitMin?: string;
                /**
                 * 提領最大值
                 */
                moneyLimitMax?: string;
                /**
                 * 匯率
                 */
                exchangeRate?: string;
                /**
                 * 是否扣除手續費
                 * - 0 不扣除(免手續費)
                 * - 1 扣除
                 *
                 */
                feeSetting?: number;
            }>;
            currencyStatus?: Array<{
                /**
                 * 幣別名稱
                 */
                name?: string;
                /**
                 * 幣別狀態
                 * * 0 關 (該幣別的鏈全關)
                 * * 1 開 (至少有1個鏈為開啟狀態)
                 *
                 */
                status?: number;
            }>;
            /**
             * 已加入的收款地址清單
             */
            addresses?: Array<{
                /**
                 * 收款地址Id
                 */
                id?: number;
                /**
                 * 幣別Id
                 */
                currency?: string;
                /**
                 * 幣別名稱
                 */
                currencyName?: string;
                /**
                 * 鏈Id
                 */
                chainType?: string;
                /**
                 * 鏈名稱
                 */
                chainName?: string;
                /**
                 * 收款地址
                 */
                address?: string;
                /**
                 * 狀態
                 * - 0 關
                 * - 1 開
                 *
                 */
                status?: number;
                /**
                 * 新增日期
                 */
                createTime?: string;
                /**
                 * 更新日期
                 */
                updateTime?: string;
            }>;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/members/digital_currency_address',
            headers: {
                'Platform': platform,
                'username': username,
                'ticket': ticket,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
        });
    }

    /**
     * 新增收款地址
     * @returns any
     * @throws ApiError
     */
    public postApiMembersDigitalCurrencyAddressAdd({
        platform,
        vga,
        deviceInfo,
        uuid,
        formData,
        username = 'P9586',
        ticket = 18304421,
    }: {
        /**
         * APP版本號
         */
        platform: string,
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        formData: {
            /**
             * 鏈Id
             */
            chainType: string;
            /**
             * 收款地址
             */
            address: string;
            /**
             * 狀態
             * - 0 關
             * - 1 開
             *
             */
            status: number;
        },
        /**
         * 會員帳號
         */
        username?: string,
        /**
         * login_id
         */
        ticket?: number,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 4444 参数有误
         * - 1106 渠道关闭
         * - 1103 地址错误
         * - 1102 地址已綁定
         * - 1104 已达可设定上限
         * - 0 添加成功
         * - 1105 添加失败
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: any;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/members/digital_currency_address/add',
            headers: {
                'Platform': platform,
                'username': username,
                'ticket': ticket,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * 更改收款地址狀態
     * @returns any
     * @throws ApiError
     */
    public postApiMembersDigitalCurrencyAddressStatus({
        platform,
        vga,
        deviceInfo,
        uuid,
        formData,
        username = 'P9586',
        ticket = 18304421,
    }: {
        /**
         * APP版本號
         */
        platform: string,
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        formData: {
            /**
             * 收款地址Id
             */
            id: number;
            /**
             * 狀態
             * - 0 關
             * - 1 開
             *
             */
            status: number;
        },
        /**
         * 會員帳號
         */
        username?: string,
        /**
         * login_id
         */
        ticket?: number,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 0 修改成功
         * - 4444 参数有误
         * - 1101 无此地址记录
         * - 1111 未修改
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: any;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/members/digital_currency_address/status',
            headers: {
                'Platform': platform,
                'username': username,
                'ticket': ticket,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * 取得圖形驗證碼
     * @returns any 回傳圖形驗證碼
     * @throws ApiError
     */
    public getApiMembersGraphicVerification({
        platform,
        func,
        randomNum = 'dmkjtuyijnb',
    }: {
        /**
         * APP版本號
         */
        platform: string,
        /**
         * 此為區分用途用, 功能上目前會有差別
         * 關鍵字|用的時機
         * --- | ---
         * bet |下注用
         * setWithdrawInfo | 初始化提領相關資訊用
         * 除上述關鍵字以外, 可隨意填入任意字串, 但不得為空字串
         *
         */
        func: 'func' | 'bet' | 'setWithdrawInfo',
        /**
         * 識別碼
         */
        randomNum?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 0 Pass
         * - 4444 未傳入驗證碼
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 圖片(base64編碼內容)
             */
            image?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/members/graphic_verification/{randomNum}/{func}',
            path: {
                'randomNum': randomNum,
                'func': func,
            },
            headers: {
                'Platform': platform,
            },
        });
    }

    /**
     * 驗證圖形驗證碼
     * @returns any 驗證結果
     * @throws ApiError
     */
    public getApiMembersCkGraphicVerification({
        platform,
        number,
        func,
        randomNum = 'dmkjtuyijnb',
    }: {
        /**
         * APP版本號
         */
        platform: string,
        /**
         * 圖型驗證碼 (ex. 1357)
         */
        number: string,
        /**
         * 此為區分用途用, 功能上目前會有差別
         * 關鍵字|用的時機
         * --- | ---
         * bet |下注用
         * setWithdrawInfo | 初始化提領相關資訊用
         * 除上述關鍵字以外, 可隨意填入任意字串, 但不得為空字串
         *
         */
        func: 'func' | 'bet' | 'setWithdrawInfo',
        /**
         * 識別碼
         */
        randomNum?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 0 success
         * - 1076 图形验证码错误
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: any;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/members/ck_graphic_verification/{randomNum}/{number}/{func}',
            path: {
                'randomNum': randomNum,
                'number': number,
                'func': func,
            },
            headers: {
                'Platform': platform,
            },
        });
    }

    /**
     * 取得會員於此賽事剩餘保本額度
     * @returns any 取得會員於此賽事剩餘保本額度
     * @throws ApiError
     */
    public getApiMembersGetPawbenQuota({
        platform,
        vga,
        deviceInfo,
        uuid,
        ticket = 0,
        username = 'PQW728',
        gameId = '1726229.2',
    }: {
        /**
         * APP版本號
         */
        platform: string,
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * login_id
         */
        ticket?: number,
        /**
         * 會員帳號
         */
        username?: string,
        /**
         * 賽事ID
         */
        gameId?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 0：Pass
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 剩餘保本額度
             */
            pawbenQuota?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/members/get_pawben_quota/{gameId}',
            path: {
                'gameId': gameId,
            },
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'username': username,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
        });
    }

    /**
     * 儲存手機號碼(限 無國碼電話 新增國碼）
     * @returns any
     * @throws ApiError
     */
    public postApiMembersStoreMobile({
        platform,
        vga,
        deviceInfo,
        uuid,
        formData,
        username,
        ticket,
    }: {
        /**
         * APP版本號
         */
        platform: string,
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        formData: {
            /**
             * 會員帳號
             */
            username: string;
            /**
             * 手機國碼
             */
            countryCode: number;
            /**
             * 手機號碼
             */
            mobile: string;
            /**
             * 手機末四碼
             */
            lastFour?: number;
        },
        /**
         * 會員帳號(於會員互轉、增加USDT位置等登入後的簡訊發送功能皆需帶入)
         */
        username?: string,
        /**
         * login_id(於會員互轉、增加USDT位置等登入後的簡訊發送功能皆需帶入)
         */
        ticket?: number,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 0 success
         * - 1075 提交失败
         * - 1078 已设定国码或号码有误
         *
         * 通用
         * - 4444 参数有误
         * - 1551 请输入手机号码
         * - 1552 请正确输入手机号码
         * - 1553 此手机号已绑定
         * - 1120 手机末四码有误
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: any;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/members/store_mobile',
            headers: {
                'Platform': platform,
                'username': username,
                'ticket': ticket,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * 確認提領密碼
     * @returns any 確認提領密碼
     * @throws ApiError
     */
    public postApiMembersCheckPickupPassword({
        platform,
        username,
        ticket,
        vga,
        deviceInfo,
        uuid,
        formData,
    }: {
        /**
         * APP版本號
         */
        platform: string,
        /**
         * 會員名稱
         */
        username: string,
        /**
         * 登入ID
         */
        ticket: number,
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        formData: {
            /**
             * 提領密碼
             */
            password: string;
        },
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 0 密码正确
         * - 1056 查无此帐号
         * - 1077 密码错误
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: any;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/members/check_pickup_password',
            headers: {
                'Platform': platform,
                'username': username,
                'ticket': ticket,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * 會員資料修改
     * @returns any 资料更新成功
     * @throws ApiError
     */
    public postApiMembersSetUserInfo({
        ticket,
        username,
        vga,
        deviceInfo,
        uuid,
        platform = 'Web_1.0',
        formData,
    }: {
        /**
         * 登入id
         */
        ticket: number,
        /**
         * 使用者名稱
         */
        username: string,
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * APP版本號
         */
        platform?: string,
        formData?: {
            /**
             * 使用者帳號
             */
            username: string;
            /**
             * 舊的原始資料
             */
            oldValue: string;
            /**
             * 新的設定資料
             */
            newValue: string;
            /**
             * 要更新的類別'email','qq','wechat','phone2','skype','password','withdrawPassword'
             */
            changeType: 'email' | 'qq' | 'wechat' | 'phone2' | 'skype' | 'password' | 'withdrawPassword';
        },
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 詳見代碼表 TG系統 網站狀態
         * - 詳見代碼表 帳戶登入問題
         * - 0 Pass
         * - 4444 参数有误
         * - 1055 原始資料不一致
         * - 1057 不可与提领密码相同
         * - 1058 不可與登入密碼相同
         *
         */
        statusCode?: number;
        payload?: any;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/members/set_user_info',
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'Username': username,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * 設定會員銀行戶名
     * @returns any 設定會員銀行戶名
     * @throws ApiError
     */
    public postApiMembersSetBankAccountName({
        platform,
        username,
        ticket,
        vga,
        deviceInfo,
        uuid,
        ip,
        formData,
        siteClass,
    }: {
        /**
         * APP版本號
         */
        platform: string,
        /**
         * 會員名稱
         */
        username: string,
        /**
         * 登入ID
         */
        ticket: number,
        /**
         * 顯卡名稱(渲染器)
         */
        vga: string,
        /**
         * 裝置資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * 用戶IP
         */
        ip: string,
        formData: {
            /**
             * 銀行戶名
             */
            accountName: string;
        },
        /**
         * 站台分類
         * - CN :內地
         * - UK :國際
         *
         */
        siteClass?: 'CN' | 'UK',
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 0：Pass
         * - 1006:请输入銀行戶名
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: any;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/members/set_bank_account_name',
            headers: {
                'Platform': platform,
                'username': username,
                'ticket': ticket,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
                'ip': ip,
                'siteClass': siteClass,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * 設定會員提領資訊
     * @returns any 設定會員提領資訊
     * @throws ApiError
     */
    public postApiMembersSetWithdrawInfo({
        platform,
        username,
        ticket,
        vga,
        deviceInfo,
        uuid,
        ip,
        formData,
        siteClass,
    }: {
        /**
         * APP版本號
         */
        platform: string,
        /**
         * 會員名稱
         */
        username: string,
        /**
         * 登入ID
         */
        ticket: number,
        /**
         * 顯卡名稱(渲染器)
         */
        vga: string,
        /**
         * 裝置資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * 用戶IP
         */
        ip: string,
        formData: {
            /**
             * 提領密碼
             */
            withdrawPassword: string;
            /**
             * 會員暱稱
             */
            usernickname: string;
            /**
             * 安全性问题
             */
            pointQuestion: string;
            /**
             * 安全性答案
             */
            pointAnswer: string;
        },
        /**
         * 站台分類
         * - CN :內地
         * - UK :國際
         *
         */
        siteClass?: 'CN' | 'UK',
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 0：Pass
         * - 1004:请输入提款密码
         * - 1007:提款密码和登入密码相同
         * - 1008:昵称栏位仅允许中文与英文及数字
         * - 1011:安全性问题为空
         * - 1012:安全性答案为空
         * - 1013:安全性答案仅允许中文与英文及数字
         * - 1021:新增安全性问题失败
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: any;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/members/set_withdraw_info',
            headers: {
                'Platform': platform,
                'username': username,
                'ticket': ticket,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
                'ip': ip,
                'siteClass': siteClass,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * 檢查銀行帳戶是否存在
     * @returns any 回傳銀行帳戶是否存在
     * @throws ApiError
     */
    public getApiMembersIsBankAccountExisted({
        platform,
        username,
        ticket,
        bankAccount = '12345678',
    }: {
        /**
         * APP版本號
         */
        platform: string,
        /**
         * 會員名稱
         */
        username: string,
        /**
         * 登入ID
         */
        ticket: number,
        /**
         * 銀行帳號
         */
        bankAccount?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass，1501：銀行帳號為空值，1502：銀行帳號格式有誤，1503：銀行帳號已存在
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: any;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/members/is_bank_account_existed/{bank_account}',
            path: {
                'bank_account': bankAccount,
            },
            headers: {
                'Platform': platform,
                'username': username,
                'ticket': ticket,
            },
        });
    }

    /**
     * 取得轉入目標資訊(檢查互轉帳號)
     * @returns any
     * @throws ApiError
     */
    public getApiMembersGetTransferTarget({
        platform,
        vga,
        deviceInfo,
        uuid,
        username = 'P9586',
        ticket = 18304421,
        targetName = 'pydna',
    }: {
        /**
         * APP版本號
         */
        platform: string,
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * 會員帳號
         */
        username?: string,
        /**
         * login_id
         */
        ticket?: number,
        /**
         * 目標會員名稱
         */
        targetName?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 0 查询会员ID为#####
         * - 1121 请重新确认「转入会员帐号」
         * - 1122 请重新确认「转入会员帐号」
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 轉入目標uid
             */
            incomeUid?: number;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/members/get_transfer_target/{targetName}',
            path: {
                'targetName': targetName,
            },
            headers: {
                'Platform': platform,
                'username': username,
                'ticket': ticket,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
        });
    }

    /**
     * 新增會員銀行卡資料
     * @returns any
     * @throws ApiError
     */
    public postApiMembersSetUserBank({
        platform,
        username,
        ticket,
        vga,
        deviceInfo,
        uuid,
        formData,
        ip,
    }: {
        /**
         * APP版本號
         */
        platform: string,
        /**
         * 會員帳號
         */
        username: string,
        /**
         * login_id
         */
        ticket: number,
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        formData: {
            /**
             * 提領密碼
             */
            withdrawPassword: string;
            /**
             * 銀行ID
             */
            bankId: number;
            /**
             * 銀行賬號
             */
            bankAccount: string;
            /**
             * 銀行戶名(若之前銀行戶名未建立, 此參數為必填)
             */
            accountName?: string;
        },
        /**
         * 用戶IP
         */
        ip?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 詳見代碼表 TG系統 網站狀態
         * - 詳見代碼表 帳戶登入問題
         * - 1006 请输入银行户名
         * - 1093 提领密码为空
         * - 1094 会员银行代码为空
         * - 1095 会员银行账号为空
         * - 1097 会员账号或密码错误
         * - 1098 此会员可设定银行帐号已達上限
         * - 1099 此银行账号已被设定
         * - 1100 账户新增失败
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: any;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/members/set_user_bank',
            headers: {
                'Platform': platform,
                'username': username,
                'ticket': ticket,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
                'ip': ip,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * 查詢會員銀行資料
     * @returns void
     * @throws ApiError
     */
    public getApiMembersBankInfo({
        ticket,
        username,
        vga,
        deviceInfo,
        uuid,
        platform = 'Android_600',
    }: {
        /**
         * 登入id
         */
        ticket: number,
        /**
         * 使用者名稱
         */
        username: string,
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * APP版本號
         */
        platform?: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/members/bank_info',
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'Username': username,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
        });
    }

    /**
     * 金額設定
     * @returns any
     * @throws ApiError
     */
    public postApiMembersSetBetsize({
        platform,
        vga,
        deviceInfo,
        uuid,
        formData,
        username = 'P9586',
        ticket = 18304421,
    }: {
        /**
         * APP版本號
         */
        platform: string,
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        formData: {
            /**
             * 下注快捷(3組金額 用逗號分隔)
             */
            size: string;
        },
        /**
         * 會員帳號
         */
        username?: string,
        /**
         * login_id
         */
        ticket?: number,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 0 success
         * - 1075 资料未更动
         * - 4444 参数有误
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: any;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/members/set_betsize',
            headers: {
                'Platform': platform,
                'username': username,
                'ticket': ticket,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * 取得問題申請類別
     * @returns any 問題申請類別
     * @throws ApiError
     */
    public getApiMembersGetAssistentType({
        platform,
        lang,
    }: {
        /**
         * APP版本號
         */
        platform: string,
        /**
         * 多國參數
         */
        lang?: 'en-us' | 'zh-cn' | 'zh-hk',
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0 成功
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: Array<{
            /**
             * 類別
             */
            type?: number;
            /**
             * 說明
             */
            desc?: string;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/members/get_assistent_type',
            headers: {
                'Platform': platform,
                'lang': lang,
            },
        });
    }

    /**
     * 聯繫上層
     * @returns any
     * @throws ApiError
     */
    public postApiMembersAddAssistenceReport({
        platform,
        formData,
    }: {
        /**
         * APP版本號
         */
        platform: string,
        formData: {
            /**
             * 會員帳號
             */
            userId: number;
            /**
             * 微信帳號
             */
            account: string;
            /**
             * 問題類型
             */
            assistentType: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
            /**
             * 問題內容
             */
            content: string;
        },
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 0 【提交成功】请耐心等候上级与您联系，谢谢!
         * - 1056 查无此帐号
         * - 1066 【已达上限】您已达到每日发送次数上限
         * - 1071 【提交失败】资料有误
         * - 1072 【提交失败】请输入正确微信帐号
         * - 1073 【提交失败】请选择您的问题类别
         * - 1074 【提交失败】原因内容最少请输入10字
         * - 1075 【提交失败】
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: any;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/members/add_assistence_report',
            headers: {
                'Platform': platform,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * 上級協助每日次數判斷
     * @returns any
     * @throws ApiError
     */
    public getApiMembersCheckAssistent({
        platform,
        userId,
    }: {
        /**
         * APP版本號
         */
        platform: string,
        userId: number,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 0 未达发送次数上限
         * - 1066 【已达上限】您已达到每日发送次数上限
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 已上傳次數 (狀態為0 時出現)
             */
            count?: number;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/members/check_assistent/{user_id}',
            path: {
                'userId': userId,
            },
            headers: {
                'Platform': platform,
            },
        });
    }

    /**
     * 簡訊發送
     * @returns any 簡訊發送
     * @throws ApiError
     */
    public postApiMembersSendSms({
        formData,
        platform = 'Web_1.0',
        username,
        ticket,
    }: {
        formData: {
            /**
             * 手機號含國碼
             */
            mobile?: string;
            /**
             * 手機末四碼(於會員互轉、增加USDT位置等登入後的簡訊發送功能皆需帶入，登入發送功能也需帶入)
             */
            lastFour?: string;
            /**
             * 使用功能(目前只有登入發送需帶此參數)
             * - login：登入
             *
             */
            func?: 'login';
            /**
             * 會員帳號，只有func=login時需帶入
             */
            username?: string;
        },
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * 會員帳號(於會員互轉、增加USDT位置等登入後的簡訊發送功能皆需帶入)
         */
        username?: string,
        /**
         * login_id(於會員互轉、增加USDT位置等登入後的簡訊發送功能皆需帶入)
         */
        ticket?: number,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 0：Pass
         * - 1005：请确认手机号
         * - 1113：会员电话有误或该帐号尚未绑定国码，请联系客服人员
         * - 1119:系统简讯无法传递\n请联系上层管理员或客服
         * - 1120:手机末四码有误
         * - 1024:你已经重覆发送，于1分钟后再发送！
         *
         */
        statusCode?: number;
        /**
         * 回傳內容(正式機將不再回傳code簡訊驗證碼，開發機及測試機為方便串接測試，依舊會回傳)
         */
        payload?: {
            /**
             * 簡訊驗證碼
             */
            code?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/members/send_sms',
            headers: {
                'Platform': platform,
                'username': username,
                'ticket': ticket,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * 查核簡訊驗證碼
     * @returns any 查核簡訊驗證碼
     * @throws ApiError
     */
    public postApiMembersCheckSms({
        formData,
        platform = 'Web_1.0',
        username,
        ticket,
    }: {
        formData: {
            /**
             * 手機號含國碼
             */
            mobile?: string;
            /**
             * 會員填入的手機驗證碼
             */
            code: string;
            /**
             * 手機末四碼(於會員互轉、增加USDT位置等登入後的簡訊發送功能皆需帶入，登入發送功能也需帶入)
             */
            lastFour?: number;
            /**
             * 使用功能(目前只有登入發送需帶此參數)
             * - login：登入
             *
             */
            func?: 'login';
            /**
             * 會員帳號，只有func=login時需帶入
             */
            username?: string;
        },
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * 會員帳號(於會員互轉、增加USDT位置等登入後的簡訊驗證功能皆需帶入)
         */
        username?: string,
        /**
         * login_id(於會員互轉、增加USDT位置等登入後的簡訊驗證功能皆需帶入)
         */
        ticket?: number,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 0：验证完成
         * - 1032：验证码失效，请重新发送！
         * - 1033：验证码错误，请重新确认或发送！
         * - 1120：手机末四码有误
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: any;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/members/check_sms',
            headers: {
                'Platform': platform,
                'username': username,
                'ticket': ticket,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * 找回密碼前發送驗証碼
     * @returns any 回傳簡訊寄送結果
     * @throws ApiError
     */
    public postApiMembersForgetPasswordSms({
        ip,
        formData,
        platform = 'Web_1.0',
        username,
        ticket,
    }: {
        /**
         * 使用者ip
         */
        ip: string,
        formData: {
            /**
             * 會員帳號
             */
            username: string;
            /**
             * 手機號碼
             */
            phone?: string;
            /**
             * 手機末四碼(於忘記提領密碼時需帶入)
             */
            lastFour?: string;
        },
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * 會員帳號(於忘記提領密碼時需帶入)
         */
        username?: string,
        /**
         * login_id(於忘記提領密碼時需帶入)
         */
        ticket?: number,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 0:系统简讯已送出
         * - 4444:參數錯誤
         * - 1117:系统资讯有误\n请联系上层管理员或客服
         * - 1118:系统简讯传送延迟\n请联系上层管理员或客服
         * - 1115:会员电话号码与传入电话不匹配
         * - 1113:会员电话有误或该帐号尚未绑定国码，请联系客服人员
         * - 1119:系统简讯无法传递\n请联系上层管理员或客服
         * - 1120:手机末四码有误
         * - 1024:你已经重覆发送，于1分钟后再发送！
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 簡訊驗證碼
             */
            code?: string;
            /**
             * 30分鐘內該請求IP成功發送次數(用於DEBUG使用)
             */
            num?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/members/forget_password_sms',
            headers: {
                'Platform': platform,
                'ip': ip,
                'username': username,
                'ticket': ticket,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * 檢查驗證碼是否正確
     * @returns any
     * @throws ApiError
     */
    public postApiMembersCheckVerification({
        platform,
        formData,
        username,
        ticket,
    }: {
        /**
         * APP版本號
         */
        platform: string,
        formData: {
            /**
             * 會員帳號
             */
            username: string;
            /**
             * 用戶電話
             */
            phone: string;
            /**
             * 簡訊驗證碼
             */
            code: string;
            /**
             * 手機末四碼(於忘記提領密碼時需帶入)
             */
            lastFour?: string;
        },
        /**
         * 會員帳號(於忘記提領密碼時需帶入)
         */
        username?: string,
        /**
         * login_id(於忘記提領密碼時需帶入)
         */
        ticket?: number,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 0 验证完成
         * - 1032 验证码失效，请重新发送！
         * - 1033 验证码错误，请重新确认或发送！
         * - 1120 手机末四码有误
         * - 4444 参数有误
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 會員帳號
             */
            username?: string;
            /**
             * 用戶電話
             */
            phone?: string;
            /**
             * 更換密碼驗證碼
             */
            code?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/members/check_verification',
            headers: {
                'Platform': platform,
                'username': username,
                'ticket': ticket,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * 更換密碼(忘記密碼用)
     * @returns any
     * @throws ApiError
     */
    public postApiMembersForgetPassword({
        platform,
        formData,
    }: {
        /**
         * APP版本號
         */
        platform: string,
        formData: {
            /**
             * 會員帳號
             */
            username: string;
            /**
             * 會員密碼
             */
            password: string;
            /**
             * 驗證碼
             */
            code: string;
        },
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 0 密码修改完成
         * - 1035 修改密码验证失效，请重新操作
         * - 1036 修改密码验证错误，请重新操作！
         * - 1037 新密码长度要6码以上
         * - 1038 新密码长度是英文+数字组合，不可以有特殊符号
         * - 1039 新密码必须有英文与数字，并且要六个字元
         * - 1050 新密码必须有英文与数字，并且要六个字元
         * - 1056 查无此帐号
         * - 4444 参数有误
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: any;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/members/forget_password',
            headers: {
                'Platform': platform,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * 更換提領密碼(忘記密碼用)
     * @returns any
     * @throws ApiError
     */
    public postApiMembersForgetPickupPassword({
        platform,
        ip,
        formData,
    }: {
        /**
         * APP版本號
         */
        platform: string,
        /**
         * 用戶端IP
         */
        ip: string,
        formData: {
            /**
             * 會員帳號
             */
            username: string;
            /**
             * 會員密碼
             */
            password: string;
            /**
             * 驗證碼
             */
            code: string;
        },
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 0 提領密码修改完成!!
         * - 1007 与登入密码相同!
         * - 1035 修改密码验证失效，请重新操作
         * - 1036 修改密码验证错误，请重新操作！
         * - 1037 新密码长度要6码以上
         * - 1038 新密码长度是英文+数字组合，不可以有特殊符号
         * - 1039 新密码必须有英文与数字，并且要六个字元
         * - 1050 新密码必须有英文与数字，并且要六个字元
         * - 1056 查无此帐号
         * - 4444 参数有误
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: any;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/members/forget_pickup_password',
            headers: {
                'Platform': platform,
                'ip': ip,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * 解鎖會員登入
     * @returns any
     * @throws ApiError
     */
    public postApiMembersUnblock({
        platform,
        ip,
        formData,
    }: {
        /**
         * APP版本號
         */
        platform: string,
        /**
         * 用戶端IP
         */
        ip: string,
        formData: {
            /**
             * 會員帳號
             */
            username: string;
            /**
             * 驗證碼
             */
            code: string;
        },
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 0 成功解锁
         * - 1032 验证失效，请重新操作
         * - 1033 验证错误，请重新操作！
         * - 1034 此帐号已锁定，请联系上层管理员
         * - 1067 此帐号已被风控
         * - 4444 参数有误
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: any;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/members/unblock',
            headers: {
                'Platform': platform,
                'ip': ip,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * 鎖定會員登入(掃盤機制觸發記錄)
     * @returns any
     * @throws ApiError
     */
    public postApiMembersBlock({
        platform,
        vga,
        deviceInfo,
        uuid,
        username = 'P9586',
        ticket = 18304421,
        ip = '1.1.1.1',
    }: {
        /**
         * APP版本號
         */
        platform: string,
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * 會員帳號
         */
        username?: string,
        /**
         * login_id
         */
        ticket?: number,
        /**
         * IP
         */
        ip?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 0 [禁止登入]疑似重覆使用扫盘程式
         * - 1056 查无此帐号
         * - 1064 [危险帐号]疑似使用扫盘程式
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: any;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/members/block',
            headers: {
                'Platform': platform,
                'username': username,
                'ticket': ticket,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
                'ip': ip,
            },
        });
    }

    /**
     * 申請進入第三方平台
     * @returns any 申請進入第三方平台
     * @throws ApiError
     */
    public postApiMembersThirdpartyEntry({
        platform,
        username,
        ticket,
        deviceInfo,
        vga,
        uuid,
        code,
        formData,
        domain,
    }: {
        /**
         * APP版本號
         */
        platform: string,
        /**
         * 會員名稱
         */
        username: string,
        /**
         * 登入ID
         */
        ticket: number,
        /**
         * 裝置資訊
         */
        deviceInfo: any,
        /**
         * 顯卡名稱(渲染器)
         */
        vga: any,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * 平台名稱
         */
        code: 'saba' | 'wm_casino' | 'ob_poker' | 'ob_casino' | 'ag_casino' | 'ky_poker' | 'ly_poker' | 'jdb_gaming' | 'cq9_gaming' | 'ob_lottery' | 'sgwin_lottery' | 'bbin_casino' | 'ob_sport' | 'allbet_casino' | 'im_sport' | 'kx_poker' | 'mt_poker' | 'ai_sport' | 'bg_casino' | 'dg_casino',
        formData: {
            /**
             * 平台
             * * 1:PC
             * * 2:mobile
             *
             */
            platform: 1 | 2;
        },
        /**
         * 首頁網址-網頁版(PC/M)需於帶入首頁網址，不包含https://，例:sta8w.k33uc.com/，APP呼叫時不需傳入，系統會自行組成網址，根據m[1~5].tvip[66,77,88].net:8888 產生隨機域名，例:m3.tvip66.net:8888
         */
        domain?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 0 Pass
         * - 4444 參數有錯
         * - 7001 第三方執行異常
         * - 7002 帐号资料有误，请联系客服
         * - 7106 第三方禁止登入
         * - 8000 第三方維護中
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 登入網址
             *
             */
            url?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/members/thirdparty/{code}/entry',
            path: {
                'code': code,
            },
            headers: {
                'Platform': platform,
                'username': username,
                'ticket': ticket,
                'deviceInfo': deviceInfo,
                'vga': vga,
                'uuid': uuid,
                'domain': domain,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
            errors: {
                8000: `第三方平台維護中`,
            },
        });
    }

    /**
     * 更改免轉錢包轉開關
     * @returns any 更改免轉錢包轉開關
     * @throws ApiError
     */
    public postApiMembersThirdpartyAutoTransfer({
        platform,
        username,
        ticket,
        deviceInfo,
        vga,
        uuid,
        formData,
    }: {
        /**
         * APP版本號
         */
        platform: string,
        /**
         * 會員名稱
         */
        username: string,
        /**
         * 登入ID
         */
        ticket: number,
        /**
         * 裝置資訊
         */
        deviceInfo: any,
        /**
         * 顯卡名稱(渲染器)
         */
        vga: any,
        /**
         * 裝置UUID
         */
        uuid: string,
        formData: {
            /**
             * 免轉錢包狀態
             * - 0: 關
             * - 1: 開
             *
             */
            switch: 0 | 1;
        },
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 0 Pass
         * - 3002 裝置來源異常(header中Platform為Web_1.0且無Domain時)
         * - 4444 參數有錯
         * - 1131 找無用戶免轉錢包
         * - 1132 修改失敗
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            switch?: any;
        };
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/members/thirdparty/auto_transfer',
            headers: {
                'Platform': platform,
                'username': username,
                'ticket': ticket,
                'deviceInfo': deviceInfo,
                'vga': vga,
                'uuid': uuid,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * 所有體育平台餘額轉回TG錢包
     * @returns any 所有體育平台餘額轉回TG錢包
     * @throws ApiError
     */
    public postApiMembersThirdpartyAllTransferToTg({
        platform,
        username,
        ticket,
        deviceInfo,
        vga,
        uuid,
    }: {
        /**
         * APP版本號
         */
        platform: string,
        /**
         * 會員名稱
         */
        username: string,
        /**
         * 登入ID
         */
        ticket: number,
        /**
         * 裝置資訊
         */
        deviceInfo: any,
        /**
         * 顯卡名稱(渲染器)
         */
        vga: any,
        /**
         * 裝置UUID
         */
        uuid: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 0 Pass
         * - 1133 會員未開啟免轉錢包(若前端不需針對此API狀態做反饋，忽略即可)
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: any;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/members/thirdparty/all_transfer_to_tg',
            headers: {
                'Platform': platform,
                'username': username,
                'ticket': ticket,
                'deviceInfo': deviceInfo,
                'vga': vga,
                'uuid': uuid,
            },
        });
    }

    /**
     * 電子類熱門遊戲列表
     * @returns any 電子類熱門遊戲列表
     * @throws ApiError
     */
    public getApiMembersThirdpartyGamingTopList({
        platform,
        username,
        ticket,
        deviceInfo,
        vga,
        uuid,
        lang,
        domain,
    }: {
        /**
         * APP版本號
         */
        platform: string,
        /**
         * 會員名稱
         */
        username: string,
        /**
         * 登入ID
         */
        ticket: number,
        /**
         * 裝置資訊
         */
        deviceInfo: any,
        /**
         * 顯卡名稱(渲染器)
         */
        vga: any,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * 語系
         */
        lang: 'zh-cn' | 'zh-hk' | 'en-us',
        /**
         * 首頁網址-網頁版(PC/M)需於帶入首頁網址，不包含https://，例:sta8w.k33uc.com/，APP呼叫時不需傳入，系統會自行組成網址，根據m[1~5].tvip[66,77,88].net:8888 產生隨機域名，例:m3.tvip66.net:8888
         */
        domain?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 0 Pass
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: Array<{
            /**
             * 遊戲ID
             */
            gameId?: number;
            /**
             * 遊戲名稱
             */
            gameName?: string;
            /**
             * 登入次數
             */
            counting?: number;
            /**
             * 圖片位置
             */
            imageUrl?: string;
            /**
             * 第三方平台名稱
             */
            thirdPartyCode?: string;
            /**
             * 第三方平台狀態0:正常 1:維護
             */
            status?: string;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/members/thirdparty/gaming/top_list',
            headers: {
                'Platform': platform,
                'username': username,
                'ticket': ticket,
                'deviceInfo': deviceInfo,
                'vga': vga,
                'uuid': uuid,
                'domain': domain,
                'lang': lang,
            },
        });
    }

    /**
     * 查詢單一廠家的電子遊戲窗口
     * @returns any 查詢單一廠家的電子遊戲窗口
     * @throws ApiError
     */
    public getApiMembersThirdpartyGamingList({
        platform,
        username,
        ticket,
        deviceInfo,
        vga,
        uuid,
        lang,
        code,
        domain,
    }: {
        /**
         * APP版本號
         */
        platform: string,
        /**
         * 會員名稱
         */
        username: string,
        /**
         * 登入ID
         */
        ticket: number,
        /**
         * 裝置資訊
         */
        deviceInfo: any,
        /**
         * 顯卡名稱(渲染器)
         */
        vga: any,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * 語系
         */
        lang: 'zh-cn' | 'zh-hk' | 'en-us',
        /**
         * 平台名稱(jdb_gaming、cq9_gaming...)
         */
        code: string,
        /**
         * 首頁網址-網頁版(PC/M)需於帶入首頁網址，不包含https://，例:sta8w.k33uc.com/，APP呼叫時不需傳入，系統會自行組成網址，根據m[1~5].tvip[66,77,88].net:8888 產生隨機域名，例:m3.tvip66.net:8888
         */
        domain?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 0 Pass
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: Array<{
            /**
             * 遊戲ID
             */
            gameId?: number;
            /**
             * 遊戲名稱
             */
            gameName?: string;
            /**
             * 圖片位置
             */
            imageUrl?: string;
            /**
             * 第三方平台代碼
             */
            thirdPartyCode?: string;
            /**
             * 是否收藏 0:未收藏 1:已收藏
             */
            favorite?: string;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/members/thirdparty/gaming/list/{code}',
            path: {
                'code': code,
            },
            headers: {
                'Platform': platform,
                'username': username,
                'ticket': ticket,
                'deviceInfo': deviceInfo,
                'vga': vga,
                'uuid': uuid,
                'domain': domain,
                'lang': lang,
            },
        });
    }

    /**
     * 電子遊戲進入
     * @returns any 電子遊戲進入
     * @throws ApiError
     */
    public postApiMembersThirdpartyGamingLogin({
        platform,
        username,
        ticket,
        deviceInfo,
        vga,
        uuid,
        lang,
        formData,
        domain,
    }: {
        /**
         * APP版本號
         */
        platform: string,
        /**
         * 會員名稱
         */
        username: string,
        /**
         * 登入ID
         */
        ticket: number,
        /**
         * 裝置資訊
         */
        deviceInfo: any,
        /**
         * 顯卡名稱(渲染器)
         */
        vga: any,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * 語系
         */
        lang: 'zh-cn' | 'zh-hk' | 'en-us',
        formData: {
            /**
             * 平台
             * * 1:PC
             * * 2:mobile
             *
             */
            platform: 1 | 2;
            /**
             * 遊戲ID
             *
             */
            gameId?: number;
            /**
             * 平台名稱(jdb_gaming、cq9_gaming...)
             *
             */
            code?: string;
        },
        /**
         * 首頁網址-網頁版(PC/M)需於帶入首頁網址，不包含https://，例:sta8w.k33uc.com/，APP呼叫時不需傳入，系統會自行組成網址，根據m[1~5].tvip[66,77,88].net:8888 產生隨機域名，例:m3.tvip66.net:8888
         */
        domain?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 0 Pass
         * - 4444 參數有錯
         * - 7001 第三方執行異常
         * - 7002 帐号资料有误，请联系客服
         * - 7106 第三方禁止登入
         * - 8000 第三方維護中
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 登入網址
             */
            url?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/members/thirdparty/gaming/login',
            headers: {
                'Platform': platform,
                'username': username,
                'ticket': ticket,
                'deviceInfo': deviceInfo,
                'vga': vga,
                'uuid': uuid,
                'domain': domain,
                'lang': lang,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * 查詢會員所有廠家的已收藏遊戲窗口
     * @returns any 查詢會員所有廠家的已收藏遊戲窗口
     * @throws ApiError
     */
    public getApiMembersThirdpartyGamingCollectList({
        platform,
        username,
        ticket,
        deviceInfo,
        vga,
        uuid,
        lang,
        domain,
    }: {
        /**
         * APP版本號
         */
        platform: string,
        /**
         * 會員名稱
         */
        username: string,
        /**
         * 登入ID
         */
        ticket: number,
        /**
         * 裝置資訊
         */
        deviceInfo: any,
        /**
         * 顯卡名稱(渲染器)
         */
        vga: any,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * 語系
         */
        lang: 'zh-cn' | 'zh-hk' | 'en-us',
        /**
         * 首頁網址-網頁版(PC/M)需於帶入首頁網址，不包含https://，例:sta8w.k33uc.com/，APP呼叫時不需傳入，系統會自行組成網址，根據m[1~5].tvip[66,77,88].net:8888 產生隨機域名，例:m3.tvip66.net:8888
         */
        domain?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 0 Pass
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: Array<{
            /**
             * 第三方平台名稱
             */
            thirdPartyCode?: string;
            /**
             * 第三方平台狀態0:正常 1:維護
             */
            status?: string;
            /**
             * 回傳內容
             */
            gameList?: Array<any>;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/members/thirdparty/gaming/collect_list',
            headers: {
                'Platform': platform,
                'username': username,
                'ticket': ticket,
                'deviceInfo': deviceInfo,
                'vga': vga,
                'uuid': uuid,
                'domain': domain,
                'lang': lang,
            },
        });
    }

    /**
     * 查詢會員於該廠家的遊戲窗口使用紀錄
     * @returns any 查詢會員於該廠家的遊戲窗口使用紀錄
     * @throws ApiError
     */
    public getApiMembersThirdpartyGamingRecord({
        platform,
        username,
        ticket,
        deviceInfo,
        vga,
        uuid,
        lang,
        code,
        domain,
    }: {
        /**
         * APP版本號
         */
        platform: string,
        /**
         * 會員名稱
         */
        username: string,
        /**
         * 登入ID
         */
        ticket: number,
        /**
         * 裝置資訊
         */
        deviceInfo: any,
        /**
         * 顯卡名稱(渲染器)
         */
        vga: any,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * 語系
         */
        lang: 'zh-cn' | 'zh-hk' | 'en-us',
        /**
         * 平台名稱(jdb_gaming、cq9_gaming...)
         */
        code: string,
        /**
         * 首頁網址-網頁版(PC/M)需於帶入首頁網址，不包含https://，例:sta8w.k33uc.com/，APP呼叫時不需傳入，系統會自行組成網址，根據m[1~5].tvip[66,77,88].net:8888 產生隨機域名，例:m3.tvip66.net:8888
         */
        domain?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 0 Pass
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: Array<{
            /**
             * 遊戲ID
             */
            gameId?: number;
            /**
             * 遊戲名稱
             */
            gameName?: string;
            /**
             * 圖片位置
             */
            imageUrl?: string;
            /**
             * 最後登入時間
             */
            loginTime?: string;
            /**
             * 第三方平台狀態0:正常 1:維護
             */
            status?: string;
            /**
             * 是否收藏 0:未收藏 1:已收藏
             */
            favorite?: string;
            /**
             * 第三方平台代碼
             */
            thirdPartyCode?: string;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/members/thirdparty/gaming/record/{code}',
            path: {
                'code': code,
            },
            headers: {
                'Platform': platform,
                'username': username,
                'ticket': ticket,
                'deviceInfo': deviceInfo,
                'vga': vga,
                'uuid': uuid,
                'domain': domain,
                'lang': lang,
            },
        });
    }

    /**
     * 新增/取消收藏
     * @returns any 新增/取消收藏
     * @throws ApiError
     */
    public postApiMembersThirdpartyGamingCollect({
        platform,
        username,
        ticket,
        deviceInfo,
        vga,
        uuid,
        lang,
        formData,
        domain,
    }: {
        /**
         * APP版本號
         */
        platform: string,
        /**
         * 會員名稱
         */
        username: string,
        /**
         * 登入ID
         */
        ticket: number,
        /**
         * 裝置資訊
         */
        deviceInfo: any,
        /**
         * 顯卡名稱(渲染器)
         */
        vga: any,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * 語系
         */
        lang: 'zh-cn' | 'zh-hk' | 'en-us',
        formData: {
            /**
             * 遊戲ID
             *
             */
            gameId?: number;
            /**
             * 0:取消收藏 1:新增收藏
             *
             */
            favorite?: number;
        },
        /**
         * 首頁網址-網頁版(PC/M)需於帶入首頁網址，不包含https://，例:sta8w.k33uc.com/，APP呼叫時不需傳入，系統會自行組成網址，根據m[1~5].tvip[66,77,88].net:8888 產生隨機域名，例:m3.tvip66.net:8888
         */
        domain?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼
         * - 0 Pass
         *
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: any;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/members/thirdparty/gaming/collect',
            headers: {
                'Platform': platform,
                'username': username,
                'ticket': ticket,
                'deviceInfo': deviceInfo,
                'vga': vga,
                'uuid': uuid,
                'domain': domain,
                'lang': lang,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * 關注聯盟清單
     * @returns any 結果
     * @throws ApiError
     */
    public apiAutoFollowCompetitionTeamUserId({
        vga,
        deviceInfo,
        uuid,
        platform = 'Web_1.0',
        ticket = 0,
        username = 'PQW728',
        userId = '295018',
    }: {
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * login_id
         */
        ticket?: number,
        /**
         * 會員帳號
         */
        username?: string,
        /**
         * 會員ID
         */
        userId?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass，4444：參數有誤，
         */
        statusCode?: string;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 國家區域ID
             */
            areaCountry?: Array<{
                /**
                 * 區域ID
                 */
                areaId?: string;
                /**
                 * 國家ID
                 */
                countries?: Array<string>;
            }>;
            /**
             * 國家ID
             */
            country?: Array<string>;
            /**
             * 聯盟ID
             */
            competition?: Array<string>;
            /**
             * 隊伍ID
             */
            team?: Array<string>;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/auto/follow_competition_team/{userId}',
            path: {
                'userId': userId,
            },
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'username': username,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
        });
    }

    /**
     * 關注國家
     * @returns any 結果
     * @throws ApiError
     */
    public postFollowCountry({
        vga,
        deviceInfo,
        uuid,
        platform = 'Web_1.0',
        ticket = 0,
        username = 'PQW728',
        formData,
    }: {
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * login_id
         */
        ticket?: number,
        /**
         * 會員帳號
         */
        username?: string,
        formData?: {
            /**
             * 會員ID
             */
            userId?: string;
            /**
             * 國家ID
             */
            countryId?: string;
            /**
             * 區域ID
             */
            areaId?: string;
        },
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass，4444：參數有誤，
         */
        statusCode?: string;
        /**
         * 回傳內容
         */
        payload?: any;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/auto/follow_country',
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'username': username,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * 取消關注國家
     * @returns any 結果
     * @throws ApiError
     */
    public apiAutoUnfollowCountry({
        vga,
        deviceInfo,
        uuid,
        platform = 'Web_1.0',
        ticket = 0,
        username = 'PQW728',
        formData,
    }: {
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * login_id
         */
        ticket?: number,
        /**
         * 會員帳號
         */
        username?: string,
        formData?: {
            /**
             * 會員ID
             */
            userId?: string;
            /**
             * 國家ID
             */
            countryId?: string;
            /**
             * 區域ID
             */
            areaId?: string;
        },
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass，4444：參數有誤，
         */
        statusCode?: string;
        /**
         * 回傳內容
         */
        payload?: any;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/auto/unfollow_country',
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'username': username,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * 關注聯盟
     * @returns any 結果
     * @throws ApiError
     */
    public postFollowCompetitions({
        vga,
        deviceInfo,
        uuid,
        platform = 'Web_1.0',
        ticket = 0,
        username = 'PQW728',
        formData,
    }: {
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * login_id
         */
        ticket?: number,
        /**
         * 會員帳號
         */
        username?: string,
        formData?: {
            /**
             * 會員ID
             */
            userId?: string;
            /**
             * 聯盟ID
             */
            competitionId?: string;
        },
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass，4444：參數有誤，
         */
        statusCode?: string;
        /**
         * 回傳內容
         */
        payload?: any;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/auto/follow_competition',
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'username': username,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * 取消關注聯盟
     * @returns any 結果
     * @throws ApiError
     */
    public apiAutoUnfollowCompetition({
        vga,
        deviceInfo,
        uuid,
        platform = 'Web_1.0',
        ticket = 0,
        username = 'PQW728',
        formData,
    }: {
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * login_id
         */
        ticket?: number,
        /**
         * 會員帳號
         */
        username?: string,
        formData?: {
            /**
             * 會員ID
             */
            userId?: string;
            /**
             * 聯盟ID
             */
            competitionId?: string;
        },
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass，4444：參數有誤，
         */
        statusCode?: string;
        /**
         * 回傳內容
         */
        payload?: any;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/auto/unfollow_competition',
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'username': username,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * 關注隊伍
     * @returns any 結果
     * @throws ApiError
     */
    public postFollowTeams({
        vga,
        deviceInfo,
        uuid,
        platform = 'Web_1.0',
        ticket = 0,
        username = 'PQW728',
        formData,
    }: {
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * login_id
         */
        ticket?: number,
        /**
         * 會員帳號
         */
        username?: string,
        formData?: {
            /**
             * 會員ID
             */
            userId?: string;
            /**
             * 隊伍ID
             */
            teamId?: string;
        },
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass，4444：參數有誤，
         */
        statusCode?: string;
        /**
         * 回傳內容
         */
        payload?: any;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/auto/follow_team',
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'username': username,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * 取消關注隊伍
     * @returns any 結果
     * @throws ApiError
     */
    public apiAutoUnfollowTeam({
        vga,
        deviceInfo,
        uuid,
        platform = 'Web_1.0',
        ticket = 0,
        username = 'PQW728',
        formData,
    }: {
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * login_id
         */
        ticket?: number,
        /**
         * 會員帳號
         */
        username?: string,
        formData?: {
            /**
             * 會員ID
             */
            userId?: string;
            /**
             * 隊伍ID
             */
            teamId?: string;
        },
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass，4444：參數有誤，
         */
        statusCode?: string;
        /**
         * 回傳內容
         */
        payload?: any;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/auto/unfollow_team',
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'username': username,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * 我的設置
     * @returns any 查詢結果
     * @throws ApiError
     */
    public getUserAutoBet({
        vga,
        deviceInfo,
        uuid,
        platform = 'Web_1.0',
        ticket = 0,
        username = 'PQW728',
        userId = '295018',
    }: {
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * login_id
         */
        ticket?: number,
        /**
         * 會員帳號
         */
        username?: string,
        /**
         * 會員ID
         */
        userId?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass
         */
        statusCode?: string;
        /**
         * 回傳內容
         */
        payload?: Array<any>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/auto/user_auto_bet/{userId}',
            path: {
                'userId': userId,
            },
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'username': username,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
        });
    }

    /**
     * 我的設置-取得單一設置資料
     * @returns any 查詢結果
     * @throws ApiError
     */
    public apiAutoUserAutoBetUserIdId({
        vga,
        deviceInfo,
        uuid,
        platform = 'Web_1.0',
        ticket = 0,
        username = 'PQW728',
        userId = '295018',
        id = '1',
    }: {
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * login_id
         */
        ticket?: number,
        /**
         * 會員帳號
         */
        username?: string,
        /**
         * 會員ID
         */
        userId?: string,
        /**
         * 設置ID
         */
        id?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass
         */
        statusCode?: string;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 設置ID
             */
            id?: string;
            /**
             * 設置名稱
             */
            userBetTitle?: string;
            /**
             * 預約下注金額模式 1:固定金額 2:選擇總餘額%數 0.01 ~ 100 3:總餘額全下
             */
            betMode?: string;
            /**
             * 預約下注金額 依照 betMode 存入不同的設定值
             */
            betModeValue?: string;
            /**
             * 自動下注開始日期 格式 （YYYY-MM-DD）
             */
            dateStart?: string;
            /**
             * 自動下注結束日期 格式 （YYYY-MM-DD）
             */
            dateEnd?: string;
            /**
             * 獲利率範圍設定-開始
             */
            profitStart?: string;
            /**
             * 獲利率範圍設定-結束
             */
            profitEnd?: string;
            /**
             * 匹配優先 1 獲利 % 數 2 开賽時間近
             */
            priority?: string;
            /**
             * 每日最多下單數
             */
            dailyMax?: string;
            /**
             * 每次下單限制
             */
            eachMax?: string;
            /**
             * 是否可重複下單 0 否 1 是
             */
            duplicateBet?: string;
            /**
             * 可重複筆數
             */
            duplicateMax?: string;
            /**
             * 1：同帳號不同設置，不重複 0：同帳號不同設置可重複
             */
            sameOption?: string;
            /**
             * 總獲利金額 0.01~999999999.99
             */
            profitTargetValue?: string;
            /**
             * 每隔幾分鐘下單一次 5/10/15/20/30
             */
            betInterval?: string;
            /**
             * 自動下單時段 指定星期幾 [{"week":"1","time":[{"start":"0","end":"539"},{"start":"720","end":"1439"}]}] 星期日為 0
             */
            weekTime?: Array<any>;
            /**
             * 玩法與選項
             */
            gameOption?: Array<any>;
            /**
             * 聯盟與隊伍 聯盟隊伍不設限[] off皆為已經不存在的聯盟或是隊伍
             */
            competitionTeam?: Array<any>;
            /**
             * 授權自動執行下單 0 否 1 是
             */
            authExec?: string;
            /**
             * 設置順序 由小到大
             */
            execSort?: string;
            /**
             * 設置狀態 0 停止 1 啟動 2 暫停
             */
            betStatus?: string;
            /**
             * 暫停/停止原因 0 編輯設置 1 手動關閉(關閉) 2 餘額不足，請充值(暫停) 3 联盟队伍因更名全数关闭(暫停) 4 已達獲利目標(關閉) 5 設置到期(關閉) 6 预约额度低于最低下单金额，智能设置自动关闭(關閉) 7 限制会员登入，智能设置自动关闭(關閉) 8 会员30日未登入TG，智能设置自动关闭(關閉) 9 会员降级至VIP 0，智能设置自动关闭(關閉) 10 国际线路忙线中
             */
            stopReason?: string;
            /**
             * 設置關閉時間
             */
            closedAt?: string;
            /**
             * 執行總天數
             */
            totalDay?: string;
            /**
             * 設置建立時間
             */
            createdAt?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/auto/user_auto_bet/{userId}/{id}',
            path: {
                'userId': userId,
                'id': id,
            },
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'username': username,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
        });
    }

    /**
     * 我的設置-取得單一設置統計
     * @returns any 查詢結果
     * @throws ApiError
     */
    public apiAutoUserAutoBetSummaryUserIdId({
        vga,
        deviceInfo,
        uuid,
        platform = 'Web_1.0',
        ticket = 0,
        username = 'PQW728',
        userId = '295018',
        id = '1',
    }: {
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * login_id
         */
        ticket?: number,
        /**
         * 會員帳號
         */
        username?: string,
        /**
         * 會員ID
         */
        userId?: string,
        /**
         * 設置ID
         */
        id?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass
         */
        statusCode?: string;
        /**
         * 回傳內容
         */
        payload?: {
            all?: {
                /**
                 * 年化報酬率 %
                 */
                irr?: string;
                /**
                 * 投資報酬率 %
                 */
                roi?: string;
                /**
                 * 下單筆數
                 */
                betCount?: string;
                /**
                 * 匹配成功筆數
                 */
                matchCount?: string;
                /**
                 * 執行次數
                 */
                execCount?: string;
                /**
                 * 獲利金額
                 */
                profitAmount?: string;
                /**
                 * 獲勝
                 */
                won?: string;
                /**
                 * 敗局
                 */
                lost?: string;
            };
            yesterday?: {
                /**
                 * 年化報酬率 %
                 */
                irr?: string;
                /**
                 * 投資報酬率 %
                 */
                roi?: string;
                /**
                 * 下單筆數
                 */
                betCount?: string;
                /**
                 * 匹配成功筆數
                 */
                matchCount?: string;
                /**
                 * 執行次數
                 */
                execCount?: string;
                /**
                 * 獲利金額
                 */
                profitAmount?: string;
                /**
                 * 獲勝
                 */
                won?: string;
                /**
                 * 敗局
                 */
                lost?: string;
            };
            today?: {
                /**
                 * 年化報酬率 %
                 */
                irr?: string;
                /**
                 * 投資報酬率 %
                 */
                roi?: string;
                /**
                 * 下單筆數
                 */
                betCount?: string;
                /**
                 * 匹配成功筆數
                 */
                matchCount?: string;
                /**
                 * 執行次數
                 */
                execCount?: string;
                /**
                 * 獲利金額
                 */
                profitAmount?: string;
                /**
                 * 獲勝
                 */
                won?: string;
                /**
                 * 敗局
                 */
                lost?: string;
            };
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/auto/user_auto_bet_summary/{userId}/{id}',
            path: {
                'userId': userId,
                'id': id,
            },
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'username': username,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
        });
    }

    /**
     * 新增設置
     * @returns any 申請結果
     * @throws ApiError
     */
    public postUserAutoBet({
        vga,
        deviceInfo,
        uuid,
        platform = 'Web_1.0',
        ticket = 0,
        username = 'PQW728',
        formData,
    }: {
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * login_id
         */
        ticket?: number,
        /**
         * 會員帳號
         */
        username?: string,
        formData?: {
            /**
             * 會員ID
             */
            userId?: string;
            /**
             * 1 一般設置 2 快速設置
             */
            settingMode?: string;
            /**
             * 設置名稱
             */
            userBetTitle?: string;
            /**
             * 預約下注金額模式 1:固定金額 2:選擇總餘額%數 0.01 ~ 100 3:總餘額全下
             */
            betMode?: string;
            /**
             * 預約下注金額 依照 betMode 存入不同的設定值
             */
            betModeValue?: string;
            /**
             * 自動下注開始日期 格式 （YYYY-MM-DD）
             */
            dateStart?: string;
            /**
             * 自動下注結束日期 格式 （YYYY-MM-DD）
             */
            dateEnd?: string;
            /**
             * 獲利率範圍設定-開始
             */
            profitStart?: number;
            /**
             * 獲利率範圍設定-結束
             */
            profitEnd?: number;
            /**
             * 匹配優先 1 獲利 % 數 2 开賽時間近
             */
            priority?: string;
            /**
             * 每日最多下單數
             */
            dailyMax?: string;
            /**
             * 每次下單限制
             */
            eachMax?: string;
            /**
             * 是否可重複下單 0 否 1 是
             */
            duplicateBet?: string;
            /**
             * 可重複筆數
             */
            duplicateMax?: string;
            /**
             * 1：同帳號不同設置，不重複 0：同帳號不同設置可重複
             */
            sameOption?: string;
            /**
             * 總獲利金額 0.01~999999999.99
             */
            profitTargetValue?: string;
            /**
             * 每隔幾分鐘下單一次 5/10/15/20/30
             */
            betInterval?: string;
            /**
             * 授權自動執行下單 0 否 1 是
             */
            authExec?: string;
            /**
             * 自動下單時段 必須是 JSON 字串格式 指定星期幾 時段以分鐘數計例:禮拜一的00:00~12:00為[{"week":"1","time":[{"start":"0","end":"539"},{"start":"720","end":"1439"}]}] 星期日為 0
             */
            weekTime?: string;
            /**
             * 玩法與選項 必須是 JSON 字串格式 [{"id":"1","option":[1,4,9,16,2,3,8,15]},{"id":3,"option":[285469,285470,285471]}]
             */
            gameOption?: string;
            /**
             * 聯盟與隊伍 必須是 JSON 字串格式 聯盟隊伍不設限[] 隊伍不設限 "team":[] ，[{"id":121,"team":[10031,10045,228,10067,10095]}]
             */
            competitionTeam?: string;
        },
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass，詳細statusCode請參閱文檔
         */
        statusCode?: string;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 設置ID
             */
            id?: string;
            /**
             * 設置名稱
             */
            userBetTitle?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/auto/user_auto_bet',
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'username': username,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * 編輯設置
     * @returns any 申請結果
     * @throws ApiError
     */
    public editUserAutoBet({
        id,
        vga,
        deviceInfo,
        uuid,
        platform = 'Web_1.0',
        ticket = 0,
        username = 'PQW728',
        formData,
    }: {
        /**
         * 設置ID
         */
        id: string,
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * login_id
         */
        ticket?: number,
        /**
         * 會員帳號
         */
        username?: string,
        formData?: {
            /**
             * 會員ID
             */
            userId?: string;
            /**
             * 設置名稱
             */
            userBetTitle?: string;
            /**
             * 預約下注金額模式 1:固定金額 2:選擇總餘額%數 0.01 ~ 100 3:總餘額全下
             */
            betMode?: string;
            /**
             * 預約下注金額 依照 betMode 存入不同的設定值
             */
            betModeValue?: string;
            /**
             * 自動下注開始日期 格式 （YYYY-MM-DD）
             */
            dateStart?: string;
            /**
             * 自動下注結束日期 格式 （YYYY-MM-DD）
             */
            dateEnd?: string;
            /**
             * 獲利率範圍設定-開始
             */
            profitStart?: number;
            /**
             * 獲利率範圍設定-結束
             */
            profitEnd?: number;
            /**
             * 匹配優先 1 獲利 % 數 2 开賽時間近
             */
            priority?: string;
            /**
             * 每日最多下單數
             */
            dailyMax?: string;
            /**
             * 每次下單限制
             */
            eachMax?: string;
            /**
             * 是否可重複下單 0 否 1 是
             */
            duplicateBet?: string;
            /**
             * 可重複筆數
             */
            duplicateMax?: string;
            /**
             * 1：同帳號不同設置，不重複 0：同帳號不同設置可重複
             */
            sameOption?: string;
            /**
             * 總獲利金額 0.01~999999999.99
             */
            profitTargetValue?: string;
            /**
             * 每隔幾分鐘下單一次 5/10/15/20/30
             */
            betInterval?: string;
            /**
             * 授權自動執行下單 0 否 1 是
             */
            authExec?: string;
            /**
             * 自動下單時段 必須是 JSON 字串格式 指定星期幾 時段以分鐘數計例:禮拜一的00:00~12:00為[{"week":"1","time":[{"start":"0","end":"539"},{"start":"720","end":"1439"}]}] 星期日為 0
             */
            weekTime?: string;
            /**
             * 玩法與選項 必須是 JSON 字串格式 [{"id":"1","option":[1,4,9,16,2,3,8,15]},{"id":3,"option":[285469,285470,285471]}]
             */
            gameOption?: string;
            /**
             * 聯盟與隊伍 必須是 JSON 字串格式 聯盟隊伍全選[] 隊伍全選 "team":[]， [{"id":121,"team":[10031,10045,228,10067,10095]}]
             */
            competitionTeam?: string;
        },
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass，詳細statusCode請參閱文檔
         */
        statusCode?: string;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 設置ID
             */
            id?: string;
            /**
             * 設置名稱
             */
            userBetTitle?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/auto/user_auto_bet/{id}',
            path: {
                'id': id,
            },
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'username': username,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * 刪除設置
     * @returns any 申請結果
     * @throws ApiError
     */
    public deleteUserAutoBet({
        id,
        vga,
        deviceInfo,
        uuid,
        platform = 'Web_1.0',
        ticket = 0,
        username = 'PQW728',
        formData,
    }: {
        /**
         * 設置ID
         */
        id: string,
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * login_id
         */
        ticket?: number,
        /**
         * 會員帳號
         */
        username?: string,
        formData?: {
            /**
             * 會員ID
             */
            userId?: string;
        },
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass，4444：參數有誤，
         */
        statusCode?: string;
        /**
         * 回傳內容
         */
        payload?: any;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/auto/user_auto_bet_del/{id}',
            path: {
                'id': id,
            },
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'username': username,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * 修改智能設置名稱
     * @returns any 結果
     * @throws ApiError
     */
    public apiAutoUserBetTitleId({
        id,
        vga,
        deviceInfo,
        uuid,
        platform = 'Web_1.0',
        ticket = 0,
        username = 'PQW728',
        formData,
    }: {
        /**
         * 設置ID
         */
        id: string,
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * login_id
         */
        ticket?: number,
        /**
         * 會員帳號
         */
        username?: string,
        formData?: {
            /**
             * 會員ID
             */
            userId?: string;
            /**
             * 設置名稱
             */
            userBetTitle?: string;
        },
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass，4444：參數有誤，
         */
        statusCode?: string;
        /**
         * 回傳內容
         */
        payload?: any;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/auto/user_bet_title/{id}',
            path: {
                'id': id,
            },
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'username': username,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * 設置執行開關
     * @returns any 結果
     * @throws ApiError
     */
    public apiAutoBetStatusId({
        id,
        vga,
        deviceInfo,
        uuid,
        platform = 'Web_1.0',
        ticket = 0,
        username = 'PQW728',
        formData,
    }: {
        /**
         * 設置ID
         */
        id: string,
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * login_id
         */
        ticket?: number,
        /**
         * 會員帳號
         */
        username?: string,
        formData?: {
            /**
             * 會員ID
             */
            userId?: string;
            /**
             * 設置狀態 0 關 1 開 只有暫停中的可以開啟 不為0及1時為參數錯誤
             */
            betStatus?: string;
        },
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass，4444：參數有誤，
         */
        statusCode?: string;
        /**
         * 回傳內容
         */
        payload?: any;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/auto/bet_status/{id}',
            path: {
                'id': id,
            },
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'username': username,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * 授權自動執行開關
     * @returns any 結果
     * @throws ApiError
     */
    public apiAutoAuthExecId({
        id,
        vga,
        deviceInfo,
        uuid,
        platform = 'Web_1.0',
        ticket = 0,
        username = 'PQW728',
        formData,
    }: {
        /**
         * 設置ID
         */
        id: string,
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * login_id
         */
        ticket?: number,
        /**
         * 會員帳號
         */
        username?: string,
        formData?: {
            /**
             * 會員ID
             */
            userId?: string;
            /**
             * 授權自動執行下單 0 關 1 開
             */
            authExec?: string;
        },
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass，4444：參數有誤，
         */
        statusCode?: string;
        /**
         * 回傳內容
         */
        payload?: any;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/auto/auth_exec/{id}',
            path: {
                'id': id,
            },
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'username': username,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * 自訂設置排序
     * @returns any 結果
     * @throws ApiError
     */
    public apiAutoUserAutoBetSort({
        vga,
        deviceInfo,
        uuid,
        platform = 'Web_1.0',
        ticket = 0,
        username = 'PQW728',
        formData,
    }: {
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * login_id
         */
        ticket?: number,
        /**
         * 會員帳號
         */
        username?: string,
        formData?: {
            /**
             * 會員ID
             */
            userId?: string;
            /**
             * 設置ID按順序加,隔開 ,前後不要有空格
             */
            list?: string;
        },
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass，4444：參數有誤，
         */
        statusCode?: string;
        /**
         * 回傳內容
         */
        payload?: any;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/auto/user_auto_bet_sort',
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'username': username,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * 執行歷程
     * @returns any 查詢結果
     * @throws ApiError
     */
    public apiAutoHistoryUserId({
        vga,
        deviceInfo,
        uuid,
        platform = 'Web_1.0',
        ticket = 0,
        username = 'PQW728',
        lang = 'zh-cn',
        userId = '295018',
        timeKey = 'yesterday',
        id = '1,2,3',
        eventCategory = '1,2,3',
        perPage = '10',
        page = '1',
    }: {
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * login_id
         */
        ticket?: number,
        /**
         * 會員帳號
         */
        username?: string,
        /**
         * 語言參數 zh-cn、zh-hk、en-us
         */
        lang?: string,
        /**
         * 會員ID
         */
        userId?: string,
        /**
         * today 今天 yesterday昨天 twoDaysAgo 前天
         */
        timeKey?: string,
        /**
         * 設置ID 用逗點隔開
         */
        id?: string,
        /**
         * 事件類別 1 匹配成功 2 匹配失敗 3 自動下單成功 4 自動下單失敗 5 手動下單成功 6 其他 空值為全部
         */
        eventCategory?: string,
        /**
         * 每頁X筆 預設為10
         */
        perPage?: string,
        /**
         * 分頁參數   預設第一頁
         */
        page?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass
         */
        statusCode?: string;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 執行歷程
             */
            data?: Array<any>;
            /**
             * 目前頁面
             */
            currentPage?: string;
            /**
             * 最後一頁
             */
            lastPage?: string;
            /**
             * 時間的起始值
             */
            start?: string;
            /**
             * 時間的終止值
             */
            end?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/auto/history/{userId}',
            path: {
                'userId': userId,
            },
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'username': username,
                'lang': lang,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
            query: {
                'timeKey': timeKey,
                'id': id,
                'eventCategory': eventCategory,
                'perPage': perPage,
                'page': page,
            },
        });
    }

    /**
     * 匹配市場
     * @returns any 查詢結果
     * @throws ApiError
     */
    public apiAutoMatchingUserId({
        vga,
        deviceInfo,
        uuid,
        platform = 'Web_1.0',
        ticket = 0,
        username = 'PQW728',
        lang = 'zh-cn',
        userId = '295018',
        id = '1',
        timeKey = '',
        pairResult = '',
        page = '1',
    }: {
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * login_id
         */
        ticket?: number,
        /**
         * 會員帳號
         */
        username?: string,
        /**
         * 語言參數 zh-cn、zh-hk、en-us
         */
        lang?: string,
        /**
         * 會員ID
         */
        userId?: string,
        /**
         * 設置ID
         */
        id?: string,
        /**
         * today 今天 yesterday昨天 twoDaysAgo 前天 全部帶空值
         */
        timeKey?: string,
        /**
         * 1 匹配成功 0 匹配失敗 空值為全部
         */
        pairResult?: string,
        /**
         * 分頁參數   預設第一頁
         */
        page?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass
         */
        statusCode?: string;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 匹配記錄
             */
            data?: Array<any>;
            /**
             * 總筆數
             */
            count?: string;
            /**
             * 目前頁面
             */
            currentPage?: string;
            /**
             * 最後一頁
             */
            lastPage?: string;
            /**
             * 時間的起始值
             */
            start?: string;
            /**
             * 時間的終止值
             */
            end?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/auto/matching/{userId}',
            path: {
                'userId': userId,
            },
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'username': username,
                'lang': lang,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
            query: {
                'id': id,
                'timeKey': timeKey,
                'pairResult': pairResult,
                'page': page,
            },
        });
    }

    /**
     * 匹配市場明細
     * @returns any 查詢結果
     * @throws ApiError
     */
    public apiAutoMatchingDetailUserId({
        vga,
        deviceInfo,
        uuid,
        platform = 'Web_1.0',
        ticket = 0,
        username = 'PQW728',
        lang = 'zh-cn',
        userId = '295018',
        id = '1',
        execNumber = '1',
        pairStatus = '1',
        competition = '102',
        team = '10087',
        market = '1',
        page = '1',
    }: {
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * login_id
         */
        ticket?: number,
        /**
         * 會員帳號
         */
        username?: string,
        /**
         * 語言參數 zh-cn、zh-hk、en-us
         */
        lang?: string,
        /**
         * 會員ID
         */
        userId?: string,
        /**
         * 設置ID
         */
        id?: string,
        /**
         * 執行序號
         */
        execNumber?: string,
        /**
         * 匹配狀態類別 0 成功 1聯盟不符合 2 隊伍不符合 3玩法不符合 4選項不符合 5獲利率不符合 6:賽事不符合
         */
        pairStatus?: string,
        /**
         * 聯盟
         */
        competition?: string,
        /**
         * 隊伍
         */
        team?: string,
        /**
         * 玩法
         */
        market?: string,
        /**
         * 分頁參數   預設第一頁
         */
        page?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass
         */
        statusCode?: string;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 匹配記錄
             */
            data?: Array<any>;
            /**
             * 聯盟 filter
             */
            competition?: Array<any>;
            /**
             * 隊伍 filter
             */
            team?: Array<any>;
            /**
             * 玩法 filter
             */
            market?: Array<any>;
            /**
             * 保本 0 否 1:一般保本 2:VIP保本(串接完成後移除)
             */
            pawben?: string;
            /**
             * 保本 0 否 1:一般保本 2:VIP保本
             */
            guaranteeType?: string;
            /**
             * 目前頁面
             */
            currentPage?: string;
            /**
             * 最後一頁
             */
            lastPage?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/auto/matching_detail/{userId}',
            path: {
                'userId': userId,
            },
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'username': username,
                'lang': lang,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
            query: {
                'id': id,
                'execNumber': execNumber,
                'pairStatus': pairStatus,
                'competition': competition,
                'team': team,
                'market': market,
                'page': page,
            },
        });
    }

    /**
     * 智能下單聯盟隊伍更新時間
     * @returns any 查詢結果
     * @throws ApiError
     */
    public apiAutoCompetitionsUpdateTime({
        platform = 'Web_1.0',
    }: {
        /**
         * APP版本號
         */
        platform?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass
         */
        statusCode?: string;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * API位置
             */
            url?: string;
            /**
             * 資訊更新時間(timestamp)
             */
            updateAt?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/auto/competitions/update_time',
            headers: {
                'Platform': platform,
            },
        });
    }

    /**
     * 智能下單聯盟隊伍清單
     * @returns any 查詢結果
     * @throws ApiError
     */
    public apiAutoCompetitionsList({
        platform = 'Web_1.0',
    }: {
        /**
         * APP版本號
         */
        platform?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass
         */
        statusCode?: string;
        /**
         * 回傳內容
         */
        payload?: Array<any>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/auto/competitions/list',
            headers: {
                'Platform': platform,
            },
        });
    }

    /**
     * 智能下單下注紀錄
     * @returns any 查詢結果
     * @throws ApiError
     */
    public apiAutoUserAutoBetListUserId({
        vga,
        deviceInfo,
        uuid,
        platform = 'Web_1.0',
        ticket = 0,
        username = 'PQW728',
        lang = 'zh-cn',
        userId = '295018',
        id = '123',
        resultType = '0',
        page = '1',
        result,
        timeKey,
        date,
    }: {
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * login_id
         */
        ticket?: number,
        /**
         * 會員帳號
         */
        username?: string,
        /**
         * 語言參數 zh-cn、zh-hk、en-us
         */
        lang?: string,
        /**
         * 會員ID
         */
        userId?: string,
        /**
         * 設置ID,不帶就是全部
         */
        id?: string,
        /**
         * 0:未過帳1:已過帳預設0
         */
        resultType?: string,
        /**
         * 頁碼預設第一頁
         */
        page?: string,
        /**
         * 已過帳 1 贏 2 輸 3 其他 不帶=全部(也可帶1,2)
         */
        result?: string,
        /**
         * today今天yesterday昨天thisWeek本周lastWeek上週twoWeeksAgo兩週前thisMonth本月lastMonth上月day日期(預設為此 需搭配date參數)
         */
        timeKey?: string,
        /**
         * 日期格式(YYYY-mm-dd)
         */
        date?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass
         */
        statusCode?: string;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 下注資料
             */
            data?: Array<any>;
            /**
             * 當頁累積流水
             */
            sumTurnover?: string;
            /**
             * 當頁預估獲利
             */
            sumProfit?: string;
            /**
             * 目前頁面
             */
            currentPage?: string;
            /**
             * 最後一頁
             */
            lastPage?: string;
            /**
             * 總累積流水
             */
            totalDealMoney?: string;
            /**
             * 總累積獲利
             */
            totalProfitAmount?: string;
            /**
             * 總下單比數
             */
            totalBetCount?: string;
            /**
             * 下單紀錄起始日
             */
            start?: string;
            /**
             * 下單紀錄終止日
             */
            end?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/auto/user_auto_bet_list/{userId}',
            path: {
                'userId': userId,
            },
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'username': username,
                'lang': lang,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
            query: {
                'id': id,
                'resultType': resultType,
                'page': page,
                'result': result,
                'timeKey': timeKey,
                'date': date,
            },
        });
    }

    /**
     * 取得當前獲利率
     * @returns any 查詢結果
     * @throws ApiError
     */
    public apiAutoCurrentProfitUserId({
        vga,
        deviceInfo,
        uuid,
        platform = 'Web_1.0',
        ticket = 0,
        lang = 'zh-cn',
        username = 'PQW728',
        userId = '295018',
        id = '123',
        execNumber = '1',
    }: {
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * login_id
         */
        ticket?: number,
        /**
         * 語言參數 zh-cn、zh-hk、en-us
         */
        lang?: string,
        /**
         * 會員帳號
         */
        username?: string,
        /**
         * 會員ID
         */
        userId?: string,
        /**
         * 設置ID
         */
        id?: string,
        /**
         * 執行序號
         */
        execNumber?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass
         */
        statusCode?: string;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 匹配資訊
             */
            note?: string;
            /**
             * 比賽時間
             */
            gameTime?: string;
            /**
             * 聯盟名稱
             */
            competition?: string;
            /**
             * 主隊
             */
            home?: string;
            /**
             * 客隊
             */
            away?: string;
            /**
             * 市場玩法
             */
            market?: string;
            /**
             * 玩法選項
             */
            option?: string;
            /**
             * 匹配時的獲利率
             */
            profit?: string;
            /**
             * 匹配時的下注金額
             */
            dealMoney?: string;
            /**
             * 執行時間
             */
            createdAt?: string;
            /**
             * 授權自動執行下單狀態 0 否 1 是
             */
            authExec?: string;
            /**
             * 保本 0 否 1:一般保本 2:VIP保本
             */
            guaranteeType?: string;
            /**
             * 賽事ID
             */
            gameId?: string;
            /**
             * 玩法
             */
            marketType?: string;
            /**
             * 選項ID
             */
            selectionId?: string;
            current?: any;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/auto/current_profit/{userId}',
            path: {
                'userId': userId,
            },
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'lang': lang,
                'username': username,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
            query: {
                'id': id,
                'execNumber': execNumber,
            },
        });
    }

    /**
     * 訊息通知-智能設置
     * @returns any 查詢結果
     * @throws ApiError
     */
    public apiAutoNoticeUserBetUserId({
        vga,
        deviceInfo,
        uuid,
        platform = 'Web_1.0',
        ticket = 0,
        username = 'PQW728',
        lang = 'zh-cn',
        userId = '295018',
        autoBetType = '1',
        page = '1',
    }: {
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * login_id
         */
        ticket?: number,
        /**
         * 會員帳號
         */
        username?: string,
        /**
         * 語言參數 zh-cn、zh-hk、en-us
         */
        lang?: string,
        /**
         * 會員ID
         */
        userId?: string,
        /**
         * 智能設置通知類別 1：匹配成功 2：自動下單成功 3：自動下單失敗 4:設置自動關閉
         */
        autoBetType?: string,
        /**
         * 分頁參數 預設第一頁
         */
        page?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass
         */
        statusCode?: string;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 訊息通知
             */
            data?: Array<any>;
            /**
             * 目前頁面
             */
            currentPage?: string;
            /**
             * 最後一頁
             */
            lastPage?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/auto/notice_user_bet/{userId}',
            path: {
                'userId': userId,
            },
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'username': username,
                'lang': lang,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
            query: {
                'autoBetType': autoBetType,
                'page': page,
            },
        });
    }

    /**
     * 訊息通知-系統訊息
     * @returns any 查詢結果
     * @throws ApiError
     */
    public apiAutoNoticeSystemUserId({
        vga,
        deviceInfo,
        uuid,
        platform = 'Web_1.0',
        ticket = 0,
        username = 'PQW728',
        userId = '295018',
        systemType = '1',
        page = '1',
    }: {
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * login_id
         */
        ticket?: number,
        /**
         * 會員帳號
         */
        username?: string,
        /**
         * 會員ID
         */
        userId?: string,
        /**
         * 系統訊息通知類別 1：系統維護 2：聯盟更名 3：隊伍更名 4：比賽更名
         */
        systemType?: string,
        /**
         * 分頁參數 預設第一頁
         */
        page?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass
         */
        statusCode?: string;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 訊息通知
             */
            data?: Array<any>;
            /**
             * 目前頁面
             */
            currentPage?: string;
            /**
             * 最後一頁
             */
            lastPage?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/auto/notice_system/{userId}',
            path: {
                'userId': userId,
            },
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'username': username,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
            query: {
                'systemType': systemType,
                'page': page,
            },
        });
    }

    /**
     * 執行歷程 BY ID
     * @returns any 查詢結果
     * @throws ApiError
     */
    public apiAutoHistoryByIdUserId({
        vga,
        deviceInfo,
        uuid,
        platform = 'Web_1.0',
        ticket = 0,
        username = 'PQW728',
        lang = 'zh-cn',
        userId = '295018',
        timeKey = 'yesterday',
        id = '1,2,3',
        eventCategory = '1,2,3',
        lastExecNumber,
        perPage = '10',
    }: {
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * login_id
         */
        ticket?: number,
        /**
         * 會員帳號
         */
        username?: string,
        /**
         * 語言參數 zh-cn、zh-hk、en-us
         */
        lang?: string,
        /**
         * 會員ID
         */
        userId?: string,
        /**
         * today 今天 yesterday昨天 twoDaysAgo 前天
         */
        timeKey?: string,
        /**
         * 設置ID 用逗點隔開
         */
        id?: string,
        /**
         * 事件類別 1 匹配成功 2 匹配失敗 3 自動下單成功 4 自動下單失敗 5 手動下單成功 6 其它 空值為全部
         */
        eventCategory?: string,
        /**
         * 當前最後一筆execNumber 可不帶表示從最近一筆開始抓 當有帶值會取得小於該值的資料
         */
        lastExecNumber?: string,
        /**
         * 每頁X筆 預設為10
         */
        perPage?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass
         */
        statusCode?: string;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 執行歷程
             */
            data?: Array<any>;
            /**
             * 是否還有資料 0 無 1 有
             */
            more?: striing;
            /**
             * 時間的起始值
             */
            start?: string;
            /**
             * 時間的終止值
             */
            end?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/auto/history_by_id/{userId}',
            path: {
                'userId': userId,
            },
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'username': username,
                'lang': lang,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
            query: {
                'timeKey': timeKey,
                'id': id,
                'eventCategory': eventCategory,
                'lastExecNumber': lastExecNumber,
                'perPage': perPage,
            },
        });
    }

    /**
     * 匹配市場 BY ID
     * @returns any 查詢結果
     * @throws ApiError
     */
    public apiAutoMatchingByIdUserId({
        vga,
        deviceInfo,
        uuid,
        platform = 'Web_1.0',
        ticket = 0,
        username = 'PQW728',
        lang = 'zh-cn',
        userId = '295018',
        id = '1',
        timeKey = '',
        pairResult = '',
        lastExecNumber,
    }: {
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * login_id
         */
        ticket?: number,
        /**
         * 會員帳號
         */
        username?: string,
        /**
         * 語言參數 zh-cn、zh-hk、en-us
         */
        lang?: string,
        /**
         * 會員ID
         */
        userId?: string,
        /**
         * 設置ID
         */
        id?: string,
        /**
         * today 今天 yesterday昨天 twoDaysAgo 前天 全部為空值
         */
        timeKey?: string,
        /**
         * 1 匹配成功 0 匹配失敗 空值為全部
         */
        pairResult?: string,
        /**
         * 當前最後一筆execNumber 可不帶表示從最近一筆開始抓 當有帶值會取得小於該值的資料
         */
        lastExecNumber?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass
         */
        statusCode?: string;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 匹配記錄
             */
            data?: Array<any>;
            /**
             * 總筆數
             */
            count?: string;
            /**
             * 是否還有資料 0 無 1 有
             */
            more?: striing;
            /**
             * 時間的起始值
             */
            start?: string;
            /**
             * 時間的終止值
             */
            end?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/auto/matching_by_id/{userId}',
            path: {
                'userId': userId,
            },
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'username': username,
                'lang': lang,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
            query: {
                'id': id,
                'timeKey': timeKey,
                'pairResult': pairResult,
                'lastExecNumber': lastExecNumber,
            },
        });
    }

    /**
     * 訊息通知-智能設置 BY ID
     * @returns any 查詢結果
     * @throws ApiError
     */
    public apiAutoNoticeUserBetByIdUserId({
        vga,
        deviceInfo,
        uuid,
        platform = 'Web_1.0',
        ticket = 0,
        username = 'PQW728',
        lang = 'zh-cn',
        userId = '295018',
        autoBetType = '1',
        lastExecNumber,
    }: {
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * login_id
         */
        ticket?: number,
        /**
         * 會員帳號
         */
        username?: string,
        /**
         * 語言參數 zh-cn、zh-hk、en-us
         */
        lang?: string,
        /**
         * 會員ID
         */
        userId?: string,
        /**
         * 智能設置通知類別 1：匹配成功 2：自動下單成功 3：自動下單失敗 4:設置自動關閉
         */
        autoBetType?: string,
        /**
         * 當前最後一筆execNumber 可不帶表示從最近一筆開始抓 當有帶值會取得小於該值的資料
         */
        lastExecNumber?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass
         */
        statusCode?: string;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 訊息通知
             */
            data?: Array<any>;
            /**
             * 是否還有資料 0 無 1 有
             */
            more?: striing;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/auto/notice_user_bet_by_id/{userId}',
            path: {
                'userId': userId,
            },
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'username': username,
                'lang': lang,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
            query: {
                'autoBetType': autoBetType,
                'lastExecNumber': lastExecNumber,
            },
        });
    }

    /**
     * 訊息通知-系統訊息 BY ID
     * @returns any 查詢結果
     * @throws ApiError
     */
    public apiAutoNoticeSystemByIdUserId({
        vga,
        deviceInfo,
        uuid,
        platform = 'Web_1.0',
        ticket = 0,
        username = 'PQW728',
        userId = '295018',
        systemType = '1',
        lastExecNumber,
    }: {
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * login_id
         */
        ticket?: number,
        /**
         * 會員帳號
         */
        username?: string,
        /**
         * 會員ID
         */
        userId?: string,
        /**
         * 系統訊息通知類別 1：系統維護 2：聯盟更名 3：隊伍更名 4：比賽更名
         */
        systemType?: string,
        /**
         * 當前最後一筆execNumber 可不帶表示從最近一筆開始抓 當有帶值會取得小於該值的資料
         */
        lastExecNumber?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass
         */
        statusCode?: string;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 訊息通知
             */
            data?: Array<any>;
            /**
             * 是否還有資料 0 無 1 有
             */
            more?: striing;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/auto/notice_system_by_id/{userId}',
            path: {
                'userId': userId,
            },
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'username': username,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
            query: {
                'systemType': systemType,
                'lastExecNumber': lastExecNumber,
            },
        });
    }

    /**
     * 訊息已讀
     * @returns any 結果
     * @throws ApiError
     */
    public apiAutoReadUserId({
        vga,
        deviceInfo,
        uuid,
        platform = 'Web_1.0',
        ticket = 0,
        username = 'PQW728',
        userId = '295018',
        formData,
    }: {
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * login_id
         */
        ticket?: number,
        /**
         * 會員帳號
         */
        username?: string,
        /**
         * 會員ID
         */
        userId?: string,
        formData?: {
            /**
             * 要改為已讀的訊息執行序號
             */
            execNumber: string;
        },
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass，4444：參數有誤，
         */
        statusCode?: string;
        /**
         * 回傳內容
         */
        payload?: any;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/auto/read/{userId}',
            path: {
                'userId': userId,
            },
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'username': username,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * 下注紀錄(已過帳)
     * @returns any 查詢結果
     * @throws ApiError
     */
    public apiAutoHistoricalAccountingUserId({
        vga,
        deviceInfo,
        uuid,
        platform = 'Web_1.0',
        ticket = 0,
        username = 'PQW728',
        userId = '295018',
        type = 'thisWeek',
        id,
    }: {
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * login_id
         */
        ticket?: number,
        /**
         * 會員帳號
         */
        username?: string,
        /**
         * 會員ID
         */
        userId?: string,
        /**
         * 下注紀錄區間類別 thisWeek：本週 lastWeek：上週 twoWeeksAgo：前兩周 thisYear：近一年
         */
        type?: string,
        /**
         * 設置ID
         */
        id?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass
         */
        statusCode?: string;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 累積流水合計
             */
            totalTurnover?: string;
            /**
             * 總收益合計
             */
            totalProfitAmount?: string;
            /**
             * 下注紀錄列表
             */
            data?: Array<any>;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/auto/historical_accounting/{userId}',
            path: {
                'userId': userId,
            },
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'username': username,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
            query: {
                'type': type,
                'id': id,
            },
        });
    }

    /**
     * 下單明細
     * @returns any 查詢結果
     * @throws ApiError
     */
    public apiAutoTotalBetDetailsUserId({
        type,
        id,
        vga,
        deviceInfo,
        uuid,
        platform = 'Web_1.0',
        ticket = 0,
        username = 'PQW728',
        userId = '295018',
    }: {
        /**
         * 1:總計 2：今日 3:昨日
         */
        type: string,
        /**
         * 設置ID
         */
        id: string,
        /**
         * 顯卡型號
         */
        vga: string,
        /**
         * 系統資訊
         */
        deviceInfo: string,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * login_id
         */
        ticket?: number,
        /**
         * 會員帳號
         */
        username?: string,
        /**
         * 會員ID
         */
        userId?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass
         */
        statusCode?: string;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 未過帳注單量
             */
            pending?: string;
            /**
             * 其他注單量
             */
            others?: string;
            /**
             * 各月份統計
             */
            done?: {
                won?: any;
                lost?: any;
            };
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/auto/total_bet_details/{userId}',
            path: {
                'userId': userId,
            },
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'username': username,
                'vga': vga,
                'deviceInfo': deviceInfo,
                'uuid': uuid,
            },
            query: {
                'type': type,
                'id': id,
            },
        });
    }

    /**
     * 設定AES密鑰API
     * @returns any 查詢結果
     * @throws ApiError
     */
    public apiOthersSetEncryption({
        platform = 'Android_400',
        ticket = 0,
        username = 'PQW728',
        formData,
    }: {
        /**
         * APP版本號
         */
        platform?: string,
        /**
         * login_id
         */
        ticket?: number,
        /**
         * 會員帳號
         */
        username?: string,
        formData?: {
            /**
             * 會員ID
             */
            userId?: string;
            /**
             * iv (base64 encode) 長度16
             */
            iv?: string;
            /**
             * key (base64 encode) 長度32
             */
            key?: string;
        },
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0：Pass
         */
        statusCode?: string;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * aesKey
             */
            aesKey?: string;
            /**
             * aesIv
             */
            aesIv?: string;
            /**
             * token
             */
            token?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/others/set_encryption',
            headers: {
                'Platform': platform,
                'Ticket': ticket,
                'Username': username,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * 第三方列表
     * @returns any 第三方列表
     * @throws ApiError
     */
    public getApiIntegrationNoticeSiteList({
        platform,
        deviceInfo,
        vga,
        uuid,
        username,
        ticket,
        getType,
    }: {
        /**
         * APP版本號
         */
        platform: string,
        /**
         * 裝置資訊
         */
        deviceInfo: any,
        /**
         * 顯卡名稱(渲染器)
         */
        vga: any,
        /**
         * 裝置UUID
         */
        uuid: string,
        /**
         * 會員名稱
         */
        username?: string,
        /**
         * 登入ID
         */
        ticket?: number,
        /**
         * 要查尋的類別sports,gaming，不給取全部
         */
        getType?: string,
    }): CancelablePromise<{
        /**
         * 回覆訊息
         */
        message?: string;
        /**
         * 回覆代碼 0:Pass
         */
        statusCode?: number;
        /**
         * 回傳內容
         */
        payload?: {
            /**
             * 平台清單
             */
            platform?: {
                /**
                 * 大分類(體育:sports，娛樂:gaming)
                 */
                sports?: {
                    /**
                     * 小分類(體育:sports， 真人:casinos，棋牌:pokers，電子:gaming，彩票:lotteries，電競:esports)
                     */
                    sports?: Array<any>;
                };
            };
            /**
             * 分類清單
             */
            categories?: Array<{
                /**
                 * 平台類別
                 */
                thirdPartyType?: string;
                /**
                 * 平台分類
                 */
                thirdPartyCategory?: string;
            }>;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/integration/notice/site_list',
            path: {
                'getType': getType,
            },
            headers: {
                'Platform': platform,
                'username': username,
                'ticket': ticket,
                'deviceInfo': deviceInfo,
                'vga': vga,
                'uuid': uuid,
            },
        });
    }

}

/**
 * Params
 */
export interface UserSabaTransferFundParams {
	direction: "0" | "1",
	amount: string,
	thirdParty: string
};
export interface OrderParams {
	profit: string,
	size: string,
	token: string,
	walletType: 0 | 1,
	captcha?: string,
	captchaKey?: string
};
export interface PostMatchPublishParams {
	roomId: number,
	userId: number,
	username: string,
	betData: string
};
export interface SetEncryptionParams {
	userId: string,
	iv: string,
	key: string
};

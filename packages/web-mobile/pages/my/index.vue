<template>
	<div class="container my fill-height tg-bg-primary">
		<div class="banner userInfo">
			<div class="d-flex px-4 pt-2 justify-space-between">
				<div class="d-flex mt-auto mb-auto">
					<span class="icon icon-userlevel pr-2 mt-auto mb-auto"></span>
					<div class="text-body-2 text-white">{{ memberInfo.username }}</div>
				</div>
				<div>
					<LanguageSelector></LanguageSelector>
				</div>

			</div>
			<div class="d-flex px-4 pt-2 pb-4">
				<span class="icon icon--small icon-quota pr-2 mt-auto mb-auto"></span>
				<div class="text-body-2 text-second">總資產: {{ memberInfo.quota }}</div>
			</div>
			<div class="userInfo-footer py-1">
				<v-row justify="center" no-gutters>
					<v-btn color="white" variant="text" class="v-col-3" rounded="xl" @click="dialogsStore.rechargeOpen = true">
						<span class="icon  icon-recharge pr-2 mt-auto mb-auto"></span>
						充值
					</v-btn>
					<v-btn color="white" variant="text" class="v-col-3" rounded="xl">
						<span class="icon icon-pickup pr-2 mt-auto mb-auto"></span>
						提领
					</v-btn>
					<v-btn color="white" variant="text" class="v-col-3" rounded="xl">
						<span class="icon icon-transfer pr-2 mt-auto mb-auto"></span>
						转账
					</v-btn>
					<v-btn color="white" variant="text" class="v-col-3" rounded="xl">
						<span class="icon icon-active pr-2 mt-auto mb-auto"></span>
						活动
					</v-btn>
				</v-row>
			</div>
		</div>
		<div class="py-2">
			<div class="block px-4 pt-3 pb-2">
				<div class="d-flex pb-1 justify-space-between">
					<div class="text-caption text-white">TG钱包 </div>
					<div class="text-caption text-white">888,888,888.00</div>
				</div>
				<div class="d-flex pb-1 justify-space-between">
					<div class="text-caption text-white">锁定钱包 </div>
					<div class="text-caption text-white">888,888,888.00</div>
				</div>
				<div class="d-flex pb-1 justify-space-between">
					<div class="text-caption text-white">体验钱包 </div>
					<div class="text-caption text-white">0.00</div>
				</div>
			</div>
			<div class="block-option d-flex flex-row-reverse py-2 px-4 ">
				<span class="icon icon--small icon-maskgroup pr-2 mt-auto mb-auto" @click="assetsOpen = true"></span>
			</div>
			<div class="block px-4 pt-3 pb-2">
				<div class="d-flex pb-1 justify-space-between">
					<div class="text-caption text-white">正在交易笔数 </div>
					<div class="text-caption text-white">18</div>
				</div>
				<div class="d-flex pb-1 justify-space-between">
					<div class="text-caption text-white">累计实货量 </div>
					<div class="text-caption text-white">822,888.00</div>
				</div>
				<div class="d-flex pb-1 justify-space-between">
					<div class="text-caption text-white">保级差额(尚缺) </div>
					<div class="text-caption text-white">500</div>
				</div>
			</div>
			<div class="block-option d-flex flex-row-reverse py-2 px-4 ">
				<span class="icon icon--small icon-questions pr-2 mt-auto mb-auto"></span>
			</div>
			<div class="block px-4 pt-3 pb-2">
				<v-tabs class="tabs-my mb-4" height="20" hide-slider v-model="currentTab">
					<v-tab class="text-caption d-flex" :class="{ 'tabs--active': currentTab === myTabs.vip }" :value="myTabs.vip">
						<span class="icon icon-cycle mr-2"></span>
						<div>
							VIP权限
						</div>
					</v-tab>
					<v-tab class="text-caption d-flex" :class="{ 'tabs--active': currentTab === myTabs.tg }" :value="myTabs.tg">
						<span class="icon icon-cycle mr-2"></span>
						<div>
							智能权限
						</div>
					</v-tab>
				</v-tabs>
				<v-window v-model="currentTab">
					<v-window-item :value="myTabs.vip">
						<div class="d-flex pb-1 justify-space-between">
							<div class="text-caption text-white">负利红包</div>
							<div class="text-caption text-white">1％</div>
						</div>
						<div class="d-flex pb-1 justify-space-between">
							<div class="text-caption text-white">提领优惠 </div>
							<div class="text-caption text-white">4次</div>
						</div>
						<div class="d-flex pb-1 justify-space-between">
							<div class="text-caption text-white">提领限额</div>
							<div class="text-caption text-white">1,000,000</div>
						</div>
					</v-window-item>
					<v-window-item :value="myTabs.tg"></v-window-item>
				</v-window>
			</div>
		</div>
		<div class="footer">
			<div class="block px-4 pt-3 pb-2">
				<v-row class="pt-2 pb-3 mx-2">
					<v-col class="v-col-3">
						<div class="d-flex flex-column">
							<span class="icon icon-rule pr-2 mt-auto mb-auto"></span>
							<div class="pt-2 text-caption text-white text-center">
								VIP规则
							</div>
						</div>
					</v-col>
					<v-col class="v-col-3">
						<div class="d-flex flex-column">
							<span class="icon icon-announcement pr-2 mt-auto mb-auto"></span>
							<div class="pt-2 text-caption text-white text-center">
								公告
							</div>
						</div>
					</v-col>
					<v-col class="v-col-3">
						<div class="d-flex flex-column">
							<span class="icon icon-bossassist pr-2 mt-auto mb-auto"></span>
							<div class="pt-2 text-caption text-white text-center">
								上级协助
							</div>
						</div>
					</v-col>
					<v-col class="v-col-3">
						<div class="d-flex flex-column">
							<span class="icon icon-24service pr-2 mt-auto mb-auto"></span>
							<div class="pt-2 text-caption text-white text-center">
								24H客服
							</div>
						</div>
					</v-col>
				</v-row>
				<v-row class="pt-2 pb-3 mx-2">
					<v-col class="v-col-3">
						<div class="d-flex flex-column" @click="handleDirection('/my/setting')">
							<span class="icon icon-setting pr-2 mt-auto mb-auto"></span>
							<div class="pt-2 text-caption text-white text-center">
								設置
							</div>
						</div>
					</v-col>
					<v-col class="v-col-3">
						<div class="d-flex flex-column" @click="handleDirection('/my/setting-private')">
							<span class="icon icon-personal pr-2 mt-auto mb-auto"></span>
							<div class="pt-2 text-caption text-white text-center">
								个人资料
							</div>
						</div>
					</v-col>
					<v-col class="v-col-3">
						<div class="d-flex flex-column">
							<span class="icon icon-abouttg pr-2 mt-auto mb-auto"></span>
							<div class="pt-2 text-caption text-white text-center">
								关于TG
							</div>
						</div>
					</v-col>
				</v-row>
			</div>
		</div>
		<LazyMyTotalAssets v-model:open="assetsOpen"></LazyMyTotalAssets>
		<LazyRecharge></LazyRecharge>
	</div>
</template>
<script lang="ts">


export type MemberInfoModel = {
	enableVerifyCode?: number;
	username: string;
	usernickname?: string;
	maxrisk?: string;
	betsize?: string;
	withdrawPassword?: number;
	saveMoneyBlocked?: number;
	withdrawMoneyBlocked?: number;
	email?: string;
	saveTotal?: string;
	withdrawTotal?: string;
	dealMoneyTotal?: string;
	winClose?: string;
	quota: string;
	level?: number;
	canSetBet?: Array<number>;
	stayReward?: string;
	trialEvent?: number;
	trialQuota?: string;
	trialStatus?: number;
	transferBlocked?: number;
	transferWallet?: number;
	accountLevelName?: string;
	mobilePass?: number;
	withdrawalMin?: string;
	reserveRemainNum?: number;
};
</script>
<script setup lang="ts">
import LanguageSelector from '@tg/web-mobile/components/my/language-selector.vue';
import { ref, Ref } from 'vue';

definePageMeta({
	title: "我的",
	isMainPage: true
});

const router = useRouter();
const enum myTabs {
	'vip' = 'vip',
	'tg' = 'tg'
};

const assetsOpen = ref(false);
const memberInfo: Ref<MemberInfoModel> = ref({
	username: 'PPP123',
	quota: '888,888,888.00'
});
const currentTab: Ref<myTabs> = ref(myTabs.vip)
const dialogsStore = useDialogs();
function handleDirection(url: string): void {
	router.push(url);
}
</script>
<style lang="scss" scoped>
.banner {
	background: url('@tg/web-mobile/assets/images/my/bg_banner/bg_banner_lg.png') center no-repeat;
	background-size: cover;
}

.userInfo-footer {
	width: 100%;
	background-color: #9393932b;

	& .icon {
		&::before {
			width: 25px;
			height: 21px;
		}

	}
}


.footer {
	& .icon {
		&::before {
			width: 30px;
			height: 30px;
			margin-left: auto;
			margin-right: auto;
		}

	}
}

.block {
	background: #36567f;
}

.tabs-my {
	font-weight: normal;
	height: 20px;


	.v-tab.v-tab.v-tab {
		color: #c3c3c3;
		height: 20px;
		min-width: 60px;
		padding-left: 0px;

		&.tabs--active {
			color: #FFF;
			font-weight: bolder;

			.icon-cycle {
				&::before {
					content: ' ';
					display: block;
				}
			}
		}

		.icon-cycle {
			&::before {
				content: ' ';
				display: none;
				width: 6px;
				height: 6px;
				border-radius: 50%;
				background-image: linear-gradient(to bottom, #ffae5c, #f5720d);
			}
		}
	}
}

.text-second {
	color: #a0c3e5;
}

.text-white {
	color: #FFF;
}

.icon {
	&::before {
		content: ' ';
		display: block;
	}
}

.icon-userinfo--footer {
	width: 100px;
}

.icon-userlevel {
	&::before {
		width: 40px;
		height: 18px;
		content: "1";
		color: #FFF;
		display: flex;
		align-items: center;
		flex-direction: row-reverse;
		padding-right: 8px;
		font-weight: bolder;
		font-size: 1.2rem;
	}
}

.icon--small {
	&::before {
		width: 18px;
		height: 18px;
	}
}
</style>
<template>
	<div class="container my">
		<div class="banner userInfo">
			<div class="d-flex px-4 pt-2 justify-space-between">
				<div class="d-flex mt-auto mb-auto">
					<span class="icon icon-userlevel pr-2 mt-auto mb-auto"></span>
					<div class="text-body-2 text-white">{{memberInfo.username}}</div>
				</div>
				<div>
					<LanguageSelector></LanguageSelector>
				</div>

			</div>
			<div class="d-flex px-4 pt-2 pb-4">
				<span class="icon icon-quota pr-2 mt-auto mb-auto"></span>
				<div class="text-body-2 text-second">總資產: {{memberInfo.quota}}</div>
			</div>
			<div class="userInfo-footer py-1">
				<v-row justify="center" no-gutters>
					<v-btn color="white" variant="text" class="v-col-3" rounded="xl">
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
	</div>
</template>
<script setup lang="ts">
import LanguageSelector from '@tg/web-mobile/components/my/language-selector.vue';

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

definePageMeta({
	title: "我的"
});

const memberInfo: MemberInfoModel = {
	username: 'PPP123',
	quota: '888,888,888.00'
}

</script>
<style lang="scss" scoped>
$icon-list: (
	"recharge": "recharge",
	"pickup": "pickup",
	"transfer": "transfer",
	"active": "active",
	"userlevel": "vipicon",
	"quota": "totalwallet"
);

@each $key,
$val in $icon-list {
	.icon-#{$key} {
		&::before {
			background: url('@tg/web-mobile/assets/images/my/icon_#{$val}.svg') center no-repeat;
			background-size: cover;
		}
	}
}

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

.icon-quota {
	&::before {
		width: 18px;
		height: 16px;
	}
}
</style>
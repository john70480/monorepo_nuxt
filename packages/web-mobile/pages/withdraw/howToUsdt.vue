<template>
    <div class="fill-height tg-bg-primary">
        <div class="content d-flex flex-column">
            <v-row class="px-2 py-2 helpTxxt">
                <v-col>
                    <p>※第1种：ERC20<br>
                        存储在以太坊的USDT(基于ERC-20协议发行)这种USDT存储
                        在以太坊地址上，相对应的，每次转帐(链上转帐)时，需要消
                        耗Gas，也就是ETH。</p>
                    <p>&nbsp;</p>

                    <p>※第2种：TRC<br>
                        存储在波场网路的USDT(基于TRC20协议发行)该USDT存储在
                        TRON的地址当中，充值、提现都是通过TRON网路进行的。</p>
                    <p>&nbsp;</p>
                    <p>※第3种：OMNI<br>
                        存储在比特币网络的USDT(基于OMNI协议发行)这种USDT存
                        储在比特币地址上，所以每次转帐(链上转帐)时，都需要支付
                        少量的比特币作为矿工费。
                        电脑端推荐：首选DNS服务器114.114.114.114，备用DNS服
                        务器8.8.8.8</p>
                    <p>&nbsp;</p>
                </v-col>
            </v-row>
            <div class="text-center colorfff">
                <div class="diamond">三种USDT扫盲卡</div>
            </div>

            <div class="tableClass">
                <table cellpadding="0" cellspacing="0">
                    <thead>
                        <tr>
                            <th>三种USDT</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>地址樣式(謹防充錯)</td>
                        </tr>
                        <tr>
                            <td>使用網路</td>
                        </tr>
                        <tr>
                            <td>網路擁堵情況</td>
                        </tr>
                        <tr>
                            <td>日常轉賬速度</td>
                        </tr>
                        <tr>
                            <td>手續費</td>
                        </tr>
                        <tr>
                            <td>安全性</td>
                        </tr>
                        <tr>
                            <td>使用建議</td>
                        </tr>
                    </tbody>
                </table>
                <table cellpadding="0" cellspacing="0">
                    <thead>
                        <tr>
                            <th>ERC20协议</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>数字0或小写x开头，例如: <span class="text-red">0xbd7e4b...</span></td>
                        </tr>
                        <tr>
                            <td>以太坊网路</td>
                        </tr>
                        <tr>
                            <td>经常拥堵</td>
                        </tr>
                        <tr>
                            <td>中等 (几分钟到数十分钟)</td>
                        </tr>
                        <tr>
                            <td>一般 钱包转账手续费与转ETH一致,平台提现一般收1-5USDT不等</td>
                        </tr>
                        <tr>
                            <td>高</td>
                        </tr>
                        <tr>
                            <td>中等额度走ETH网路</td>
                        </tr>
                    </tbody>
                </table>
                <table cellpadding="0" cellspacing="0">
                    <thead>
                        <tr>
                            <th>TRC20协议</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>大写字母T开头，例如: <span class="text-red">T9zP14nM...</span></td>
                        </tr>
                        <tr>
                            <td>波场网路</td>
                        </tr>
                        <tr>
                            <td>暂时基本不拥堵</td>
                        </tr>
                        <tr>
                            <td>快 (几秒到几分钟)</td>
                        </tr>
                        <tr>
                            <td>无 钱包转帐0手续费，平台提现时有可能收取少量手续费</td>
                        </tr>
                        <tr>
                            <td>低于前两者</td>
                        </tr>
                        <tr>
                            <td>小额高频走波场网路</td>
                        </tr>
                    </tbody>
                </table>
                <table cellpadding="0" cellspacing="0">
                    <thead>
                        <tr>
                            <th>OMNI协议</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>数字1或者3开头，例如: <span class="text-red">183hmJGRu...</span></td>
                        </tr>
                        <tr>
                            <td>比特币网路</td>
                        </tr>
                        <tr>
                            <td>偶尔拥堵</td>
                        </tr>
                        <tr>
                            <td>慢 (0.6-2小时不等)</td>
                        </tr>
                        <tr>
                            <td>最高 转账手续费一般和BTC一致,平台提现一般收2-20USDT不等</td>
                        </tr>
                        <tr>
                            <td>最高</td>
                        </tr>
                        <tr>
                            <td>大额低频走比特币网路</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>

    </div>
</template>
<script lang="ts" setup>import { Ref } from 'vue';

definePageMeta({
    title: "數字貨幣協議說明"
});

</script>
<style lang="scss" scoped>
.fill-height {
    background-image: linear-gradient(45deg, #718db7, #527299);
    height: auto !important;
}

.helpTxxt {
    color: #fff;
    font-size: 0.9rem;
}

.colorfff {
    color: #fff;
}

.diamond {
    font-weight: bold;
    display: inline-block;
    padding-left: 20px;
    padding-right: 20px;
    background: url('@tg/web-mobile/assets/images/icon/diamond.svg') left center no-repeat, url('@tg/web-mobile/assets/images/icon/diamond.svg') right center no-repeat;
    background-size: 15px, 15px;
}

.tableClass {
    table {
        color: #283763;
        width: 100%;
        position: relative;
        margin-top: 10px;

        &:last-child {
            margin-bottom: 10px;
        }

        //--tg-bg-primary
        th {
            font-size: 0.9rem;
            background-color: #eef4f8;
            padding-top: 10px;
            padding-bottom: 10px;
        }

        tr {
            font-size: 0.8rem;

            &:nth-child(even) {
                background-color: #f4f5f9;
            }

            &:nth-child(odd) {
                background-color: #fff;
            }

            td {
                padding: 5px 10px;
            }
        }
    }
}
</style>
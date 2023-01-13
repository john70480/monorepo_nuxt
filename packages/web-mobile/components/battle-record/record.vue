<template>
	<div>

		<v-row class="helpHeader py-2" no-gutters>
			<v-col cols="12" class="d-flex align-center px-0 pt-0">

				<TgItemBtn v-model="target" :list="transMoneyList"></TgItemBtn>

			</v-col>
		</v-row>
		<v-row no-gutters class="graybg warn-text">


			<v-col cols="12" class="text-center px-0 py-2">2014-2015 法甲 (正确比分统计) 380场</v-col>

			<table width="100%" class="battleTable">
				<thead>
					<tr>
						<td>日期</td>
						<td>赛事与队伍</td>
						<td>比分</td>
						<td>盘路</td>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(data, index) in list">
						<td>{{ data.date }}</td>
						<td>
							联盟名称{{ data.teamName }}<br>
							(主){{ data.team1 }}<br>
							(客){{ data.team2 }}
						</td>
						<td>{{ data.team1Score }}<br>{{ data.team2Score }}</td>
						<td :class="data.type == 0 ? 'text-red' : data.type == 1 ? 'text-green' : 'text-blue'">{{
							data.road
						}}<br>{{ data.type }}</td>
					</tr>
				</tbody>
				<tfoot v-if="list.length <= 0">
					<tr>
						<td colspan="4">暂无资料</td>
					</tr>
				</tfoot>
			</table>

		</v-row>




	</div>

</template>
<script setup lang="ts">
const target = ref(0)
const transMoneyList = ['主客相同', '主客相同']
const list = [
	{ date: '2022 05/21', teamName: 'XXXXX', team1: '主隊', team2: '客隊', team1Score: 2, team2Score: 1, road: '1/15', type: 0 },
	{ date: '2022 05/21', teamName: 'XXXXX', team1: '主隊', team2: '客隊', team1Score: 2, team2Score: 1, road: '1/15', type: 1 },
	{ date: '2022 05/21', teamName: 'XXXXX', team1: '主隊', team2: '客隊', team1Score: 2, team2Score: 1, road: '1/15', type: 2 },
	{ date: '2022 05/21', teamName: 'XXXXX', team1: '主隊', team2: '客隊', team1Score: 2, team2Score: 1, road: '1/15', type: 0 },
	{ date: '2022 05/21', teamName: 'XXXXX', team1: '主隊', team2: '客隊', team1Score: 2, team2Score: 1, road: '1/15', type: 1 },
	{ date: '2022 05/21', teamName: 'XXXXX', team1: '主隊', team2: '客隊', team1Score: 2, team2Score: 1, road: '1/15', type: 2 },
	{ date: '2022 05/21', teamName: 'XXXXX', team1: '主隊', team2: '客隊', team1Score: 2, team2Score: 1, road: '1/15', type: 0 },
	{ date: '2022 05/21', teamName: 'XXXXX', team1: '主隊', team2: '客隊', team1Score: 2, team2Score: 1, road: '1/15', type: 1 },
	{ date: '2022 05/21', teamName: 'XXXXX', team1: '主隊', team2: '客隊', team1Score: 2, team2Score: 1, road: '1/15', type: 2 },
	{ date: '2022 05/21', teamName: 'XXXXX', team1: '主隊', team2: '客隊', team1Score: 2, team2Score: 1, road: '1/15', type: 0 }
]
</script>
<style lang="scss" scoped>
.teamBanner {
	padding-top: 15px;
	padding-bottom: 15px;
	width: 100%;
	background-image: linear-gradient(45deg, #718db7, #527299);

	.logoImg {
		width: 100%;
		text-align: center;

		img {
			width: 70px;
		}
	}

	.logoName {
		text-align: center;
		color: #fff;
	}
}

.graybg {
	background-color: #eef4f8;
}

table.battleTable {
	thead {
		td {
			&:first-child {
				width: 60px;
			}
		}
	}

	tbody {
		td {
			&:not(:nth-child(2)) {
				text-align: center;
			}
		}
	}
}
</style>

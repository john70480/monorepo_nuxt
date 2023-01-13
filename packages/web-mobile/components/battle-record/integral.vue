<template>
    <div>


        <div class="graybg warn-text overflowDiv">


            <table width="100%" class="battleTable">
                <thead>
                    <tr>
                        <td></td>
                        <td>赛</td>
                        <td>胜</td>
                        <td>平</td>
                        <td>负</td>
                        <td>进/失</td>
                        <td>净胜</td>
                        <td>积分</td>
                        <td><span class="text-red">排名</span></td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(data, index) in list">
                        <td>{{ data.name }}</td>
                        <td>{{ data.t1 }}</td>
                        <td>{{ data.t2 }}</td>
                        <td>{{ data.t3 }}</td>
                        <td>{{ data.t4 }}</td>
                        <td>{{ data.t5 }}</td>
                        <td>{{ data.t6 }}</td>
                        <td>{{ data.t7 }}</td>
                        <td><span class="text-red">{{ data.t8 }}</span></td>
                    </tr>
                </tbody>
                <tfoot v-if="list.length <= 0">
                    <tr>
                        <td colspan="9">暂无资料</td>
                    </tr>
                </tfoot>
            </table>

        </div>




    </div>

</template>
<script setup lang="ts">
const target = ref(0)
const transMoneyList = ['同主客', '同赛事']
const list = [
    { name: '名称名称名称名称', t1: 32, t2: 13, t3: 7, t4: 12, t5: 6 / 3, t6: 0, t7: 46, t8: 10 },
    { name: '名称名称名称名称', t1: 32, t2: 13, t3: 7, t4: 12, t5: 6 / 3, t6: 0, t7: 46, t8: 10 }
]
</script>
<style lang="scss" scoped>
.overflowDiv {
    overflow-x: auto;
}

.graybg {
    background-color: #eef4f8;
}

.btnClass {
    height: 30px;
    font-size: 0.8rem;
    padding-left: 15px;
    padding-right: 15px;
    margin-left: 10px;
    background-color: #587eb0;
    border: 1px solid #fff;
    color: #fff;
    border-radius: 50px;

    &.target {
        background-color: #36567f;
        border: 1px solid #36567f;
        color: #fff;
    }
}

table.battleTable {
    border-spacing: 0;
    border: 1px solid #ddd;

    thead {
        td {
            padding: 12px 6px 12px 6px;
            font-size: 12px;

            &:first-child {
                width: 80px;
                word-break: break-all;
            }

            &:not(:first-child) {
                text-align: center;
            }
        }
    }

    tbody {
        td {
            font-size: 12px;
            padding: 12px 6px 12px 6px;

            &:not(:first-child) {
                text-align: center;
            }
        }
    }
}
</style>

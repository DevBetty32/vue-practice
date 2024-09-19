<template>
<div>
    <table>
        <thead>
            <tr>
                <th>게임명</th>
                <th>장르</th>
                <th>재미</th>
                <th>비용</th>
            </tr>
        </thead>
        <tbody>
            <tr :key="index" v-for="(game,index) in gameList">
                <td>{{ game.name }}</td>
                <td>{{ game.genre }}</td>
                <td>{{ game.fun }}</td>
                <td>{{ game.cost }}</td>
            </tr>
        </tbody>
    </table>
</div>
</template>
<script>
    export default {
        data() { //html과 js코드에서 사용할 데이터 변수 선언
            return {
                gameList: []
            };
        },
        created() {
            this.getList();
        }, //컴포넌트가 생성되면 실행
        methods:{
            async getList(){
                this.gameList = await this.$api("https://c9482d6c-4888-4adb-870a-cb4785f22def.mock.pstmn.io/list","get");
            }
        }
    }
</script>
<style lang="css" scoped>
    table{
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }
    th, td{
        border: 1px solid #ddd;
        text-align: left;
        padding: 8px;
    }
</style>
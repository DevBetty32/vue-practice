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
                sampleData: '',
                gameList: [
                {"name":"명조", "genre":"오픈월드액션", "fun":"3/5", "cost":"10$/month"},
                {"name":"젠존제", "genre":"로그라이트액션", "fun":"4/5", "cost":"13$/month"},
                {"name":"붕스", "genre":"오픈월드턴제", "fun":"4/5", "cost":"13$/month"}
                ]
            };
        },
        setup() {}, //컴포지션 API
        created() {}, //컴포넌트가 생성되면 실행
        mounted() {}, //template에 정의된 html코드가 렌더링 된 후 실행
        unmounted() {}, // unmount가 완료된 후 실행
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
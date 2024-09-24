<script>
import ApiFromMixin from '../api.js' //export default기때문에 이름을 원하는대로 가져올 수 있다
export default {
    mixins: [ApiFromMixin], // 사용할 믹스인들을 배열로 등록한다
    data(){
        return {
            gameList: []
        };
    },
    async mounted(){
        this.gameList = await this.$callAPI("https://c9482d6c-4888-4adb-870a-cb4785f22def.mock.pstmn.io","get");
        //$callAPI는 내부에서 await를 사용하지만, 본인도 프로미스를 반환하므로 여기서도 비동기처리를 해줘야 한다.
        console.log(this.gameList);
    }
}
</script>
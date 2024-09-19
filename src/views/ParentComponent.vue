<template>
<ChildComponent ref="ChildComp" @customEvent="sendMsg" />
    <button type="button" @click="changeChildData">Change Child Data</button>
    <br>
    <button type="button" @click="checkChildData">Check Child Data</button>
</template>
<script>
import ChildComponent from "./ChildComp.vue";

    export default {
        name: 'parentComp', //컴포넌트 이름
        components: {ChildComponent}, //타 컴포넌트 사용 시 컴포넌트를 import하고 배열로 저장
        computed: {
            childMsg() {
                return this.$refs.ChildComp.childMsg;
            }
        },
        mounted() {
            this.$refs.ChildComp.directCall();
        }, //template에 정의된 html코드가 렌더링 된 후 실행
        unmounted() {}, // unmount가 완료된 후 실행
        methods: {
            changeChildData(){
                this.$refs.ChildComp.btnMsg = "Changed Data";
                console.log("changeChildData()");
            },
            sendMsg(data){
                console.log("data")
                console.log(data)
            },
            checkChildData(){
                alert(this.childMsg);
            }
        } //컴포넌트 내에서 사용할 메소드 정의의
    }
</script>
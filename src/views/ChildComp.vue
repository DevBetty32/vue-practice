<template>
    <button type="button" @click="childFunc" ref="btn">{{btnMsg}}</button>
</template>
<script>
    export default {
        components: {}, //타 컴포넌트 사용 시 컴포넌트를 import하고 배열로 저장
        data() { //html과 js코드에서 사용할 데이터 변수 선언
            return {
                sampleData: '',
                btnMsg:"dafault",
                msg:"커스텀이벤트 발생",
                childMsg:"변경전 메세지"
            };
        },
        setup() {}, //컴포지션 API
        created() {}, //컴포넌트가 생성되면 실행
        mounted() {
            this.$emit('customEvent', this.msg)
        }, //template에 정의된 html코드가 렌더링 된 후 실행
        unmounted() {}, // unmount가 완료된 후 실행
        methods: {
            childFunc(){
                console.log("부모 comp에서 이벤트 발생시킴")
                this.childMsg = "변경된 메세지"
            },
            directCall(){
                console.log("직접 호출됨")
            }
        } //컴포넌트 내에서 사용할 메소드 정의의
    }
</script>
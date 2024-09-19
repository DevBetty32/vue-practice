<template>
<div>
    <h2>Cube</h2>
    <div>
        <input type="text" v-model="inputnum" @keyup="cubeNumber"/>
        <span> * </span>
        <input type="text" v-model="inputnum" readonly/>
        <span> = </span>
        <span>{{ result }}</span>
    </div>
</div>
</template>
<script>
    export default {
        name: 'cubeLegacy', //컴포넌트 이름
        components: {}, //타 컴포넌트 사용 시 컴포넌트를 import하고 배열로 저장
        data() { //html과 js코드에서 사용할 데이터 변수 선언
            return {
                inputnum: 0,
                result: 0
            };
        },
        setup() {}, //컴포지션 API
        created() {}, //컴포넌트가 생성되면 실행
        mounted() {}, //template에 정의된 html코드가 렌더링 된 후 실행
        unmounted() {}, // unmount가 완료된 후 실행
        methods: {
            cubeNumber(){
                this.result=parseInt(this.inputnum)*parseInt(this.inputnum);
            }
        } //컴포넌트 내에서 사용할 메소드 정의의
    }
</script>
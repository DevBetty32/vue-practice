<template>
    <provide-inject-child></provide-inject-child>
</template>
<script>
import ProvideInjectChild from './ProvideInjectChild.vue';
    export default {
        components: {ProvideInjectChild}, //타 컴포넌트 사용 시 컴포넌트를 import하고 배열로 저장
        data() { //html과 js코드에서 사용할 데이터 변수 선언
            return {
                items: ['명조','젠존제','스타레일']
            };
        },
        provide(){
            return {
                itemLength: this.items.length
            }
        },
        setup() {}, //컴포지션 API
        created() {}, //컴포넌트가 생성되면 실행
        mounted() {}, //template에 정의된 html코드가 렌더링 된 후 실행
        unmounted() {}, // unmount가 완료된 후 실행
        methods: {} //컴포넌트 내에서 사용할 메소드 정의의
    }
</script>
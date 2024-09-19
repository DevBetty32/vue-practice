<template>
    <div>
        <PageTitle :title="title"/>
    </div>
</template>
<script>
import PageTitle from '@/components/PageTitle.vue';
    export default {
components: {PageTitle},
data() { //html과 js코드에서 사용할 데이터 변수 선언
            return {
                title: "data.title"
            };
        },
        setup() {}, //컴포지션 API
        created() {}, //컴포넌트가 생성되면 실행
        mounted() {}, //template에 정의된 html코드가 렌더링 된 후 실행
        unmounted() {}, // unmount가 완료된 후 실행
        methods: {} //컴포넌트 내에서 사용할 메소드 정의의
    }
</script>

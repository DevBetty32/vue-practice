<template>
<slot-modal-layout>
    <template #header>
        <h1>팝업 헤더</h1>
    </template>
    <template #main>
        <p>팝업 메인1</p>
        <p>팝업 메인2</p>
    </template>
    <template #footer>
        <button type="button">닫기</button>
    </template>
</slot-modal-layout>
</template>
<script>
import SlotModalLayout from './SlotModalLayout.vue';

    export default {
        components: {SlotModalLayout}, //타 컴포넌트 사용 시 컴포넌트를 import하고 배열로 저장
        data() { //html과 js코드에서 사용할 데이터 변수 선언
            return {
                sampleData: ''
            };
        },
        setup() {}, //컴포지션 API
        created() {}, //컴포넌트가 생성되면 실행
        mounted() {}, //template에 정의된 html코드가 렌더링 된 후 실행
        unmounted() {}, // unmount가 완료된 후 실행
        methods: {} //컴포넌트 내에서 사용할 메소드 정의의
    }
</script>
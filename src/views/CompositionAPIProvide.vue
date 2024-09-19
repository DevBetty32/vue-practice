<template>
<div>
<CompositionAPIInject></CompositionAPIInject>
</div>
</template>
<script>
import { provide } from 'vue';
import CompositionAPIInject from './CompositionAPIInject.vue';

    export default {
        components: {CompositionAPIInject}, //타 컴포넌트 사용 시 컴포넌트를 import하고 배열로 저장
        data() { //html과 js코드에서 사용할 데이터 변수 선언
            return {
                sampleData: ''
            };
        },
        setup() {
            provide('title', '1주일전에 vue뚝딱') // key value
        }
    }
</script>
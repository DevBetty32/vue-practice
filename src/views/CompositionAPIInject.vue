<template>
<div>
    <h1>{{ title }}</h1>
</div>
</template>
<script>
import { inject } from 'vue';

    export default {
        components: {}, //타 컴포넌트 사용 시 컴포넌트를 import하고 배열로 저장
        data() { //html과 js코드에서 사용할 데이터 변수 선언
            return {
                sampleData: ''
            };
        },
        setup() {
            const title = inject('title');
            return {title} // key값으로 가져온 후 리턴
        }
    }
</script>
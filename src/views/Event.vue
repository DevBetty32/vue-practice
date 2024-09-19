<template>
    <div>
        <button type="button" @click="counterPlus">Plus 1</button>
        <p>Counter : {{ counter }}</p>
    </div>
<div>
    <select v-model="selectedValue" @change="changeSelect">
        <option value="01">명조</option>
        <option value="02">젠존제</option>
        <option value="03">붕스</option>
    </select>
</div>
</template>
<script>
    export default {
        name: 'EventVue', //컴포넌트 이름
        components: {}, //타 컴포넌트 사용 시 컴포넌트를 import하고 배열로 저장
        data() { //html과 js코드에서 사용할 데이터 변수 선언
            return {
                counter:0,
                selectedValue:'',
                valueMap:{
                    '01':'명조(맵)',
                    '02':'젠존제(맵)',
                    '03':'붕스(맵)'
                }
            };
        },
        setup() {}, //컴포지션 API
        created() {}, //컴포넌트가 생성되면 실행
        mounted() {}, //template에 정의된 html코드가 렌더링 된 후 실행
        unmounted() {}, // unmount가 완료된 후 실행
        methods: {
            counterPlus(){
                this.counter = this.counter + 1;
            },
            changeSelect(){
                alert(this.valueMap[this.selectedValue]);
            }
            
        } //컴포넌트 내에서 사용할 메소드 정의의
    }
</script>
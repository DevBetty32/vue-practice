<template>
<div class="dashboard">
    <div class="grid">
        <!-- key는 vue가 관리하는 속성. 리스트 관리를 위해 사용.
         변경된 항목만 업데이트 하는 등의 목적으로 사용됨.
         지금은 갯수가 9개로 고정되어있고 순서도 정해져 있으므로 index를 키로 사용하나
         배열이 동적으로 추가, 제거되는 경우 항목 ID등을 key로 사용할 것. 예를들어 컬럼명 등.-->
        <DashboardItem v-for="(item, index) in items" :key="index" :title="item.title" :value="item.value" >
        </DashboardItem>
    </div>
</div>
</template>
<script>
import DashboardItem from '@/components/DashboardItem.vue';
import axios from 'axios';

    export default {
        components:{
            DashboardItem,
        },// 사용하는 컴포넌트 등록
        data(){
            return{
                items: Array(9).fill({title:'',value:''}),
            };
        }, //항목들 초기화
        mounted(){
            this.fetchItems(); //마운트시 호출
            setInterval(this.fetchItems, 5000); //5초마다 fetchItems 호출
        },
        methods:{
            async fetchItems(){
                try {
                    const response = await axios.get("someURL");
                    this.items=response.data; //데이터 가져오기
                } catch (error) {
                    console.error("데이터 가져오기 실패",error);
                }
            }
        }
    }

</script>
<style scoped>

.dashboard{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.grid{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    width: 100%;
    max-width: 1200px;
}
</style>
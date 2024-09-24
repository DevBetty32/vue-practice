<template>
<div class="dashboard-item">
    <h3>{{ title }}</h3>
    <p>{{ value }}</p>
</div>
</template>
<script>
    export default {
        props:{
            
            title: {
                type: String,
                required: true //부모 컴포넌트에서 이 prop를 전달하지 않으면 콘솔에 에러출력
            }
            ,
            value: {
                type: String,
                required: true
        }
        }
    }
</script>

<style scoped>
.dashboard-item{
    border: 1px solid #ccc;
    padding: 16px;
    margin: 8px;
    text-align: center;
    border-radius: 4px;
}
</style>
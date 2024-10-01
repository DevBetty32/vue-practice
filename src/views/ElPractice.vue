<template>
    <div>
        <h2>라벨이 왼쪽에 달린 입력 박스</h2>
        <div v-for="(input, index) in inputs" :key="index" class="input-group">
            <label :for="'input' + index">{{ input.label }}</label>
            <el-input
                v-model="input.value"
                :placeholder="input.placeholder"
                :id="'input' + index"
            ></el-input>
        </div>
    </div>
</template>

<script>
export default {
    name:'ElPractice',
    data() {
        return {
            inputs: [
                { label: '이름', value: '', placeholder: '이름을 입력하세요' },
                { label: '이메일', value: '', placeholder: '이메일을 입력하세요' },
                { label: '전화번호', value: '', placeholder: '전화번호를 입력하세요' },
                // 필요한 만큼 입력 추가
            ],
        };
    },
};
</script>

<style>
.input-group {
    display: flex; /* Flexbox 사용 */
    align-items: center; /* 수직 정렬 */
    margin-bottom: 16px; /* 각 입력 박스 간격 설정 */
}

label {
    width: 100px; /* 라벨의 고정 너비 */
    margin-right: 10px; /* 라벨과 입력 박스 간격 설정 */
    text-align: right;
}
</style>
<template>
    <div>
        <div>{{htmlString}}</div>
        <div v-html="htmlString"></div>
    </div>
    <div>
        <input type="text" v-model="valueModelText" />
    </div>
    <div>
        <input type="number" v-model.number="valueModelNumber" />
    </div>
    <div>
        <textarea v-model="valueModelSampleMessage"></textarea>
    </div>
    <div>
        <select v-model="gameValue">
            <option value="03">명조</option>
            <option value="02">붕스</option>
            <option value="01">젠존제</option>
        </select>
    </div>
    <div>
        <label><input type="checkbox" v-model="isChecked" true-value="O" false-value="X">{{ isChecked }}</label>
    </div>
    <div>
        <label><input type="checkbox" value="젠존제" v-model="checkedGame"> 젠존제 </label>
        <label><input type="checkbox" value="명조" v-model="checkedGame"> 명조 </label>
        <label><input type="checkbox" value="붕스" v-model="checkedGame"> 붕스 </label>
        <br>
        <span>checkedGame: {{ checkedGame }}</span>
    </div>
    <div>
        <label><input type="radio" v-bind:value="radioValue1" v-model="pickedGame">{{ radioValue1 }}</label>
        <label><input type="radio" v-bind:value="radioValue2" v-model="pickedGame">{{ radioValue2 }}</label>
        <label><input type="radio" v-bind:value="radioValue3" v-model="pickedGame">{{ radioValue3 }}</label>
        <br>
        <span>pickedGame: {{ pickedGame }}</span>
    </div>
    <div>
        <img :src="imgSrc"/>
    </div>
    <div>
        <input type="text" v-model="textValue"/>
        <button type="button" :disabled="textValue==''">Click</button> 
    </div>
    <div class="container" :class="{
        'active': isActive, 'text-red': hasError
    }">
    Class Binding
    </div>
    <div v-bind:style="styleObject">인라인</div>
    <div v-bind:style="[baseStyle, addStyle]">인라인 배열</div>
</template>
<script>
    export default {
        data() { //html과 js코드에서 사용할 데이터 변수 선언
            return {
                htmlString: '<p style="color:red;">This is a red String</p>',
                valueModelText: "bindedValue",
                valueModelNumber: 777,
                valueModelSampleMessage: "This is sample message",
                gameValue: "01",
                isChecked: true,
                checkedGame: [],
                radioValue1: "젠존제",
                radioValue2: "붕스",
                radioValue3: "명조",
                pickedGame: '',
                imgSrc: "https://mml.pstatic.net/www/mobile/edit/20240913_1095/upload_17261575730660iSIY.gif",
                textValue: '',
                isActive: true,
                hasError: false,
                styleObject: {
                    color: 'red',
                    fontSize: '23px'
                },
                baseStyle: 'background-color:yellow;width:120%;height:200px;',
                addStyle: 'color:red;font-weight:bold',
            };
        }
    }
</script>
<style scoped>
    container {
        width: 100%;
        height: 200px;
    }
    .active{
        background-color: yellow;
        font-weight: bold;
    }
    .text-red{
        color:red;
    }
</style>
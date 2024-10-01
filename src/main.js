import { createApp } from 'vue'
import App from './App.vue'
import router from './router' //index.js imported
import mixins from './mixins'
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import ElementPlus from 'element-plus'

//createApp(App).use(router).mixin(mixins).mount('#app') //한줄로 써도 기능상 차이는 없으나.. 가독성 & 디버깅 고려

const app = createApp(App);

app.directive('focus', { //커스텀 디렉티브 이름 focus로 지정
    mounted(el){ //el은 디렉티브가 적용된 DOM
        el.focus()//js 내장함수.
    }
})

app.use(router);
app.mixin(mixins);
app.mount('#app') // DOM 루트엘리먼트, HTML에서 ID가 app인곳에 매핑됨.
app.use(ElementPlus)


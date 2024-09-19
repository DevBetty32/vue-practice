<template>
<div>
    <h2>Cube</h2>
    <div>
        <input type="text" v-model="inputnum"/>
        <span> * </span>
        <input type="text" v-model="inputnum" readonly/>
        <span> = </span>
        <span>{{ result }}</span>
    </div>
</div>
</template>
<script>
import { cubeInteger } from '@/common';
    export default {
        name: 'cubeCompositionAPI',
        setup(){
            let {inputnum, result} = cubeInteger();
            return {
                inputnum, result
            }
        }
    }
</script>

<!-- <script>
import { reactive, computed } from 'vue';
    export default {
        name: 'cubeCompositionAPI',
        setup(){
            let state = reactive(
                {
                    inputnum:0,
                    result: computed(() => parseInt(state.inputnum)*parseInt(state.inputnum))
                }
            );
            return {
                state
            }
        }
    }
</script> -->
<!-- <script>
import { reactive } from 'vue';
    export default {
        name: 'cubeCompositionAPI',
        setup(){
            let state = reactive(
                {
                    inputnum:0,
                    result:0
                }
            );
            function cubeNumber(){
                state.result=parseInt(state.inputnum) * parseInt(state.inputnum);
            }
            return {
                state, cubeNumber
            }
        }
    }
</script> -->
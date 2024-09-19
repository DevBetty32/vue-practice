function cubeInteger() {
    let state = reactive(
                {
                    inputnum:0,
                    result: computed(() => parseInt(state.inputnum)*parseInt(state.inputnum))
                }
            );
            return toRefs(state);
}
import { reactive, computed, toRefs } from 'vue';
export {cubeInteger};
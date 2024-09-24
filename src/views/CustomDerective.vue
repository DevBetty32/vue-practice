<template>
<div style="height: 1000px;">
    <p style="position: fixed;" v-pin="position"> v-pin에다가 position 바인딩.</p>
</div>
</template>
<script>
    export default {
        data() { 
            return {
                position: {top:50, left:100}
            };
        },
        directives:{
            focus:{
                mounted(el){
                    el.focus()
                }
            },
            pin:{
                mounted(el,binding){ //binding == position: {top:50, left:100}
                    el.style.position = 'fixed'; //style="position: fixed
                    el.style.top = binding.value.top + 'px';
                    el.style.left = binding.value.left + 'px';
                }
            }
        }
    }
</script>
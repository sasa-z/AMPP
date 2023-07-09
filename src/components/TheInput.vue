<template>
    <div>
       <label >{{ label }}</label>   
       <input
            v-bind="$attrs"     
            :placeholder="label"
            class="field"
            :value="modelValue"
            @input="$emit('update:modelValue',$event.target.value)"
       >    



    </div>
</template>

<script>
    export default {
    props: {
        label: {
            type: String,
            default: 'Input Label'
        },
        modelValue:{
            type: [String, Number],
            default: ''
        }
    },

    }
</script>

<style lang="scss" scoped>

</style>
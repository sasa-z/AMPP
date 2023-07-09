<template>
    <div>
        <input 
            type="checkbox"
            :checked="modelValue"
            @change="$emit('update:modelValue', $event.target.checked)"
        />
        <label v-if="label">{{ label }}</label>
    </div>
</template>

<script>
    export default {
        props: {
            modelValue: {
                type: Boolean,
                default: false
            },
            label:{
                type: String,
                default: ''
            },
            
        },
        
    }
</script>

<style lang="scss" scoped>

</style>
<template>
    <button 
        @click="onBtnClick()"
        class="btn" 
        :style="{background:color}">
        {{ btnText }}
    </button>
</template>

<script>
export default {
    name: 'AddButton',
    props: {
        btnText: String,
        color: String
    },
    methods: {
        onBtnClick() {
            this.$emit('show-task')
        }
    }
}
</script>
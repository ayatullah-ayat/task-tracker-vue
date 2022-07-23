<template>
    <div class="d-flex flex-between">
        <h3>{{ message }}</h3>
        <AddButton btnText="Add Task" color='green'/>
    </div>
</template>

<script>
import AddButton from './AddButton.vue';
export default {
    name: 'TopHeader',
    components: {
        AddButton
    },
    props: {
        message: String
    }
}
</script>


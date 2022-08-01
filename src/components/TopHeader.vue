<template>
    <div class="d-flex flex-between">
        <h3>{{ title }}</h3>
        <AddButton 
            @show-task="$emit('show-task')"
            :btnText="showAddTask ? 'Close' : 'Add Task'" 
            :color="showAddTask ? 'maroon' : 'green'" />
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
        title: String,
        showAddTask: Boolean
    }
}
</script>


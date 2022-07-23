<template>
    <div :class="[task.reminder ? 'reminder' : '', 'task']">
        <div class="d-flex flex-between">
            <h5>{{ task.text }}</h5>
            <i @click="removeTask(task.id)" class="fas fa-times"></i>
        </div>
        <p>{{ task.day }}</p>
    </div>
</template>

<script>

export default {
    name: 'SingleTask',
    props: {
        task: Object,
    },
    methods: {
        removeTask(id) {
            this.$emit('delete-task', id);
        }
    }
}
</script>

<style scoped>
.task {
    margin: 12px 0;
    padding: 15px;
    color: white;
    background: rgb(154, 165, 168);
    border-radius: 2px;
}
.reminder {
    border-left: 5px solid green;
}
.task h5 {
    font-size: 18px;
}
.task p {
    font-size: 12px;
    margin-top: 8px;
}
.task div i {
    color: maroon;
    cursor: pointer;
}
</style>
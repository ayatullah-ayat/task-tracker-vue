<template>
  <div :key="task.id" v-for="task in tasks">
    <SingleTask 
        @delete-task="$emit('delete-task', task.id)"
        :task="task"
    />
  </div>
</template>

<script>
import SingleTask from './SingleTask.vue';

export default {
    name: "AllTasks",
    props: {
        tasks: Array
    },
    components: { SingleTask }
}
</script>
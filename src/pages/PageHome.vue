<template>
    <div v-show="showAddTask">
        <AddNewTask 
            @add-task="addTask"
          />
      </div>
      <AllTasks 
        @delete-task="deleteTask"
        @toggle-reminder="toggleReminder"
        :tasks="tasks" />
</template>

<script>
import AllTasks from '../components/AllTasks';
import AddNewTask from '../components/AddNewTask';

export default {
    components: {
        AllTasks,
        AddNewTask,
    },
    data() {
        return {
            tasks: []
        }
    },
    props: {
        showAddTask: Boolean
    },
    methods: {
    async deleteTask(id) {
      if(confirm('Are you sure?')) {
        const res = await fetch('api/tasks/' + id, {
          method: 'DELETE'
        });
        res.status === 200 ? this.tasks = await this.fetchTasks() : alert('Id is missing!');
        // res.status === 200 ? (this.tasks = this.tasks.filter((task) => task.id !== id)) : alert('Id is missing!');
      }
    },
    async toggleReminder(id) {
      const task = await this.fetchTask(id);
      const updTask = { ...task, reminder: !task.reminder }

      await fetch('api/tasks/' + id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updTask)
      })

      this.tasks = this.tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder } : task)
    },
    async addTask(task) {
      const res = await fetch('api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
      });
      const data = await res.json();
      this.tasks = [...this.tasks, data];
    },
    async fetchTasks() {
      const res = await fetch('api/tasks');
      const data = await res.json();

      return data;
    },
    async fetchTask(id) {
      const res = await fetch('api/tasks/' + id);
      const data = res.json();
      return data;
    }
  },
  async created(){
    this.tasks = await this.fetchTasks();
  }
}
</script>
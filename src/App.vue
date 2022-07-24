<template>
  <div class="container">
      <TopHeader 
          @show-task="showTask"
          message="Task Tracker"
          :showAddTask="showAddTask" 
      />
      <div v-if="showAddTask">
        <AddNewTask 
            @add-task="addTask"
          />
      </div>
      <AllTasks 
        @delete-task="deleteTask"
        @toggle-reminder="toggleReminder"
        :tasks="tasks" />
  </div>
</template>

<script>
import TopHeader from './components/TopHeader';
import AllTasks from './components/AllTasks';
import AddNewTask from './components/AddNewTask.vue';

export default {
  name: 'App',
  components: {
    TopHeader,
    AllTasks,
    AddNewTask
},
  data() {
    return {
      tasks: [],
      showAddTask: false
    }
  },
  methods: {
    async deleteTask(id) {
      if(confirm('Are you sure?')) {
        const res = await fetch('api/tasks/' + id, {
          method: 'DELETE'
        });
        res.status === 200 ? this.tasks = this.fetchTasks() : alert('Id is missing!');
        // res.status === 200 ? (this.tasks = this.tasks.filter((task) => task.id !== id)) : alert('Id is missing!');
      }
    },
    toggleReminder(id) {
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
    showTask() {
      this.showAddTask = !this.showAddTask;
    },
    async fetchTasks() {
      const res = await fetch('api/tasks');
      const data = await res.json();

      return data;
    }
  },
  async created(){
    this.tasks = await this.fetchTasks();
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

.d-flex {
  display: flex;
}

.flex-between {
  justify-content: space-between;
}

.text-end {
  text-align: end;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}


</style>

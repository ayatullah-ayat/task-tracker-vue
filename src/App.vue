<template>
  <div class="container">
      <TopHeader 
          @show-task="showTask"
          message="Task Tracker"/>
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
    deleteTask(id) {
      if(confirm('Are you sure?')) {
        this.tasks = this.tasks.filter((task) => task.id !== id)
      }
    },
    toggleReminder(id) {
      this.tasks = this.tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder } : task)
    },
    addTask(task) {
      this.tasks = [...this.tasks, task];
    },
    showTask() {
      this.showAddTask = !this.showAddTask;
    }
  },
  created(){
    this.tasks = [
      {
        id: 1,
        text: 'Doctors Appoint',
        day: 'March 1st at 2pm',
        reminder: true
      },
      {
        id: 2,
        text: 'Doctors Fair',
        day: 'March 1st at 12pm',
        reminder: true
      },
      {
        id: 3,
        text: 'Engineer Appoint',
        day: 'March 1st at 4pm',
        reminder: false
      }
    ]
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

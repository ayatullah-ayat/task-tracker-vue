<template>
  <div class="container">
      <TopHeader 
          @show-task="showTask"
          title="Task Tracker"
          :showAddTask="showAddTask" 
      />
      <router-view :showAddTask="showAddTask"></router-view>
      <TaskFooter />
  </div>
</template>

<script>
import TopHeader from './components/TopHeader';
import TaskFooter from './components/TaskFooter.vue';

export default {
  name: 'App',
  components: {
    TopHeader,
    TaskFooter,
},
  data() {
    return {
      showAddTask: false
    }
  },

  methods: {
    showTask() {
      this.showAddTask = !this.showAddTask;
    },
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

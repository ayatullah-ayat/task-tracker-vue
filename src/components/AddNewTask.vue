<template>
    <form @submit="onSubmit" class="task-form">
        <div class="form-group">
            <label for="add-task">Task</label>
            <input v-model="text" type="text" placeholder="Add Task">
        </div>

        <div class="form-group">
            <label for="add-task">Day & Time</label>
            <input v-model="dayTime" type="text" placeholder="Add Day & Time">
        </div>
        <div class="form-inline">
            <label for="">Notification</label>
            <input v-model="reminder" type="checkbox">
        </div>
        <button class="btn btn-full-width">Save Task</button>
    </form>
</template>

<script>

export default {
    name: 'AddNewTask',
    data() {
        return {
            text: '',
            dayTime: '',
            reminder: false
        }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault();

            if(!this.text || !this.dayTime){
                alert('Please add task & daytime both!');
                return;
            }

            const newTask = {
                id: Math.floor(Math.random() * 10000),
                text: this.text,
                day: this.dayTime,
                reminder: this.reminder
            };

            this.$emit('add-task', newTask);

            this.text = '';
            this.dayTime = '';
            this.reminder = false
        }
    },
    created() {
        console.log(this.text, this.dayTime)
    }
}

</script>


<style scoped>

.task-form {
    margin-bottom: 20px;
}
.form-group {
    margin: 8px 0px;
}
.form-group label {
    display: block;
    margin-bottom: 5px;
}
.form-group input {
    width: 100%;
    padding: 0.3rem;
    font-size: 14px;
}
.form-inline label {
    margin-bottom: 5px;
}
.form-inline input {
    margin-left: 50px;
}
.btn.btn-full-width {
    width: 100%;
    margin-block: 30px;
}
</style>
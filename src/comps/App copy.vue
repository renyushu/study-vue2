<template>
    <div id="app">
        <img src="./assets/logo.png" alt="logo">
        <h1 v-text="msg" ref="title"></h1>
        <Student name="rick" :age="22" sex="man"></Student>
        <hr/>
        <Student name="jack" :age="33" sex="feamle"></Student>

    </div>
</template>

<script>
import Student from '../components/Student.vue'

    export default {
        name: 'App',
        components: {
            Student
        },
        data() {
            return {
                msg: '欢迎学习vue!'
            }
        }
    }
</script>

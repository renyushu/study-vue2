<template>
    <div id="app">
        <img src="./assets/logo.png" alt="logo">
        <h1 v-text="msg" ref="title"></h1>
        <School></School>
        <Student></Student>
        <button ref="btn" @click="showDom">点我输出上方的DOM元素</button>
        <!-- <School ref="sch"/> -->
        <School id="sch"/>

    </div>
</template>

<script>
import School from '../components/School.vue'
import Student from '../components/Student.vue'

    export default {
        name: 'App',
        components: {
            School,
            Student
        },
        data() {
            return {
                msg: '欢迎学习vue!'
            }
        },
        methods: {
            showDom(){
                // console.log(this.$refs.title) //输出真实dom元素
                // console.log(this.$refs.btn)
                console.log(document.getElementById('sch')) //获取sch实例
            }
        }
    }
</script>

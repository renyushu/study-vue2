<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>提示信息：{{msg}}</h2>
        <h2>学生name：{{name}}</h2>
        <h2>学生age：{{myAge}}</h2>
        <h2>学生sex：{{sex+1}}</h2>
        <button @click="updateAge">修改年纪</button>
    </div>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Student',
        data(){
            return {
                msg: '我是封装的组件',
                // age: 18
                myAge: this.age
            }
        },
        // props: ['name', 'age', 'sex'],
        // props: {
        //     name: String,
        //     age: Number,
        //     sex: String
        // },
        props: {
            name: {
                type: String,
                required: true
            },
            age: {
                type: Number,
                default: 99
            },
            sex: {
                type: String,
                required: true
            }
        },
        methods: {
            updateAge(){
                this.myAge++
            }
        },
    }
</script>


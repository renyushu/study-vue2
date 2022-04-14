<template>
    <div class="todo-footer" v-if="total">
        <label>
            <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
            <input type="checkbox" v-model="isAll"/>
        </label>
        <span>
            <span>已经完成{{doneTotal}}</span> / 全部{{todos.length}}
        </span>
        <button @click="clearDoneTodo">清除已经完成任务</button>
    </div>
</template>

<script>
export default {
    name: 'MyFooter',
    props: ['todos', 'checkAllTodo', 'clearAllDone'],
    computed: {
        total(){
            return this.todos.length
        },
        doneTotal(){
            // let i = 0;
            // this.todos.forEach(todo => {
            //     if (todo.done === true) i++
            // })
            // return i
            //此处使用reduce做条件统计
            return this.todos.reduce((pre, todo) => pre + (todo.done ? 1: 0), 0)
        },
        isAll: {
            get(){
                return this.total === this.doneTotal && this.total > 0
            },
            set(value){
                // console.log('@@@', value)
                this.checkAllTodo(value)
            }
        }
    },
    methods: {
        checkAll(e){
            // console.log(e.target.checked)
            this.checkAllTodo(e.target.checked)
        },
        clearDoneTodo(){
            if (confirm('确定删除吗?')) {
                this.clearAllDone()
            }
        }
    }
}
</script>

<style scoped>
  /*footer*/
  .todo-footer {height: 40px;line-height: 40px;padding-left: 6px;margin-top: 5px;}
  .todo-footer label {display: inline-block;margin-right: 20px;cursor: pointer;}
  .todo-footer label input {position: relative;top: -1px;vertical-align: middle;
    margin-right: 5px;}
  .todo-footer button {float: right;margin-top: 5px; background-color: red;}
</style>
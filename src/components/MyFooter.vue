<template>
    <div class="todo-footer">
        <label>
            <input type="checkbox"/>
        </label>
        <span>
            <span>已经完成{{doneTotal}}</span> / 全部{{todos.length}}
        </span>
        <button>清除已经完成任务</button>
    </div>
</template>

<script>
export default {
    name: 'MyFooter',
    props: ['todos'],
    computed: {
        doneTotal(){
            // let i = 0;
            // this.todos.forEach(todo => {
            //     if (todo.done === true) i++
            // })
            // return i
            //此处使用reduce做条件统计
            return this.todos.reduce((pre, todo) => pre + (todo.done ? 1: 0), 0)
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
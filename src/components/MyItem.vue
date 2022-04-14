<template>
    <li>
        <label>
            <!-- <input type="checkbox" :checked="todo.done" @click="handleCheck(todo.id)"/> -->
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
            <span>{{todo.title}}</span>
        </label>
        <button class="btn btn-danger" style="dispaly:none" @click="deleteItem(todo.id)">删除</button>
    </li>
</template>

<script>
export default {
    name: 'MyItem',
    //声明接受todo对象
    props: ['todo', 'checkTodo', 'deleteTodo'],
    methods: {
      //勾选
      handleCheck(id) {
        // console.log(id)
        //通知App组件将对应的todo对象的done取反
        this.checkTodo(id)
      },
      //删除
      deleteItem(id) {
        if (confirm('确定删除吗?')) {
          // console.log(id)
          this.deleteTodo(id)
        }
      }
    }
}
</script>

<style scoped>
  /*item*/
  li {list-style: none;height: 36px;line-height: 36px;padding: 0 5px;
    border-bottom: 1px solid #ddd;}
  li label {float: left;cursor: pointer;}
  li label li input {vertical-align:middle; margin-right:6px; position:relative;top: -1px;}
  li button {float: right;display: none;margin-top: 3px;}
  li:before {content: initial;}
  li:last-child {border-bottom: none;}
  li:hover{background-color: #ddd;}
  li:hover button{display: block;}
</style>
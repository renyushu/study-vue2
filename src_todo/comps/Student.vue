<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学生name：{{name}}</h2>
        <h2>学生sex：{{sex}}</h2>
    </div>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Student',
        data(){
            return {
                name: 'Rick',
                sex: 'female'
            }
        },

    }
</script>

<style scoped>
    /* 组件的样式 */
    .demo {
        background-color: blue;
    }
</style>
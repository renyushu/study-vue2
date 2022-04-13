<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学校name：{{name}}</h2>
        <h2>学校address：{{address}}</h2>
    </div>
</template>

<script>

    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'School',
        data(){
            return {
                name: 'shangguigu',
                address: '北京昌平',

            }
        }
    }
</script>

<style scoped>
    /* 组件的样式 */
    .demo {
        background-color: orange;
    }
</style>
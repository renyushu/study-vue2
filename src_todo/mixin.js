export const hunhe = {
    methods: {
        showName(){
            alert(this.name)
        }
    },
    mounted() {
        console.log('你好啊，我是 mixin mounted!!!')
    }
}

export const hunhe2 = {
    data(){
        return {
            flag: 'good'
        }
    },
    methods: {
        showName(){
            alert(this.name)
        }
    },
    mounted() {
        console.log('你好啊，我是 mixin mounted222!!!')
    }
}
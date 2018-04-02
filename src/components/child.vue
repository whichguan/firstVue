<template>
    <div class="" style="background-color:rgba(0,255,200,.3);">
        {{ msg }}
        接收到：{{ numberToDo }}
    </div>
</template>

<script>
  export default {
    name: 'hello',
//    props: ['number-to-do'],
    props: {
      'number-to-do': [Number, String]
    },
    data () {
      return {
        msg: '我是子组件'
      }
    }
  }
</script>

<style scoped>

</style>

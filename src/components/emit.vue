<template>
    <div class="props" style="background-color:rgba(255,0,0,.3);">
        子组件有个变量传到父组件：{{ msg }}
        <child2 @set-msg="getEvent"></child2>
        <hr>
    </div>
</template>

<script>
  import Child2 from './child2.vue'

  export default {
    components: {
      Child2
    },
    name: 'hello',
    data () {
      return {
        number: 163,
        msg: '这是父组件'
      }
    },
    methods: {
      getEvent (msg) {
//        console.log(myMsg)
        this.msg = msg
      }
    }
  }
</script>

<style scoped>

</style>

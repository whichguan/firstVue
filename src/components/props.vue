<template>
    <div class="props" style="background-color:rgba(255,0,0,.3);">
        父组件有个变量传到子组件：{{ number }}
        <input type="text" v-model="number">
        <br>
        引入：
        <child :number-to-do = 'number'></child>
        <hr>
    </div>
</template>

<script>
  import Child from './child.vue'

  export default {
    components: {
      Child
    },
    name: 'hello',
    data () {
      return {
        number: 163,
        msg: '这是父组件'
      }
    }
  }
</script>

<style scoped>

</style>

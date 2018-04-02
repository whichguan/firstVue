<template>
    <div class="props" style="background-color:rgba(255,0,0,.3);">
        插值slot
        <hr>
        默认：
        <child3></child3>
        插内容：
        <child3>
            <p style="color:blue">来自父组件</p>
        </child3>
        <hr>
        插内容，具名slot：
        <child31>
            <p style="color:blue">修改为提示信息</p>
        </child31>
        <child31>
            <p slot="header" style="color:red">修改为提示信息</p>
            <p slot="footer" style="color:green">修改为提示信息</p>
        </child31>

        <hr>
    </div>
</template>

<script>
  import Child3 from './child3.vue'
  import Child31 from './child31.vue'
  export default {
    components: {
      Child3,
      Child31
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

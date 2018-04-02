<template>
    <div class="">
        <h2>组件来回通信</h2>
        <button @click="showPop">显示浮层</button>
        状态：{{ isShow }} <br>
        回调：{{ number}}
        <br>
        <!--01-->
        <!--父->子 props： 1/2  传递属性 -->
        <!--:is-show="isShow" -->
        <my-pop v-if="isShow" :is-show="isShow" @on-close="closePop"></my-pop>

        <!-- 第二步 -->
        <!-- 子->父 监控事件触发事件 -->
        <!--@on-close="closePop"-->

    </div>
</template>

<script>
  import Pop from './alert'

  export default {
    name: 'hello',
    components: {
      'my-pop': Pop
    },
    data () {
      return {
        isShow: false,
        number: 222334
      }
    },
    methods: {
      showPop () {
        this.isShow = true
      },
      //  第二步
      //  子->父 监控事件触发事件
//      closePop (msg) {
//        this.isShow = false
//      }
// 通过参数获取回调的数值
      closePop (msg) {
        this.isShow = false
        this.number = msg
      }
    }
  }
</script>

<style scoped>

</style>

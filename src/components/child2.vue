<template>
    <div class="" style="background-color:rgba(0,255,200,.3);">
        {{ msg }}
        发送：<input type="text" v-model="msg">
        <button type="button" @click="emitEvent">$emit</button>
    </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: '我是子组件'
      }
    },
    methods: {
      emitEvent () {
        this.$emit('set-msg', this.msg)
      }
    }
  }
</script>

<style scoped>

</style>

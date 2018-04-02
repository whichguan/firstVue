<template>
    <div>
        <h2 v-text="msg" v-css></h2>
        <!--<input type="text" v-focus>-->
    </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: '自定义指令'
      }
    },
    directives: {
      css: {
        inserted (el, binging) {
          console.log(el)
          console.log(binging)
          console.info('el=' + el)
          console.info('binging==' + binging)
        }
      },
      focus: {
        inserted (el, binging) {
          el.focus()
        }
      }
    }
  }
</script>

<style scoped>

</style>

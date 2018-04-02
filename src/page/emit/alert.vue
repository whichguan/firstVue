<template>
    <div class="pop-alert">
        <div class="pop-cover" @click="closeMyself"></div>
        <div class="pop-content">
            <div class="pop-close" @click="closeMyself">X</div>
            hello\{{ isShow }}
        </div>
    </div>
</template>

<script>
  export default {
    name: 'hello',
//    02
//    父->子： 2/2  :监控父元素的属性，接收属性
    props: {
      'is-show': [Boolean, Number, String]
    },
    data () {
      return {
//        showPop: true
        msg: '来自子组件'
      }
    },
    methods: {
//      第一步
//      子-父： 1/2 : 发送事件
      closeMyself () {
//        this.$emit('on-close')
//        可以带一个参数，把数值传到父元素
        this.$emit('on-close', this.msg)
      }
    }
  }
</script>

<style scoped>
    .pop-alert {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 10;
    }

    .pop-cover {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 11;
        background-color: rgba(0, 0, 0, .5);
    }

    .pop-content {
        width: 200px;
        height: 80px;
        background-color: #fff;
        margin: 0 auto;
        position: fixed;
        z-index: 12;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }
</style>

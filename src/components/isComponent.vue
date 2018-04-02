<template>
    <div class="props" style="background-color:rgba(255,0,0,.3);">
        <div :is="currentView"></div>
        <button type="button" @click="toggleCom">切换组件</button>
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
        currentView: 'child3'
      }
    },
    methods: {
      toggleCom () {
        this.currentView === 'child31' ? this.currentView = 'child3' : this.currentView = 'child31'
      }
    }
  }
</script>

<style scoped>

</style>

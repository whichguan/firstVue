<template>
    <div id="app">
        <!--<P>{{status}}</P>-->
        <div> {{status}} ：{{myApi}}</div>
        <h2>组件过渡动画</h2>
        <ol class="list">
            <router-link to="transitionCSS" tag='li'>css实现过渡</router-link>
        </ol>

        <ol class="list">
            <router-link to="direct" tag='li'>自定义指令</router-link>
        </ol>
        <hr style="border-bottom: 1px solid red">
        <router-view></router-view>
    </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        status: process.env.NODE_ENV,
        myApi: process.env.BASE_API
      }
    }
  }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        /*margin-top: 60px;*/
    }
</style>

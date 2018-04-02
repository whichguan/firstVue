<template>
    <div id="app">
        <!--<P>{{status}}</P>-->
        <div> {{status}} ：{{myApi}}</div>
        <h2>组件通信</h2>
        <ol class="list">
            <!--<router-link to="hello" tag='li'>hello</router-link>-->
            <router-link to="props" tag='li'>父==>子 组件传递 props监听</router-link>
            <router-link to="emit" tag='li'>子==>父 组件发送 emit发送事件</router-link>
            <router-link to="slot" tag='li'>父==>子 组件传递 slot 插值</router-link>
            <router-link to="isComponent" tag='li'>动态组件 :is切换</router-link>
            <router-link to="emitProps" tag='li'>组件来回通信</router-link>
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
    .hello h1 {
        color: #ffffff;
    }
</style>

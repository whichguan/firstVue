<template>
    <div class="hello">
        <h1>{{ msg }} {{ status }}</h1>
        <div class="info"> {{status}} ：{{myApi}} - {{myApi2}}</div>

    </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        status: process.env.NODE_ENV,
        myApi: process.env.ENV_CONFIG,
        myApi2: process.env.BASE_API2
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .hello {
        h1 {
            background-color: rgba(255,0,0,.3);
        }
    }
    h2{
        background-color: rgba(0,0,255,.3);
    }

</style>

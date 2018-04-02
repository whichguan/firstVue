<template>
    <div class="index">
        <strong v-text="info"></strong>
        <ol>
            <li>安装 npm install mockjs --save-dev</li>
            <li>使用 import './mock/mock'</li>
            <li>模拟</li>
            <li>请求</li>
        </ol>
        <ul>
            <li v-for="(newsDate, key) in newsListShow" :key='key'>
                <div class="title">{{newsDate.title}}</div>
                <div>
                    <span class="name">{{newsDate.name}}</span>
                    <span class="date">{{newsDate.date}}</span>
                    <span class="number">NO：{{newsDate.number}}</span>
                    <span class="number">￥{{newsDate.price}}</span>
                    <br>
                    <span class="number">{{newsDate.total}}</span>
                    <span class="number" :class="[newsDate.status ? 'red':'blue']">{{newsDate.status}}</span>
                    <span class="number">{{newsDate.region}}</span>
                    <span class="number">{{newsDate.province}}</span>

                </div>

                <img :src="newsDate.img" style="border-radius: 0.2rem;">
            </li>

        </ul>

    </div>
</template>


<script>
  export default {
    name: 'index',
    data () {
      return {
        info: '使用mockjs',
        newsListShow: []
      }
    },
    created () {
      this.setNewsApi()
    },
    methods: {
      setNewsApi: function () {
        this.$http.post('/news', 'type=top&key=123456').then(res => {
          console.log(res.data)
          this.newsListShow = res.data.data
        })
      }
    }
  }
</script>


<style scoped>
    .red {
        color: red;
    }
    .blue{
        color: blue;
    }
</style>

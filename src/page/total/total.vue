<template>
    <div class="">
        数组：
        <ul>
            <li v-for="item in formData.Body" v-text="item.Cost"></li>
        </ul>
        <button @click="sumTotal()">合计</button>
        total:{{ total }}
    </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        total: '',
        formData: {
          Body: [
            {
              Cost: 1
            },
            {
              Cost: 3
            },
            {
              Cost: 2
            }
          ]
        }
      }
    },
    methods: {
      sumTotal () {
        this.total = 0
        this.formData.Body.forEach((item) => {
          this.total += item.Cost
        })
      }
    }
  }
</script>

<style scoped>

</style>

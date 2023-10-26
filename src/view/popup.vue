<template>
  <div class="main_app">
    <h1>Hello {{msg}}</h1>
    <div>Count: {{count}} </div>
    <div><button v-on:click="increment">increment</button></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'popupView',
  data () {
    return {
      msg: 'popup'
    }
  },
  async beforeCreate() {
    await this.$store.restored
  },
  computed: {
    ...mapGetters([
      'count'
    ])
  },
  methods: {
    increment() {
      this.$store.commit('increment')
    }
  }
}

</script>

<style>
.main_app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 200px;
}
</style>

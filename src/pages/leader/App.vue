<template>
  <div id="app">
pppppppppppppppppppppp
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld
  },
  data: function(){
  },
  methods: {
  }
}
</script>

<style lang="scss">


#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    .el-row {
      background-color: $theme-primary-dark;
      .el-button {
    @include shadow;

      }
    }
}
</style>

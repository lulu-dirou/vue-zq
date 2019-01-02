<template>
  <div class="mylive">
    <div class="mySetting-title"><span>我的直播</span></div>
    <my-live :paginationShow="true"></my-live>
  </div>
</template>


<script>
import MyLive from '../../../../components/MyLive'

export default {
  components: {
    'my-live': MyLive,
  },
  props: {
  },
  data: function() {
    return {
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
  },
  created: function(){
  },
  mounted: function(){
  }
}
</script>


<style lang="scss" scoped>
</style>
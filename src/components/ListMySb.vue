<template>
  <div class="listMini listMySb">
    <table class="tc tc-f tc-pdt5">
      <tbody>
        <tr v-for="list in 1" :key="list.id">
          <td class="mini-dot"><i></i></td>
          <td class="mini-title"><a href="">我的相关申报...</a></td>
          <td class="mini-time"><span>2018.12.17</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>

export default {
  components: {
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
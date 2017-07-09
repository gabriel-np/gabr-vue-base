<template>
  <div class="principal">

    <el-card class="box-card">
      {{ msg }}
    </el-card>

    <sec :doc="doc"></sec>

  </div>
</template>

<script>
import Sec from './Sec.vue';
export default {
  name: 'principal',
  data () {
    return {
      msg: 'This is msg',
      doc: 'This is doc'
    }
  },
  methods: {  },
  components: {
    sec: Sec
  },
  mounted: function () {  }
}
</script>

<style lang="scss">
  .principal {
    margin-top: 40px;
  }
  .box-card {
    margin-bottom: 16px;
    max-width: 480px;
  }
</style>

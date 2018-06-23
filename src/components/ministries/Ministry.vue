<template>
  <div>
    <h1>Ministry</h1>
    <hr>
    <p>Loaded ID: {{ id }}</p>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    // data: function () {
    //   return {
    //     id: this.$route.params.id
    //   }
    // },
    props: ['id']
    // ,
    // watch: {
    //   '$route' (to, from) {
    //     this.id = to.params.id
    //   }
    // }
  }
</script>



<style lang="scss" scoped>

</style>

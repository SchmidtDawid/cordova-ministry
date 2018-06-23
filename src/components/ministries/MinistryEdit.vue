<template>
  <div>
    Ministry id: {{ $route.params.id }} <br>
    EDIT<br>
    query: <br>
    Locale: {{$route.query.locale}}<br>
    q: {{$route.query.q}}
  </div>
</template>

<script>
export default {
  props: [ 'id' ]
}
</script>

<style lang="scss" scoped>
  button{
    display: block;
  }
</style>

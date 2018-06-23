<template>
  <div>
    Ministry id: {{ $route.params.id }}
    <router-link tag="button" :to="{ name: 'MinistryEdit', params: { id: $route.params.id }, query: {locale: 'en', q: 100} }"><v-btn>Edit</v-btn></router-link>
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

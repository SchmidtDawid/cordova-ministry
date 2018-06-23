<template>
  <ul>
    <router-link to="/" tag="li" active-class="active" exact><a>Ministries</a></router-link>
    <router-link to="/ministry/10" tag="li" active-class="active"><a>Ministry</a></router-link>
    <router-link to="/ex" tag="li" active-class="active"><a>Ex</a></router-link>
  </ul>
</template>

<style lang="scss" scoped>
  li{
    display: inline-block;
    a{
      text-decoration: none;
      color: rgb(88, 88, 88);
      padding: 0 10px;
    }
    &.active a{
      color: rgb(37, 37, 37);
    }
  }
</style>

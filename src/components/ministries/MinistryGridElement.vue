<template>
  <v-flex d-flex xs6 sm4 md3>
    <router-link :to="ministryPatch">
      <v-card>
        <v-card-media v-if="ministry.locationType === 'v'" :src="require('@/assets/card-village.png')" height="120px">
          <div class="blend">
            <div class="wrapper">
              <h2>{{ ministry.day }} <span>{{ ministry.month }}</span></h2>
              <h2>{{ ministry.location }}</h2>
            </div>
          </div>
        </v-card-media>
        <v-card-media v-else :src="require('@/assets/card-city.png')" height="120px">
          <div class="blend">
            <div class="wrapper">
              <h2>{{ ministry.day }} <span>{{ ministry.month }}</span></h2>
              <h2>{{ ministry.location }}</h2>
            </div>
          </div>
        </v-card-media>
        <v-card-title primary-title>
        </v-card-title>
        <v-card-actions>
        </v-card-actions>
      </v-card>
    </router-link>
  </v-flex>
</template>

<script>
  export default{
    props: ['ministry'],
    data: function () {
      return {
        ministryPatch: '/ministry/' + this.ministry.id
      }
    }
  }
</script>



<style lang="scss" scoped>
  .card__media{
    background-color: #000;
    .blend{
      background-color: rgba(0, 0, 0, 0.39);
      width: 100%;
      height: 100%;
      padding: 5%;
      position: relative;
      .wrapper{
        position: absolute;
        bottom: 0;
        width: 100%;
      }
      h2{
        color: #fff;
        font-family: 'Lato', sans-serif;
        font-weight: 200;
        font-size: 2.5rem;
        span{
          color: rgba(255, 255, 255, 0.781);
          font-size: 1.2rem;
        }
        &:nth-of-type(2){
          color: rgba(255, 255, 255, 0.911);
          font-size: 1.3rem;
        }
        &:nth-of-type(2){
          color: rgba(255, 255, 255, 0.945);
          font-size: 1.6rem;
        }
      }
    }
  }
</style>

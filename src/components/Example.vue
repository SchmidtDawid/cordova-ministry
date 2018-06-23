<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <blockquote>
          <v-btn color="info" @click="navigateToHome">Home</v-btn>
        </blockquote>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {
  methods: {
    navigateToHome () {
      this.$router.push('/')
    }
  }
}
</script>

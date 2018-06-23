<template>
  <v-app>
    <v-navigation-drawer
      fixed
      v-model="drawer"
      app
    ></v-navigation-drawer>
    <v-toolbar fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        <app-menu></app-menu>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
  <v-content>
      <router-view></router-view>
  </v-content>
  <v-footer app></v-footer>
</v-app>
</template>

<script>
  import Vue from 'vue'
  import Menu from './components/Menu'
  export default {
    data () {
      return {
        cordova: Vue.cordova,
        drawer: false,
        items: [{
          icon: 'bubble_chart',
          title: 'Inspire'
        }],
        ministries: [
          'asd'
        ]
      }
    },
    components: {
      'app-menu': Menu
    },
    created () {
      var self = this
      this.cordova.on('deviceready', () => {
        self.onDeviceReady()
      })
    },
    methods: {
      onDeviceReady: function () {
        // Handle the device ready event.
        this.cordova.on('pause', this.onPause, false)
        this.cordova.on('resume', this.onResume, false)
        if (this.cordova.device.platform === 'Android') {
          document.addEventListener('backbutton', this.onBackKeyDown, false)
        }
      },
      onPause () {
        // Handle the pause lifecycle event.
        console.log('pause')
      },
      onResume () {
        // Handle the resume lifecycle event.
        // SetTimeout required for iOS.
        setTimeout(function () {
          console.log('resume')
        }, 0)
      },
      onBackKeyDown () {
        // Handle the back-button event on Android. By default it will exit the app.
        navigator.app.exitApp()
      }
    }
  }
</script>

<style>
  @import url("https://fonts.googleapis.com/css?family=Lato:300,400,700&amp;subset=latin-ext");

	body {
    padding-top: constant(safe-area-inset-top);
    padding-top: env(safe-area-inset-top);
    font-family: 'Lato', sans-serif;
	}
  .footer{ /* Apply this to v-bottom-nav if necessary. */
    margin-bottom: constant(safe-area-inset-bottom);
    margin-bottom: env(safe-area-inset-bottom);
  }
</style>

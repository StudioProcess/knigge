<template>
  <div id="app">
    <Nuxt />
  </div>
</template>

<script>
import smoothscroll from 'smoothscroll-polyfill'

export default {
  mounted () {
    smoothscroll.polyfill()
    this.addBodyClasses()
  },
  methods: {
    addBodyClasses () {
      const ua = window.navigator.userAgent
      const mobileBrowser = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)
      const iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i)
      const webkit = !!ua.match(/WebKit/i)
      const iOSSafari = iOS && webkit && !ua.match(/CriOS/i)
      if (mobileBrowser) {
        document.querySelector('body').classList.add('mobile-browser')
      }
      if (iOS) {
        document.querySelector('body').classList.add('ios')
      }
      if (iOSSafari) {
        document.querySelector('body').classList.add('ios-safari')
      }
    }
  }
}
</script>

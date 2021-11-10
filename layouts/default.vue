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
  }
}
</script>

<template>
  <!-- <Main :presentation="false" /> -->
  <component :is="component" :presentation="false" />
</template>

<script>
import Main from '../components/main'
export default {
  components: {
    Main
  },
  data () {
    return {
      component: null
    }
  },
  mounted () {
    this.component = 'Main'
  },
  destroyed () {
    this.component = null
  }
}
</script>

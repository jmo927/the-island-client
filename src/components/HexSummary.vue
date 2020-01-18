<template>
  <div class="hex-summary">
    <h1>An Overview of the Hex</h1>
    Or maybe the settings or something.  Who knows, a lot's going to happen all at once here.

    <h1>{{ activeHex }}</h1>

    <p>{{ summary }} </p>
  </div>
</template>

<script>
import HexService from '@/services/HexService'
export default {
  name: 'hexsummary',
  data () {
    return {
      summary: '(placeholder)'
    }
  },
  methods: {
    async getHexData () {
      const response = await HexService.getThisHex(this.activeHex)
      this.summary = response.data
    }
  },
  created () {
    this.getHexData()
  },
  props: {
    activeHex: String
  }
}
</script>

<style scoped>
.hex-summary {
    /* width: 35%;
    height: 50%; */
    padding: 25px;
    border: solid 2px red;
}
</style>

<template>
  <div class="hex-summary">
    <h1>An Overview of the Hex</h1>
    Or maybe the settings or something.  Who knows, a lot's going to happen all at once here.
    <div v-if="hasData">
      <h1>{{ activeHex }}.  {{ summary.terrain.type }}</h1>

      <p>{{ summary.terrain.description }} </p>
      <p>Monument: {{ summary.monument.name }} </p>
      <p>Rumor: {{ summary.rumor.name }} </p>
      <p>Secret: {{ summary.secret.name }} </p>
      <p>Table: {{ summary.encounterTable }} </p>
    </div>
    <div v-else>
      loading...
    </div>
  </div>
</template>

<script>
import HexService from '@/services/HexService'
export default {
  name: 'hexsummary',
  data () {
    return {
      hasData: false,
      summary: {}
    }
  },
  methods: {
    async getHexData () {
      const response = await HexService.getThisHex(this.activeHex)
      // console.log(response.data)
      this.summary = response.data
      this.hasData = true
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

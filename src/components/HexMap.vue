<template>
  <div class="hex-map">
    This is gonna be a map.
    <br><br>
    <button name="1" @click="handleClick">1</button>
    <button name="2" @click="handleClick">2</button>
    <button name="3" @click="handleClick">3</button>
    <button name="4" @click="handleClick">4</button>
  </div>
</template>

<script>

export default {
  name: 'hexmap',
  props: {
    activeHex: String
  },
  methods: {
    handleClick (e) {
      this.$emit('newHex', e.target.name)
    }
  }
}
</script>

<style scoped>
.hex-map {
    /* width: 35%;
    height: 50%; */
    padding: 25px;
    border: solid 2px red;
}
</style>

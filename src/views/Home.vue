<template>
  <div class="home">
    <h1>Welcome to The Island</h1>
    This page is still under heavy development.  Head on over <router-link v-bind:to="{ name: 'blogspace' }">the blog</router-link> for more information.
    <div class="game-wrapper">
      <div class="tools-wrapper">
        <HexMap
          :activeHex="activeHex"
          @newHex="handleNewHex" />
        <Tracking />
      </div>
      <HexSummary :key="activeHex" :activeHex="activeHex" />
      <!-- <Tracking v-if="onMobileScreen"/> -->
    </div>
  </div>
</template>

<script>
import HexMap from '@/components/HexMap.vue'
import Tracking from '@/components/Tracking.vue'
import HexSummary from '@/components/HexSummary.vue'

export default {
  name: 'home',
  components: {
    HexMap,
    Tracking,
    HexSummary
  },
  computed: {
    onMobileScreen () {
      if (window.screen.width >= 850) {
        return false
      } else {
        return true
      }
    }
  },
  data () {
    return {
      activeHex: '1'
    }
  },
  methods: {
    handleNewHex (e) {
      this.activeHex = e
    }
  }
}
</script>

<style scoped>
.game-wrapper {
  padding: 5px;
}

.tools-wrapper {
  margin: 5px;
  padding: 5px;
  width: 35%;
  border: blue 2px solid;
}

.tracking {
  display: none;
}

/* For Desktops */
@media only screen and (min-width: 850px) {
  .game-wrapper {
    display: flex;
  }
  .tracking {
    display: inline-block
  }
}
</style>

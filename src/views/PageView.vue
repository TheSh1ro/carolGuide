<template>
  <main id="page-main">
    <TransitionGroup name="list">
      <WelcomeSelector
        :champions="champions"
        :selectChampion="toggleSelectedChampion"
        v-if="!selectedChampion"
      />
      <GuideComponent
        :champions="champions"
        :toggleSelectedChampion="toggleSelectedChampion"
        :selectedChampion="selectedChampion"
        v-if="selectedChampion"
      />
    </TransitionGroup>
  </main>
</template>

<script>
import GuideComponent from '../components/GuideComponent.vue'
import WelcomeSelector from '../components/WelcomeSelector.vue'

export default {
  components: { GuideComponent, WelcomeSelector },
  props: [],
  data() {
    return {
      champions: [
        { id: 1, name: 'Nami', selected: false },
        { id: 2, name: 'Lulu', selected: false },
        { id: 3, name: 'Yuumi', selected: false },
      ],
    }
  },
  created() {},
  mounted() {},
  computed: {
    selectedChampion() {
      return this.champions.find(champion => champion.selected)
    },
  },
  watch: {},
  methods: {
    toggleSelectedChampion(champion) {
      this.champions.forEach(champion => {
        champion.selected = false
      })
      if (champion) {
        champion.selected = true
      }
    },
  },
}
</script>

<style scoped>
#page-main {
  display: flex;
  width: calc(100vw - 30px);
  min-height: calc(100vh - 30px);
}

.list-enter-active {
  transition:
    opacity 2s ease,
    transform 0.5s ease;
}

.list-leave-active {
  transition: opacity 0.5s ease;
}

.list-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}

.list-leave-to {
  opacity: 0;
}
</style>

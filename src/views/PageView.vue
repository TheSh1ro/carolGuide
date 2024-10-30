<template>
  <main class="main-welcome"></main>
  <main class="main-guide" v-if="selectedChampion">
    <header class="header">
      <span
        class="champion-button"
        v-for="champion in champions"
        :key="champion.name"
        @click="toggleSelectedChampion(champion)"
        :class="{ 'champion-selected': champion.selected }"
      >
        {{ champion.name }}
      </span>
    </header>
    <div class="content">
      <div class="goals">
        <div
          class="row"
          v-for="goal in goals"
          :key="goal.name"
          @click="toggleSelectedRow(goal)"
          :class="{ 'row-selected': goal.selected }"
        >
          {{ goal.text }}
        </div>
      </div>
      <div class="result">
        <p v-if="selectedChampion && selectedGoal">
          {{ selectedChampion.name }}: {{ selectedGoal.text }}
        </p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  props: [],
  data() {
    return {
      champions: [
        { id: 1, name: 'Nami', selected: false },
        { id: 2, name: 'Lulu', selected: false },
        { id: 3, name: 'Yuumi', selected: false },
      ],

      goals: [
        { id: 1, text: 'Quando se deve dar leash', selected: false },
        { id: 2, text: 'Quando e o que itemizar', selected: false },
        {
          id: 3,
          text: 'Como se comportar nos primeiros 01:50 minutos',
          selected: false,
        },
        {
          id: 4,
          text: 'Utilizar as habilidades da melhor forma',
          selected: false,
        },
        { id: 5, text: 'Como se posicionar bem', selected: false },
        { id: 6, text: 'Controle de wave básico', selected: false },
        { id: 7, text: 'Como e quando vale a pena wardar', selected: false },
        { id: 8, text: 'Tracking básico do jungler inimigo', selected: false },
        {
          id: 9,
          text: 'Como se comportar nos primeiros 3:30 minutos',
          selected: false,
        },
        {
          id: 10,
          text: 'Como e quando vale a pena ir para o dragão',
          selected: false,
        },
        { id: 11, text: 'Como realizar um dive', selected: false },
        { id: 12, text: 'Poke avançado', selected: false },
        { id: 13, text: 'Controle de wave avançado', selected: false },
        { id: 14, text: 'Posicionamento avançado', selected: false },
        { id: 15, text: 'Mecânica avançada', selected: false },
        { id: 16, text: 'Roaming de suporte', selected: false },
      ],
    }
  },
  created() {},
  mounted() {},
  computed: {
    selectedChampion() {
      return this.champions.find(champion => champion.selected)
    },
    selectedGoal() {
      return this.goals.find(goal => goal.selected)
    },
  },
  watch: {},
  methods: {
    toggleSelectedChampion(champion) {
      this.champions.forEach(champion => {
        champion.selected = false
      })
      champion.selected = true
    },
    toggleSelectedRow(goal) {
      this.goals.forEach(goal => {
        goal.selected = false
      })
      goal.selected = true
    },
  },
}
</script>

<style scoped>
.main-guide {
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
  border-bottom-left-radius: 26px;
  margin: 15px auto;
  height: fit-content;
  width: calc(100vw - 40px);
}

header {
  display: flex;
  justify-content: space-evenly;

  & .champion-button {
    border-bottom: 1px solid rgba(150, 0, 100, 1);
    cursor: pointer;
    flex: 1;
    font-weight: bolder;
    padding-block: 1em;
    text-align: center;
    text-decoration: inherit;
    transition: all 0.3s;
    background-color: rgb(15, 15, 15);
  }

  & .champion-button::selection {
    color: inherit;
    background-color: transparent;
  }

  & .champion-button:first-of-type {
    border-top-left-radius: 20px;
  }
  & .champion-button:last-of-type {
    border-top-right-radius: 20px;
    border-right: none;
  }

  & .champion-button:hover {
    border-bottom: 1px solid rgba(150, 0, 100, 1);
    color: white;
  }

  & .champion-selected {
    border-bottom: 1px solid rgba(150, 0, 100, 1);
    background-color: rgba(150, 0, 100, 1);
    color: white;
  }
}

.content {
  display: grid;
  grid-template-columns: 1fr 2fr;
}

.goals {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(16, 1fr);
  border: 2px solid rgb(15, 15, 15);
  border-bottom-left-radius: 26px;
  background-color: rgb(15, 15, 15);

  & .row {
    padding: 1rem;
    cursor: pointer;
    transition: font 0.2s;
  }
  & .row:last-of-type {
    border-bottom-left-radius: 26px;
  }
  & .row:hover {
    color: rgba(200, 0, 100, 1);
    font-size: 1.05em;
  }
  & .row-selected {
    font-size: 1.05em;
    color: rgba(200, 0, 100, 1);
    background-color: rgb(30, 30, 30);
  }
}

.result {
  background-color: rgb(40, 40, 40);
  padding: 20px;
}
</style>

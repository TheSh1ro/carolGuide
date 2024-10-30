<template>
  <img
    class="carol-picture"
    src="https://i.imgur.com/xhnUWs8.jpeg"
    alt="none"
  />
  <div id="content">
    <div class="welcome">
      <h1>Support Guide</h1>
    </div>
    <div class="container" v-if="championsData">
      <img
        class="champion-img"
        v-for="champion in champions"
        :key="champion.name"
        :src="`https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/${champion.name}_0.jpg`"
        @click="selectChampion(champion)"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['champions', 'selectChampion'],
  data() {
    return {
      championsData: null,
    }
  },
  created() {
    this.fetchChampionsData()
  },
  methods: {
    async fetchChampionsData() {
      try {
        const response = await axios.get(
          'http://ddragon.leagueoflegends.com/cdn/14.21.1/data/pt_BR/champion.json',
        )
        this.championsData = response.data.data
      } catch (error) {
        console.error('Erro ao buscar dados dos campeões:', error)
      }
    },
  },
}
</script>

<style scoped>
#content {
  display: grid;
  grid-template-columns: 2fr 3fr;
  margin: auto;
  padding: 20px 30px;
  background-color: rgba(0, 0, 0, 0.7);
  border: 3px solid rgb(45, 0, 128);
  border-radius: 20px;
}

.welcome {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  margin-bottom: 1.25rem;
  width: 100%;
  cursor: default;
}

.welcome h1::selection {
  background-color: transparent;
}

.carol-picture {
  border-radius: 20px;
  height: 100px;
  width: 100px;
  border: 1px solid rgb(45, 0, 128);
  position: absolute;
  right: 10px;
  top: 10px;
}

.container {
  display: flex;
  gap: 10px;
}

.champion-img {
  height: 220px;
  width: 220px;
  border-radius: 20px;
  border: 1px solid rgb(45, 0, 128);
  cursor: pointer;
  transition: transform 0.3s ease;
}

.champion-img:hover {
  box-shadow: 0px 0px 3px 0px white;
  transform: scale(1.025);
}
</style>

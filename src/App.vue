<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <a id="thesh1ro" href="https://x.com/thesh1ro_" target="_blank">@thesh1ro</a>
  <RouterView />
</template>

<style scoped>
#thesh1ro {
  transition: all 0.5s;
  position: absolute;
  left: 5px;
  top: 5px;
  cursor: pointer;
  font-size: 10px;
}
#thesh1ro:hover {
  color: deepskyblue;
  font-size: 15px;
}
#thesh1ro::selection {
  background-color: deepskyblue;
}
</style>

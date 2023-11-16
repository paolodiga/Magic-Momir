<template>
  <div style="width: 80px; height: 80px;" v-if="loading">
    <TheSpinner />
  </div>
  <RouterView v-else />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref, watch } from "vue"
import useCardStore from './stores/cardStore'
import TheSpinner from './components/TheSpinner.vue'

let loading = ref(true)
const cardStore = useCardStore()

// cardStore.getCreatures()
cardStore.getLands()


watch(() => cardStore.cards, () => {
  console.log(cardStore.cards)
  loading.value = false
}, {deep: true})
</script>
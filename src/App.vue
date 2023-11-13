<template>
  <TheSpinner v-if="loading" />
  <RouterView v-else />
</template>

<script setup>
import { RouterView } from 'vue-router'
import { ref } from "vue"
import { getCards } from '@/rest/api'
import TheSpinner from '@/components/TheSpinner.vue'

let loading = ref(true)

getCards().then(result => {
  /* loading.value = false */
  console.log(result)
});

</script>
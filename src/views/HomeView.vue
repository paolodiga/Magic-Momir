<template>
  <img src="../assets/logo.png">
  <h1>
    Magic The Gathering - Momir
  </h1>

  <button size="large" @click="startGame()">
    Start game
  </button>
</template>

<script setup lang="ts">
function startGame() {
  console.log("start game")
}
</script>
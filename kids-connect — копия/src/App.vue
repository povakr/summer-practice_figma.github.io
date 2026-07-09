<template>
  <AppHeader />
  <router-view />
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
</script>

<style>
body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #e8e8e8;
  color: #333;
}
</style>
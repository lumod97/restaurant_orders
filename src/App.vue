<template>
  <Main></Main>
</template>

<script>
import Main from '@/views/main/Main.vue'
export default {
  components: { Main },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.cursor-pointer{
  cursor: pointer;
}

a{
  text-decoration: none !important;
}
</style>
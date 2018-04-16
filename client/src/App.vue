<template>
  <div id="app">
    <nav class="navbar is-fixed-top is-dark">
      <div class="navbar-start">
        <a href="/" class="navbar-item"><strong>FullStack</strong></a>
        <a href="/about" class="navbar-item">About</a>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>

</style>

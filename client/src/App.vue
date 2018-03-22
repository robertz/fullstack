<template>
  <div id="app">
    <nav class="navbar is-fixed-top is-primary">
      <a href="#/" class="navbar-item"><strong>FullStack</strong></a>
      <a href="#/about" class="navbar-item">About</a>
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
    body {
        margin-top: 60px;
    }
</style>
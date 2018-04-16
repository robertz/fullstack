<template>
  <div id="app">
    <nav class="navbar is-fixed-top is-dark">
      <div class="navbar-brand">
        <a href="/" class="navbar-item">FullStack</a>
      </div>
      <div class="navbar-start">
        <a href="/users" class="navbar-item">Users</a>
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
  .navbar-brand a {
    font-weight: bold;
  }
</style>

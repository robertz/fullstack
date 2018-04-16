<template>
  <section class="section">
    <div class="container">
      <p>User Detail</p>
      <pre>{{ user | pretty }}</pre>
    </div>
  </section>
</template>

<script>
/* eslint-disable */
export default {
  name: 'UserDetail',
  props: ['id'],
  data() {
    return {
      user: {}
    };
  },
  created() {
    this.fetchUser();
  },
  methods: {
    fetchUser() {
      fetch(`/api/users/${this.id}`)
        .then(res => res.json())
        .then((res) => {
          this.user = res;
        });
    }
  },
  filters: {
    pretty: function(value) {
      return JSON.stringify(value, null, 2);
    }
  }
}
</script>

<style>

</style>

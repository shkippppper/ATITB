<template lang="pug">
Nuxt(:class="$store.state.theme")
    router-view
</template>

<script>
export default {
  mounted() {
    if (process.client) {
      const savedTheme = localStorage.getItem("theme") || "light-theme";
      this.$nuxt.$el.classList.add(savedTheme);
    }
  },
};
</script>

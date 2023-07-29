<template lang="pug">
.main-container
    .main-content-container
        HomepageLeft
        HomepageRight
</template>

<script>
import HomepageLeft from "~/components/Homepage/HomepageLeft";
import HomepageRight from "~/components/Homepage/HomepageRight";
import DefaultButton from "~/components/UI/DefaultButton";

export default {
  name: "IndexPage",
  components: {
    HomepageLeft,
    HomepageRight,
    DefaultButton,
  },
  methods: {
    handleSwitchTheme() {
        this.$store.commit('switchTheme');
    },
  },
};
</script>

<style scoped lang="scss">
.main-container {
  height: 100vh;
  width: 100vw;
  background-color: var(--background);
  .main-content-container {
    padding: 128px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
</style>

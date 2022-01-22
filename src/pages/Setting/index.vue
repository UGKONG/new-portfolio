<template>
  <section>
    <header>
      <h2>Setting page</h2>
    </header>
    <main>
      <Login v-if="!$store.state.admin" />
      <Loading v-else />
    </main>
  </section>
</template>

<script>
import Loading from "../Common/Loading";
import Login from "@/pages/Setting/Login";

export default {
  components: {
    Loading,
    Login,
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
</style>
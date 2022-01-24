<template>
  <main bg :style="{ backgroundColor: mainColor }">
    <title v-text="titleName" />
    <Header />
    <div class="page">
      <transition name="slide-y-reverse-transition" mode="out-in">
        <router-view />
      </transition>
    </div>
  </main>
</template>

<script>
import Header from "@/pages/Common/Header";

export default {
  components: {
    Header,
  },
  created() {
    console.log("Store", this.$store.state);
  },
  computed: {
    titleName() {
      return this.$store.state.titleName.browser;
    },
    mainColor() {
      return this.$store.state.colors[4];
    },
  },
};
</script>

<style lang="scss">
@import "@style";

html,
body {
  @include wrap();
}
body {
  padding: 14px;
}
main[bg] {
  @include wrap();
  padding: 10px;
  border-radius: 20px;
}
.page {
  width: calc(100% - 200px);
  height: 100%;
  float: left;
  background: #fff;
  border-radius: 12px;
  padding: 14px;
  overflow: hidden;

  & > section {
    @include wrap();
  }

  & > section > header {
    @include flex(space-between);
    height: 38px;
    border-bottom: 1px solid #eee;
    h2 {
      @include font(18px, 600);
      padding: 0 4px;
      font-family: "Baloo Tammudu 2", cursive;
    }
    & > span {
      @include flex(flex-end);
      align-items: flex-start;
      align-self: stretch;
    }
  }

  & > section > main {
    width: 100%;
    height: calc(100% - 38px);
    padding-top: 10px;
    overflow: auto;
    padding: 10px 2px 2px;
  }
}
</style>
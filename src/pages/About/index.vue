<template>
  <section>
    <Loading v-if="isLoad" />
    <header v-if="!isLoad">
      <h2>About Page</h2>
    </header>
    <main v-if="!isLoad">
      <DefaultInfo :size="mainSize" :data="data.default" />
      <HistoryInfo :size="subSize" :data="data.history" />
      <SkillInfo :size="subSize" :data="data.skill" />
    </main>
  </section>
</template>

<script>
import axios from "axios";
import Loading from "../Common/Loading";
import DefaultInfo from "@/pages/About/DefaultInfo";
import HistoryInfo from "@/pages/About/HistoryInfo";
import SkillInfo from "@/pages/About/SkillInfo";

export default {
  components: {
    Loading,
    DefaultInfo,
    HistoryInfo,
    SkillInfo,
  },
  data: () => ({
    isLoad: true,
    data: {},
    infoW: 300,
  }),
  created() {
    this.getData();
  },
  methods: {
    getData() {
      axios.get(this.$store.state.dbUrl + "/about.json").then(({ data }) => {
        this.data = data;
        this.isLoad = false;
      });
    },
  },
  computed: {
    mainSize() {
      return {
        width: this.infoW + "px",
      };
    },
    subSize() {
      return {
        width: "calc(100% - (" + this.infoW + "px + 20px))",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@style";
$margin: 20px;
$defaultW: 300px;
main {
  overflow: hidden !important;
}
main > article {
  @include border(1px soli #eee, 8px);
  padding: 20px;
  float: left;
  box-shadow: 0 0 4px #aaa;
}
</style>
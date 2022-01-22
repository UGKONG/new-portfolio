<template>
  <section>
    <Calendar :dateClick="dateClick" :list="list" />

    <!-- Modal -->
    <transition name="fade-transition">
      <Add
        v-if="isAdd"
        :selectDate="selectDate"
        @setIsAdd="setIsAdd"
        @getList="getList"
      />
    </transition>
  </section>
</template>

<script>
import axios from "axios";
import { EventBus } from "@/../plugins/store";
import Calendar from "@/../template/Calendar";
import Add from "@/pages/Main/Add";

export default {
  components: {
    Calendar,
    Add,
  },
  data: () => ({
    list: [],
    isAdd: false,
    selectDate: "",
  }),
  created() {
    this.getList();
    EventBus.$on("getScheduleList", this.getList);
  },
  methods: {
    getList() {
      axios
        .get(this.$store.state.dbUrl + "/home/mySchedule.json")
        .then(({ data }) => {
          this.list = data;
        });
    },
    dateClick(date) {
      // if (!this.$store.state.admin) return;
      this.setIsAdd(true, date);
    },
    setIsAdd(val, date = "") {
      this.isAdd = val;
      this.selectDate = date;
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
main {
  padding-top: 0 !important;
}
</style>
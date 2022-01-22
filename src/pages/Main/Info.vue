<template>
  <section modal>
    <div wrap :style="{ height: $store.state.admin ? '162px' : '248px' }">
      <h2>
        일정 보기
        <button @click="$emit('setIsInfo', false)">
          <i class="fas fa-times" />
        </button>
      </h2>

      <Login v-if="!$store.state.admin" />
      <div v-else contents>
        <p>
          <label for="title">날짜 :</label>
          <span v-text="selectData.date" />
        </p>
        <p>
          <label for="title">내용 :</label>
          <span v-text="selectData.text" />
        </p>
        <p>
          <button @click="submit">삭제</button>
        </p>
      </div>
    </div>
    <div bg @click="$emit('setIsInfo', false)" />
  </section>
</template>

<script>
import axios from "axios";
import { useAlert } from "@/hook";
import { EventBus } from "@/../plugins/store";
import Login from "@/pages/Setting/Login.vue";

export default {
  components: { Login },
  props: {
    selectData: Object,
  },
  methods: {
    submit() {
      axios
        .delete(
          this.$store.state.dbUrl +
            "/home/mySchedule/" +
            this.selectData.key +
            ".json"
        )
        .then(() => {
          EventBus.$emit("getScheduleList");
          this.$emit("setIsInfo", false);
          useAlert.info("일정 보기", "일정가 삭제되었습니다.");
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@style";
[wrap] {
  width: 300px !important;
  left: calc(50% - 150px) !important;

  & > [wrap] {
    height: calc(100% - 40px) !important;
  }
}
[contents] {
  & > p {
    @include flex(flex-start, row, wrap);
    margin-bottom: 10px;
    font-size: 14px;
    &:last-of-type {
      margin-bottom: 0;
    }
    label {
      width: 46px;
    }
    span {
      width: calc(100% - 46px);
    }
    button {
      display: block;
      margin: 10px auto;
      font-size: 13px;
    }
  }
}
</style>
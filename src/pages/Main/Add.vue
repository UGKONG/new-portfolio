<template>
  <section modal>
    <div wrap :style="{ height: $store.state.admin ? '126px' : '248px' }">
      <h2>
        일정 추가
        <button @click="$emit('setIsAdd', false)">
          <i class="fas fa-times" />
        </button>
      </h2>

      <Login v-if="!$store.state.admin" />
      <div v-else contents>
        <p>
          <label for="title">내용 : </label>
          <input
            type="text"
            ref="title"
            id="title"
            v-model="title"
            @keydown="keydown"
          />
        </p>
        <p>
          <button @click="submit">저장</button>
        </p>
      </div>
    </div>
    <div bg @click="$emit('setIsAdd', false)" />
  </section>
</template>

<script>
import axios from "axios";
import { useSendValidation, useAlert } from "@/hook";
import Login from "../Setting/Login.vue";

export default {
  components: { Login },
  props: {
    selectDate: String,
  },
  data: () => ({
    title: "",
  }),
  methods: {
    submit() {
      let pass = useSendValidation([this.$refs.title], () => {
        useAlert.warn("일정 추가", "내용을 입력해주세요.");
      });
      if (!pass) return;
      let data = { text: this.title, date: this.selectDate };
      axios
        .post(this.$store.state.dbUrl + "/home/mySchedule.json", data)
        .then(({ data }) => {
          this.$emit("getList");
          this.$emit("setIsAdd", false);
          useAlert.success("일정 추가", "일정이 추가되었습니다.");
        });
    },
    keydown(e) {
      let keyCode = e.keyCode;
      keyCode == 13 && this.submit();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@style";
[wrap] {
  width: 300px !important;
  // height: 126px !important;
  left: calc(50% - 150px) !important;
  & > [wrap] {
    height: calc(100% - 40px) !important;
  }
}
[contents] {
  & > p {
    @include flex(flex-start, row, wrap);
    label {
      width: 46px;
      font-size: 14px;
    }
    input {
      width: calc(100% - 46px);
    }
    button {
      display: block;
      margin: 10px auto 0;
      font-size: 13px;
    }
  }
}
</style>
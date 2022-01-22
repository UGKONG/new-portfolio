<template>
  <div wrap>
    <i class="fas fa-user-lock" />
    <label for="adminPassword">관리자 암호입력</label>
    <input
      type="password"
      id="adminPassword"
      ref="adminPassword"
      v-model="password"
      @keydown="keydown"
    />
    <button @click="submit">인증</button>
  </div>
</template>

<script>
import { useAlert, usePwEncoding } from "@/hook";
import axios from "axios";
export default {
  data: () => ({
    password: "",
  }),
  mounted() {
    this.$refs.adminPassword.focus();
  },
  methods: {
    submit() {
      if (!this.password) return useAlert.warn("설정", "암호를 입력해주세요.");

      axios
        .get(this.$store.state.dbUrl + "/setting/adminPW.json")
        .then(({ data }) => {
          if (usePwEncoding(this.password) == data) {
            this.$store.dispatch("setAdmin", true);
            useAlert.success("설정", "관리자님 환영합니다.");
            return;
          }
          useAlert.warn("설정", "암호가 일치하지 않습니다.");
          this.password = "";
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
  @include wrap(flex);
  @include flex(center, column);

  i {
    @include font(30px, 700, $gray);
    margin-bottom: 10px;
  }

  label {
    @include font(18px, 700, $gray);
    padding-bottom: 20px;
  }

  button {
    margin-top: 20px;
  }
}
</style>
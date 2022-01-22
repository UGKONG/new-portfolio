<template>
  <section modal>
    <div wrap>
      <h2>
        단어 추가
        <button @click="$emit('setIsAdd', false)">
          <i class="fas fa-times" />
        </button>
      </h2>

      <Login v-if="!$store.state.admin" />
      <div v-else contents>
        <p>
          <label for="title">단어명 : </label>
          <input type="text" ref="title" id="title" v-model="title" />
        </p>
        <p>
          <label for="description">설명</label>
          <textarea ref="description" id="description" v-model="description" />
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
  data: () => ({
    title: "",
    description: "",
  }),
  methods: {
    submit() {
      let pass = useSendValidation(
        [this.$refs.title, this.$refs.description],
        () => {
          useAlert.warn("단어 추가", "빈칸 없이 입력해주세요.");
        }
      );
      if (!pass) return;
      let data = { title: this.title, contents: this.description };
      axios
        .post(this.$store.state.dbUrl + "/dictionary.json", data)
        .then(({ data }) => {
          this.$emit("getList");
          this.$emit("setIsAdd", false);
          useAlert.success("단어 추가", "단어가 추가되었습니다.");
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@style";
[wrap] {
  height: 386px !important;
  & > [wrap] {
    height: calc(100% - 40px) !important;
  }
}
[contents] {
  & > p {
    @include flex(flex-start, row, wrap);
    margin-bottom: 10px;
    &:last-of-type {
      margin-bottom: 0;
    }
    label {
      width: 60px;
      font-size: 14px;
      &[for="description"] {
        margin-bottom: 6px;
      }
    }
    input {
      width: calc(100% - 60px);
    }
    textarea {
      height: 200px;
    }
    button {
      display: block;
      margin: 10px auto;
      font-size: 13px;
    }
  }
}
</style>
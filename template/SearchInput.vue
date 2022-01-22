<template>
  <label>
    <i class="fas fa-search" />
    <input
      type="text"
      v-model="value"
      class="active"
      @focus="focus"
      @blur="blur"
      @keydown="keydown"
      placeholder="2자 이상 검색어 입력"
    />
    <button
      v-if="focusYN"
      v-text="'검색'"
      :title="title"
      :disabled="disabled"
      @click="click"
    />
  </label>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      focusYN: false,
    };
  },
  watch: {
    value() {
      this.$emit("setValue", this.trimValue);
    },
  },
  methods: {
    click() {
      if (this.disabled) return;
      this.$emit("search");
    },
    keydown(e) {
      let keyCode = e.keyCode;
      if (keyCode != 13) return;
      if (this.disabled) return;
      this.$emit("search");
    },
    focus() {
      this.focusYN = true;
    },
    blur() {
      if (this.value) return;
      this.focusYN = false;
    },
  },
  computed: {
    title() {
      return this.disabled ? "2자 이상 입력해주세요." : "";
    },
    disabled() {
      return this.value.length < 2;
    },
    trimValue() {
      return this.value.replaceAll(" ", "");
    },
  },
};
</script>

<style lang="scss" scoped>
label {
  height: 30px;
  display: block;
  position: relative;
  user-select: none;
  overflow: hidden;
  /* cursor: pointer; */

  i {
    color: #ccc;
    position: absolute;
    background-color: #fff;
    left: 6px;
    top: 50%;
    transform: translateY(-50%);
    &:hover {
      /* color: #aaa; */
    }
  }
  input {
    height: 100%;
    border: none;
    transition: 0.2s;
    padding: 0 6px;
    width: 30px;
    color: #fff;
    outline: none;
    border: 1px solid transparent;
    font-size: 13px;

    &:focus {
      border: 1px solid #ccc;
    }

    &.active {
      border-bottom: 1px solid #ddd;
      padding: 0 54px 0 30px;
      width: 250px;
      color: #555;
    }
  }

  button {
    position: absolute;
    background-color: transparent;
    color: #999;
    right: 0;
    top: 0;
    padding: 4px 6px;

    &:disabled {
      cursor: default;
      color: #bbb;
      &:hover {
        color: #bbb;
      }
    }
    &:hover {
      color: #777;
    }
    &:active {
      color: #444;
    }
  }
}
</style>
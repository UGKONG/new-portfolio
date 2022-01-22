<template>
  <li v-if="searchList">
    <h3>{{ item.title }}</h3>
    <div>{{ item.contents }}</div>
  </li>
</template>

<script>
import { useSearchText } from "../../hook";
export default {
  props: {
    item: Object,
    value: String,
  },
  computed: {
    searchList() {
      let tSearch =
        useSearchText(this.item.title).search(useSearchText(this.value)) > -1;
      let cSearch =
        useSearchText(this.item.contents).search(useSearchText(this.value)) >
        -1;

      return tSearch || cSearch ? true : false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@style";

li {
  background-color: #f9fffc;
  border: 1px solid #a9ded3;
  padding: 6px 10px;
  color: #2c986a;
  margin-bottom: 10px;
  border-radius: 6px;
  &:hover {
    background-color: #eefff7;
  }

  h3 {
    letter-spacing: 1px;
    font-size: 16px;
    font-weight: 700;
  }

  div {
    font-size: 14px;
    margin-top: 10px;
    color: $gray;
    padding-bottom: 2px;
  }
}
</style>
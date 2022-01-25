<template>
  <article :style="size">
    <h2>약력</h2>
    <ul>
      <li v-for="(item, i) in list" :key="i">
        <h3 v-text="item.date" />
        <p v-text="item.value" />
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  props: {
    data: Object,
    size: Object,
  },
  computed: {
    list() {
      let temp = [];
      let arr = { ...this.data };
      let keys = Object.keys(arr);
      keys.forEach((key) => temp.push(arr[key]));
      temp.sort((x, y) => Number(x.date) - Number(y.date));
      return temp;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@style";

article {
  height: calc(50% - 10px);
  margin-bottom: 10px;

  h2 {
    @include boxTitle();
  }
  ul {
    height: calc(100% - 64px);
    overflow: auto;

    li {
      margin-bottom: 15px;
      padding-right: 10px;

      h3 {
        @include font(15px, 700, $main);
        margin-bottom: 5px;
      }
      p {
        @include font(17px, 400, #777);
      }
    }
  }
}
</style>
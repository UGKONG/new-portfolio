<template>
  <article :style="size">
    <h2>보유기술</h2>
    <ul>
      <li v-for="(item, i) in data" :key="i" :style="{ color: item.color }">
        <h3 v-text="item.name" />
        <p
          v-text="item.description"
          :style="{
            color: item.color,
          }"
        />
      </li>
    </ul>
  </article>
</template>

<script>
import { useDelay } from "@/hook";
export default {
  props: {
    data: Object,
    size: Object,
  },
  created() {},
  methods: {},
  computed: {},
};
</script>

<style lang="scss" scoped>
@import "@style";

article {
  height: calc(50% - 10px);
  margin-top: 10px;

  h2 {
    @include boxTitle();
  }
  ul {
    height: calc(100% - 64px);
    overflow: auto;

    li {
      @include flex(flex-start, row, wrap);
      align-items: flex-start;
      margin-bottom: 20px;
      padding-right: 10px;

      & > h3 {
        @include flex(flex-start);
        @include font(20px, 700, inherit);
        width: 100%;
        margin-bottom: 3px;
      }
      & > p {
        @include font(15px, 500);
        width: calc(100% - 120px);
        align-self: stretch;
      }
    }
  }
}
</style>
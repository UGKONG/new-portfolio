<template>
  <article :style="size">
    <h2>보유기술</h2>
  </article>
</template>

<script>
export default {
  props: {
    data: Object,
    size: Object,
  },
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
}
</style>
<template>
  <article :style="size">
    <h2>기본 정보</h2>
    <div img :style="img" />
    <div text>
      <div>
        <h3>생년월일</h3>
        <span v-text="data.birth" />
      </div>
      <div>
        <h3>연락처</h3>
        <span v-text="data.phone" />
      </div>
      <div>
        <h3>이메일</h3>
        <span v-text="data.email" />
      </div>
      <div>
        <h3>주소</h3>
        <span v-text="data.address" />
      </div>
      <div>
        <h3>SNS</h3>
        <ul>
          <li>velog</li>
          <li>git</li>
          <li>mail</li>
        </ul>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    data: Object,
    size: Object,
  },
  computed: {
    img() {
      return { backgroundImage: "url(" + this.data.img + ")" };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@style";
article {
  height: 100%;
  margin-right: 20px;

  h2 {
    @include boxTitle();
  }

  [img] {
    @include background-reset(cover);
    @include size(222px, 222px);
    @include border(1px solid $whiteGray, 50%);
    margin: 0 auto 30px;
  }

  [text] {
    & > div {
      padding: 10px 0;
      text-align: center;
      margin-bottom: 4px;

      h3 {
        @include font(13px, 700, $main, 1px);
        margin-bottom: 10px;
      }
      span {
        @include font(16px, 700, #999);
      }
      ul {
        @include flex(center);

        li {
          @include size(36px, 36px);
          @include border(1px solid $whiteGray, 50%);
          @include background-reset(cover);
          @include flex(center);
          @include font(11px, 400, $gray);
          margin: 0 4px;
        }
      }
    }
  }
}
</style>
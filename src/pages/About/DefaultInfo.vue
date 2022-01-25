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
          <li v-for="(item, i) in iconList" :key="i">
            <a
              :href="item.url"
              target="new"
              :style="{ backgroundImage: 'url(' + item.icon + ')' }"
            />
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>

<script>
import velog from "@/../public/images/icon/velog.png";
import git from "@/../public/images/icon/git.png";
import mail from "@/../public/images/icon/mail.png";

export default {
  props: {
    data: Object,
    size: Object,
  },
  data: () => ({}),
  computed: {
    img() {
      return { backgroundImage: "url(" + this.data.img + ")" };
    },
    iconList() {
      return [
        { icon: velog, url: "https://velog.io/@jsw9330" },
        { icon: git, url: "https://github.com/UGKONG" },
        { icon: mail, url: "mailto:jsw9330@icloud.com" },
      ];
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
    height: calc(100% - 64px - 222px - 30px);
    overflow: auto;

    & > div {
      padding: 10px 0;
      text-align: center;
      margin-bottom: 3px;

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
          @include flex(center);
          margin: 0 4px;
          overflow: hidden;

          & > a {
            @include wrap(block);
            @include background-reset(cover);
            transform: scale(1.1);
          }

          &:hover {
            box-shadow: 0 0 3px $gray;
          }
        }
      }
    }
  }
}
</style>
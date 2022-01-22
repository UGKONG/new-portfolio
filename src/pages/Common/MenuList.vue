<template>
  <li>
    <router-link :to="item.link" active-class="active" exact>
      <i :class="item.icon" />
      <span>{{ item.name }}</span>
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  computed: {
    
  },
}
</script>

<style lang="scss" scoped>
li {
  position: relative;
  &:hover {
    text-shadow: 0px 0px 2px #fff;
  }

  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 45px;
    text-align: left;
    padding: 0 14px;
    background-color: transparent;
    border-radius: 1000px;
    border: none;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 1px;
    transition: .1s;
    i {
      font-size: 20px;
      display: inline-block;
      width: 34px;
      height: 26px;
      margin-right: 5px;
      color: #e1e2c7;
      text-align: center;
      transform: translateY(1px);
    }
    span {
      font-family: 'Baloo Tammudu 2',cursive;
      display: flex;
      align-items: center;
      padding-top: 5px;
    }
  }


  a.active {
    background-color: #fff;
    color: #288462;
    font-weight: 700;
    box-shadow: 1px 2px 3px #00000020;
    span {
      padding-top: 7px;
    }
    i {
      color: #338f6c;
      padding-top: 1px;
    }
  }

}
</style>
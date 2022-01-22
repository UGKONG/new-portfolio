<template>
  <aside>
    <h1>{{ pageName }}</h1>
    <ul main>
      <MenuList v-for="(item, idx) in mainMenus"
        :key="idx" :item="item"
      />
    </ul>
    <ul sub>
      <MenuList v-for="(item, idx) in subMenus"
        :key="idx" :item="item"
      />
    </ul>
  </aside>
</template>

<script>
import MenuList from './MenuList';
export default {
  components: {
    MenuList
  },
  computed: {
    pageName() {
      return this.$store.state.titleName.page;
    },
    mainMenus () {
      return this.$store.state.menus.main;
    },
    subMenus () {
      return this.$store.state.menus.sub;
    },
  },
}
</script>

<style lang="scss" scoped>
aside {
  width: 200px;
  height: 100%;
  color: #fff;
  float: left;
  padding: 10px 20px 10px 10px;
}
h1 {
  height: 50px;
  font-size: 20px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  letter-spacing: 1px;
  white-space: nowrap;
  margin-bottom: 30px;
  border-bottom: 1px solid #eeeeee50;
  font-family: 'Baloo Tammudu 2', cursive;
}
ul[sub] {
  padding-top: 16px;
  margin-top: 16px;
  position: relative;
  border-top: 1px solid #eeeeee50;
}
</style>
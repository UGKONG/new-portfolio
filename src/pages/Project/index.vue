<template>
  <section>
    <header>
      <h2>Project Page</h2>
      <SearchInput @setValue="setValue" />
    </header>
    <main>
      <Loading></Loading>
    </main>
  </section>
</template>

<script>
import SearchInput from '@/../template/SearchInput';
import Loading from '../Common/Loading';
export default {
  components: {
    SearchInput,
    Loading
  },
  data() {
    return {
      searchValue: '',
    }
  },
  methods: {
    setValue(val) {this.searchValue = val},
  }
}
</script>

<style lang="scss" scoped>

</style>
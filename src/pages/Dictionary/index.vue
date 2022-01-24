<template>
  <section>
    <Loading v-if="isLoad" />
    <header v-if="!isLoad">
      <h2>Dictionary Page</h2>
      <span>
        <SearchInput @setValue="setValue" />
        <button @click="setIsAdd(true)">
          <i class="fas fa-plus" />
        </button>
      </span>
    </header>
    <main v-if="!isLoad">
      <p v-if="value != ''">검색어: {{ value }}</p>
      <ul>
        <DictionaryLi
          v-for="(item, idx) in list"
          :key="idx"
          :item="item"
          :value="value"
        />
      </ul>
    </main>

    <!-- Modal -->
    <transition name="fade-transition">
      <Add v-if="isAdd" @getList="getList" @setIsAdd="setIsAdd" />
    </transition>
  </section>
</template>

<script>
import axios from "axios";
import SearchInput from "@/../template/SearchInput";
import DictionaryLi from "./DictionaryLi";
import Add from "@/pages/Dictionary/Add";
import Loading from "@/pages/Common/Loading";

export default {
  components: {
    Loading,
    SearchInput,
    DictionaryLi,
    Add,
  },
  data() {
    return {
      value: "",
      list: [],
      isAdd: false,
      isLoad: true,
    };
  },
  created() {
    this.getList();
  },
  methods: {
    setIsAdd(val) {
      this.isAdd = val;
    },
    setValue(val) {
      this.value = val;
    },
    getList() {
      axios
        .get(this.$store.state.dbUrl + "/dictionary.json")
        .then(({ data }) => {
          this.list = data;
          this.isLoad = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@style";

header button {
  @include flex(center);
  align-self: flex-start;
  margin-left: 10px;
  width: 32px;
  height: 32px;
  padding: 0 !important;
  background-color: $main;
  color: $white;
  i {
    transform: translate(1px, 1px);
  }
  &:hover {
    color: $white !important;
    background-color: #318364 !important;
  }
}
main > p {
  font-size: 12px;
  padding-bottom: 10px;
  color: #777;
}
</style>
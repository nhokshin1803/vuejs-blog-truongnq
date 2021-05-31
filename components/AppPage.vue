<template>
  <div class="row app-page" style="margin: 0, padding: 0, width: 100%">
    <BlogSearch v-bind:searchKey="searchKey" @changeSearch="changeSearch" v-show="show"></BlogSearch>
    <BlogList></BlogList>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
import BlogSearch from "../components/BlogSearch"
import BlogList from "../components/BlogList"
export default {
  props: {
    show: false
  },

  components: {
    BlogSearch,
    BlogList
  },

  data() {
    return {
      searchKey: "",
    };

  },
  methods: {
    changeSearch: function() {
      console.log(this.searchKey);
    }
  }

}
</script>
<style>
.app-page {
  position: relative;
  left: 16.66667%;
  top: 3rem;
  width: 83.3333%;
  height: 100%;
  margin: 0 !important;
  padding: 1rem 1rem 4rem 1rem !important;
  background-color: #e4e5e6;
}
</style>

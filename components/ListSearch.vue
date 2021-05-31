<template>
  <div class="row list-search" style="margin: 0, padding: 0, width: 100%">
    <BlogSearch :searchKey="searchKey" @searchKeyChanged="searchKey = $event" v-show="show"></BlogSearch>
    <BlogList :postList="postList"></BlogList>
  </div>
</template>
<script>
import axios from "axios";
import BlogSearch from "../components/BlogSearch"
import BlogList from "../components/BlogList"
export default {
  watch: {
    searchKey: function() {
      axios.get("http://localhost:3000/blogs?title_like=" + this.searchKey).then(resp => {
         this.postList = resp.data;
      });
    }
  },
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
      postList: new Array()
    };

  },

  mounted() {
    axios.get("http://localhost:3000/blogs").then(resp => {
         this.postList = resp.data;
    });
  }

}
</script>
<style>
.list-search {
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

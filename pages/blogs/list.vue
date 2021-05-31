<template>
  <div class="container vue-page">
    <div class="row list-search" style="margin: 0, padding: 0, width: 100%">
      <BlogList></BlogList>
    </div>
  </div>
</template>

<script>
import BlogList from "../../components/page/BlogList";
export default {
  components: {
    BlogList
  }

};
</script>

<style>
.vue-page {
  margin: 0;
  padding: 0;
  min-width: 100%;
}

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

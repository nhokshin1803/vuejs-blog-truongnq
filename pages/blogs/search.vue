<template>
  <div class="container vue-page">
    <AppHeader></AppHeader>
    <AppMenu></AppMenu>
    <ListSearch :show="true"></ListSearch>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppFooter from "../../components/layouts/AppFooter.vue";
import AppMenu from "../../components/layouts/AppMenu.vue";
import AppHeader from "../../components/layouts/AppHeader.vue";
import BlogList from "../../components/BlogList.vue";
import ListSearch from "../../components/ListSearch.vue";
export default {
  components: {
    AppMenu,
    AppFooter,
    BlogList,
    AppHeader,
    ListSearch
  },
};
</script>

<style>
.vue-page {
  margin: 0;
  padding: 0;
  min-width: 100%;
}

</style>

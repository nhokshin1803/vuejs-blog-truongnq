<template>
  <div class="container vue-page">
    <AppHeader></AppHeader>
    <AppMenu></AppMenu>
    <AppPage :show="true"></AppPage>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppFooter from "../components/AppFooter.vue";
import AppMenu from "../components/AppMenu.vue";
import AppHeader from "../components/AppHeader.vue";
import BlogList from "../components/BlogList.vue";
import AppPage from "../components/AppPage.vue";
export default {
  components: {
    AppMenu,
    AppFooter,
    BlogList,
    AppHeader,
    AppPage
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

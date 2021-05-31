<template>
  <div class="container vue-page">
    <AppHeader></AppHeader>
    <AppMenu></AppMenu>
    <div class="background">
      <div>
        <h5>Edit Blogs</h5>
      </div>
      <NewBlog :paramId="paramId"></NewBlog>
    </div>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppFooter from "../../components/AppFooter.vue";
import AppMenu from "../../components/AppMenu.vue";
import AppHeader from "../../components/AppHeader.vue";
import AppPage from "../../components/AppPage.vue";
import NewBlog from "../../components/NewBlog.vue";

export default {
  data () {
    return {
      paramId: this.$route.params.id
    }
  },
  components: {
    AppMenu,
    AppFooter,
    AppHeader,
    AppPage,
    NewBlog
  },
};
</script>

<style>
.vue-page {
  margin: 0;
  padding: 0;
  min-width: 100%;
}
.app-page {
  height: 100%;
}

.background {
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

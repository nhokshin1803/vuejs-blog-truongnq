<template>
  <div class="container vue-page">
    <ListSearch :show="false"></ListSearch>
  </div>
</template>

<script>
import ListSearch from "../../components/ListSearch.vue";
export default {
  components: {
    ListSearch
  }

};
</script>

<style>
.vue-page {
  margin: 0;
  padding: 0;
  min-width: 100%;
}

</style>

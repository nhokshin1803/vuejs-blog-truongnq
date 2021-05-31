<template>
  <div class="card blog-search">
    <div class="card-header">
      <h5>Search Blogs</h5>
    </div>
    <div class="card-body" style="padding: 0">
      <div class="row input-search form-group">
        <div class="col-1"><label for="inputSearch">Title:</label></div>
        <div class="col-11">
          <input
            type="text"
            placeholder="Search"
            id="inputSearch"
            class="form-control"
            v-model="searchKey"
          />
        </div>
      </div>
      <div class="btn-search d-flex justify-content-center">
        <button @click="search">Search</button>
      </div>
    </div>
  </div>
</template>

<script>
import BlogList from "../components/BlogList";
export default {
  data () {
    return {
      searchKey: ""
    }
  },
  components: {
    BlogList
  },
  methods: {
    search: function() {
      this.$root.$emit('change_search', this.searchKey);
    }
  }
};
</script>
<style>
.blog-search {
  margin: 0 0 1rem 0;
  padding: 0;
  position: relative;
  width: 100%;
}

.card-header {
  padding: 0;
  height: 2.5rem;
  line-height: 2.5rem;
}

.card-header h5 {
  line-height: 2.2rem;
  margin-left: 0.5rem;
}

.input-search {
  padding: 0.75rem 0.75rem 0 0.75rem;
}

.input-search label {
  line-height: 2.2rem;
}

.btn-search {
  padding: 0 0.75rem 0.75rem 0.75rem;
}

.btn-search button {
  background-color: #fff;
  border: 2px solid #addab5;
  color: #addab5;
  font-weight: 600;
}

.card-body span {
  line-height: 2.5rem;
}
</style>

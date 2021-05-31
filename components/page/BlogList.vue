<template>
    <div class="card blog-list">
      <div class="card-header">
        <h5>List Blog</h5>
      </div>
      <div class="card-body" style="padding: 0">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Tin</th>
              <th scope="col">Loại</th>
              <th scope="col">Trạng Thái</th>
              <th scope="col">Vị trí</th>
              <th scope="col">Ngày public</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="post in postList" v-bind:key="post.id">
              <td>{{ post.id }}</td>
              <td style="max-width: 200px">{{ post.title }}</td>
              <td>{{ getCategory(post.category) }}</td>
              <td style="min-width: 40px">{{ isPublic(post.public) }}</td>
              <td>
                <span>{{ getPosition(post.position) }}</span>
              </td>
              <td>{{ post.data_pubblic }}</td>
              <td>

                <nuxt-link :to="`/blogs/${post.id}`" class="nuxt-link">
                  <button class="btn-outline-success d-flex justify-content-center rounded">
                    Edit
                  </button>
                </nuxt-link>
              </td>
              <td>
                <button class="btn-outline-danger d-flex justify-content-center rounded" @click="deletePost(post.id)">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<script>
import { CATEGORIES } from "../../constants";
import { POSITIONS } from "../../constants";
export default {
  data() {
    return {
      postList: [],
      positions: [],
      public: Boolean,
      searchKey: ''
    };
  },
  methods: {
    getPosition: function(positionArr) {
      positionArr.forEach(position =>
        this.positions.push(POSITIONS[position-1])
      );
      var outputPosition = this.positions.join(", ");
      this.positions = [];
      return outputPosition;
    },

    getCategory: function(number) {
      return CATEGORIES[number];
    },

    isPublic: function(isPublic) {
      return isPublic ? "Yes" : "No";
    },

    deletePost: function(id) {
      this.$axios.delete(baseURL +"/" + id);
      location.reload();
    }
  },

  mounted() {
    this.$axios.get('blogs/').then(resp => {
      this.postList = resp.data;
    });
    this.$root.$on('change_search', (searchKey) => {
      this.$axios.get("blogs?title_like=" + searchKey).then(resp => {
          this.postList = resp.data;
      });
    });
  },

};
</script>
<style>

button {
  height: 2.25rem;
  line-height: 2rem;
  background-color: #fff;
}

.blog-list {
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

th,
td {
  text-align: center;
  justify-content: center;
}

.nuxt-link:hover {
  text-decoration: none;
}

</style>

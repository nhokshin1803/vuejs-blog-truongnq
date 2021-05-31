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
            <tr v-for="item in list" v-bind:key="item.id">
              <td>{{ item.id }}</td>
              <td style="max-width: 200px">{{ item.title }}</td>
              <td>{{ getCategory(item.category) }}</td>
              <td style="min-width: 40px">{{ isPublic(item.public) }}</td>
              <td>
                <span>{{ getPosition(item.position) }}</span>
              </td>
              <td>{{ item.data_pubblic }}</td>
              <td>
                <nuxt-link :to="`/posts/${item.id}`" class="btn-edit d-flex justify-content-center">
                  Edit
                </nuxt-link>
              </td>
              <td>
                <button class="btn-delete" @click="deletePost(item.id)">
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
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
export default {
  data() {
    return {
      list: [],
      positions: [],
      categories: [
        "Kinh Doanh",
        "Giải Trí",
        "Tiền Tệ",
        "Thời Sự",
        "Thế Giới",
        "Khoa Học",
        "Drama",
        "Hàng Không",
        "Vũ Trụ",
        "Chứng Khoán",
        "Chính Trị",
        "Thể Thao",
        "Điện Ảnh"
      ],
      public: Boolean
    };
  },
  mounted() {
    Vue.axios.get("http://localhost:3000/blogs").then(resp => {
      this.list = resp.data;
    });
    this.$root.$on('change_search', (searchKey) => {
      Vue.axios.get("http://localhost:3000/blogs?title_like=" + searchKey).then(resp => {
        this.list = resp.data;
      });
    });
  },
  methods: {
    getPosition: function(array) {
      if (array.includes(2)) this.positions.push("Việt Nam");
      if (array.includes(1)) this.positions.push("Châu Á");
      if (array.includes(3)) this.positions.push("Châu Âu");
      if (array.includes(4)) this.positions.push("Châu Mỹ");
      var outputPosition = this.positions.join(", ");
      this.positions = [];
      return outputPosition;
    },

    getCategory: function(number) {
      return this.categories[number];
    },

    deletePost: function(id) {
      Vue.axios.delete("http://localhost:3000/blogs/" + id);
      location.reload();
    },

    isPublic: function(isPublic) {
      return isPublic ? "Yes" : "No";
    }
  },
};
</script>
<style>
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

.btn-edit {
  background-color: #fff;
  border: 2px solid #addab5;
  color: #addab5;
  font-weight: 600;
}
.btn-delete {
  background-color: #fff;
  border: 2px solid #f3c2c5;
  color: #f3c2c5;
  font-weight: 600;
}
</style>

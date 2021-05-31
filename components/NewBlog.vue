<template>
  <div class="card new-blog">
    <div class="card-body">
      <div v-if="errors.length" class="bg-danger pl-2 pr-2 pt-2 pb-1">
        <p v-for="error in errors" :key="error">
          {{ error }}
        </p>
      </div>

      <form>
        <div class="form-group">
          <label for="headerInput">Tiêu đề</label>
          <input
            type="text"
            class="form-control"
            id="headerInput"
            v-model="blog.title"
          />
        </div>
        <div class="form-group">
          <label for="aboutInput">Mô tả ngắn:</label>
          <textarea
            rows="4"
            class="form-control"
            id="aboutInput"
            v-model="blog.des"
          />
        </div>
        <div class="form-group">
          <label for="detailInput">Chi tiết:</label>
          <textarea
            rows="8"
            class="form-control"
            id="detailInput"
            v-model="blog.detail"
          />
        </div>
        <div class="form-group">
          <label for="imageInput">Hình ảnh:</label><br />
          <input type="file" id="imageInput" />
        </div>
        <div class="form-group">
          <label>Vị trí:</label><br />
          <input type="checkbox" id="2" value=2 v-model="blog.position" />
          <label for="2">Việt Nam</label>
          <input type="checkbox" id="1" value=1 v-model="blog.position" />
          <label for="1">Châu Á</label>
          <input type="checkbox" id="3" value=3 v-model="blog.position" />
          <label for="3">Châu Âu</label>
          <input type="checkbox" id="4" value=4 v-model="blog.position" />
          <label for="4">Châu Mỹ</label>
        </div>
        <div class="form-group">
          <label for="publicSelect">Public:</label><br />
          <input
            type="radio"
            id="yes"
            name="public"
            value="true"
            v-model="blog.public"
          />
          <label for="yes">Yes</label>
          <input
            type="radio"
            id="no"
            name="public"
            value="false"
            v-model="blog.public"
          />
          <label for="no">No</label><br />
        </div>
        <div class="form-group row">
          <div class="col-6">
            <label for="type">Loại:</label><br />
            <select class="form-control" id="type" v-model="blog.category">
              <option value="1">Kinh doanh</option>
              <option value="2">Giải Trí</option>
              <option value="3">Tiền Tệ</option>
              <option value="4">Thời Sự</option>
              <option value="5">Thế Giới</option>
              <option value="6">Khoa học</option>
              <option value="7">Drama</option>
              <option value="8">Hàng Không</option>
              <option value="9">Vũ Trụ</option>
              <option value="10">Chứng Khoán</option>
              <option value="11">Chính Trị</option>
              <option value="12">Thể Thao</option>
              <option value="13">Điện Ảnh</option>
            </select>
          </div>
          <div class="col-6">
            <label for="datePublic">Date Public:</label><br />
            <input
              type="date"
              id="datePublic"
              class="date-public"
              v-model="blog.data_pubblic"
            />
          </div>
        </div>
      </form>
    </div>
    <div class="card-footer d-flex justify-content-center">
      <button @click="createEditPost" class="btn-submit">Submit</button>&nbsp;
      <button class="btn-clear" @click="resetPage">Clear</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    paramId: 0
  },
  data() {
    return {
      blog: {
        title: null,
        des: null,
        detail: null,
        image: "",
        position: new Array(),
        public: Boolean,
        category: Number,
        data_pubblic: Date.now()
      },
      isEdit: false,
      errors: []
    };
  },

  mounted() {
    axios.get("http://localhost:3000/blogs/" + this.paramId).then(resp => {
      this.blog = resp.data;
      this.isEdit = true;
    });
    return this.blog;
  },
  methods: {
    resetPage: function() {
      var isReset = confirm("Are you sure to refresh page?");
      if (isReset) {
        location.reload();
      }
    },

    checkForm: function(errorCount) {
      this.errors = [];
      errorCount = 0;
      if(!this.blog.title) {
        this.errors.push('Title required');
        errorCount++;
      }
      if(!this.blog.des) {
        this.errors.push('Description required');
        errorCount++;
      }
      if(!this.blog.detail) {
        this.errors.push('Detail required');
        errorCount++;
      }
      if(!this.blog.position) {
        this.errors.push('Position required');
        errorCount++;
      }
    },

    createEditPost: function() {
      this.blog.position = this.blog.position.map(x=>parseInt(x));
      if (this.isEdit) {
        let confirmer = confirm("Are you sure to edit this post?");
        if (confirmer) {
          Vue.axios.put(
            "http://localhost:3000/blogs/" + this.paramId,
            this.blog
          );
          this.$router.push('/');
        }
      } else {
        let errorCount = 0;
        this.checkForm(errorCount);
        if(errorCount == 0) {
          let confirmation = confirm("Are you sure to submit?");
          if (confirmation) {
          Vue.axios.post("http://localhost:3000/blogs/", this.blog);
          this.blog.position = [];
          this.$router.push('/');
          }
        }
        else {
          window.scrollTo(0, 0);
        }
      }
    },

    saveImage: function(event) {
      this.blog.image = event.target.files;
    }
  }
};
</script>
<style>
.background {
  background-color: #e4e5e6;
}

.date-public {
  width: 100%;
  height: 2.3rem;
  margin-left: 4px;
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

.card-footer {
  background-color: #e4e5e6;
  height: 4rem;
}
.card-footer button {
  border: none;
  color: #fff;
  border-radius: 4px;
  height: 2rem;
  line-height: 2rem;
  margin: auto 0;
}
.btn-submit {
  background-color: #2aa744;
}

.btn-clear {
  background-color: #017cff;
}
</style>


<template>
  <div class="card new-blog">
    <div class="card-body">
      <form>
        <div class="form-group">
          <label for="headerInput">Tiêu đề</label>
          <input
            type="text"
            class="form-control"
            id="headerInput"
            name="title"
            v-model="blog.title"
            v-validate="'required|title'"
          />
        </div>
        <div class="form-group">
          <label for="aboutInput">Mô tả ngắn:</label>
          <textarea
            rows="4"
            class="form-control"
            id="aboutInput"
            name="des"
            v-model="blog.des"
            v-validate="'required|des'"
          />
        </div>
        <div class="form-group">
          <label for="detailInput">Chi tiết:</label>
          <textarea
            rows="8"
            class="form-control"
            id="detailInput"
            name="detail"
            v-model="blog.detail"
            v-validate="'required|detail'"
          />
        </div>
        <div class="form-group">
          <label for="imageInput">Hình ảnh:</label><br />
          <input type="file" id="imageInput" />
        </div>
        <div class="form-group">
          <label>Vị trí:</label><br />
          <input type="checkbox" id="2" value=2 v-model="blog.position" />
          <label for="1">Việt Nam</label>
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
              <option v-for="category in CATEGORIES" :key="category">{{category}}</option>
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
export default {
  watch: {
  },
  props: {
    paramId: 0
  },
  data() {
    return {
      blog: {
        title: '',
        des: null,
        detail: null,
        image: "",
        position: [],
        public: false,
        category: null,
        data_pubblic: Date.now()
      }
    };
  },

  mounted() {
    this.$axios.get("http://localhost:3000/blogs/" + this.paramId).then(resp => {
      this.blog = resp.data;
      this.isEdit = true;
    });
    return this.blog;
  },
  methods: {
    createPost: function() {
      let confirmation = confirm("Are you sure to submit?");
      if (confirmation) {
      this.$axios.post("http://localhost:3000/blogs/", this.blog);
      this.blog.position = [];
      this.$router.push('/');
      }
    },

    editPost: function() {
      let confirmer = confirm("Are you sure to edit this post?");
        if (confirmer) {
          this.$axios.put(
            "http://localhost:3000/blogs/" + this.paramId,
            this.blog
          );
          this.$router.push('/');
        }
    },

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

      return errorCount;
    },
    createEditPost: function() {
      this.blog.position = this.blog.position.map(x=>parseInt(x));
      if (this.paramId != 0) {
        this.editPost();
      } else {
        let errorCount = this.checkForm(errorCount);
        if(errorCount == 0) {
          this.createPost();
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


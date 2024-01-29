<template>
  <div class="id_page_container" v-if="data">
    <div class="id__item">
      <span class="id__item__name">
        Title
      </span>
      <div class="id__item__edit">
        <span v-if="!editFlag">{{checkData(editValues.length, data.title, editValues.title)}}</span>
        <BaseInput v-else v-model="editValues.title" :type="inputType" :placeholder="placeholder"  />
      </div>
    </div>
    <div class="id__item">
      <span class="id__item__name">
        Body
      </span>
      <div class="id__item__edit">
        <span v-if="!editFlag">{{checkData(editValues.length, data.body, editValues.body)}}</span>
        <BaseInput v-else v-model="editValues.body" :type="inputType" :placeholder="placeholder"  />
      </div>
    </div>
    <BaseButton :nameBtn="editFlag ? saveBtn : editBtn"
                @click="handleSave"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data:null,
      editFlag:false,
      inputType:'text',
      placeholder:'Edit..',
      editBtn: 'Edit',
      saveBtn: 'Save',
      editValues: {
        title:'',
        body:'',
      }
    }
  },
  asyncData({params}) {
    const postId = params.id;
    return {
      post: {
        id: postId,
      },
    };
  },
  async created() {
    await this.getValue();
  },
  methods: {
    async getValue() {
      await this.$api.$get(`/posts/${this.post.id}`)
        .then(res => this.data = res)
    },
    editUser() {
      this.editFlag = true
      this.editValues.title = this.data?.title
      this.editValues.body = this.data?.body
    },
    async saveUser(id) {
      await this.$api.$put(`/posts/${id}`, this.editValues)
        .then(res => {
          this.data = res
          this.editFlag = !this.editFlag
        })
    },
    handleSave() {
      !this.editFlag ? this.editUser() : this.saveUser(this.post.id)
    },
    checkData(length, dataValue, editValue) {
      return !length ? dataValue : editValue
    }
  }
}
</script>

<style scoped>
</style>

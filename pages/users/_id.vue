<template>
  <div class="id_page_container" v-if="data">
    <div class="id__item">
      <span class="id__item__name">
        Username
      </span>
      <div class="id__item__edit">
        <span v-if="!editFlag">{{checkData(editValues.length, data.username, editValues.username)}}</span>
        <BaseInput v-else v-model="editValues.username" :type="inputType" :placeholder="placeholder"  />
      </div>
    </div>
    <div class="id__item">
      <span class="id__item__name">
        Email
      </span>
      <div class="id__item__edit">
        <span v-if="!editFlag">{{checkData(editValues.length, data.email, editValues.email)}}</span>
        <BaseInput v-else v-model="editValues.email" :type="inputType" :placeholder="placeholder"  />
      </div>
    </div>
    <div class="id__item">
      <span class="id__item__name">
        Password
      </span>
      <div class="id__item__edit">
        <span v-if="!editFlag">{{checkData(editValues.length, data.password, editValues.password)}}</span>
        <BaseInput v-else v-model="editValues.password" :type="inputType" :placeholder="placeholder"  />
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
        username:'',
        email:'',
        password:'',
      }
    }
  },
  asyncData({params}) {
    const userId = params.id;
    return {
      user: {
        id: userId,
      },
    };
  },
  async created() {
    await this.getValue();
  },
  methods: {
    async getValue() {
      await this.$api.$get(`/users/${this.user.id}`)
        .then(res => this.data = res)
    },
    editUser() {
      this.editFlag = true
      this.editValues.username = this.data?.username
      this.editValues.email = this.data?.email
      this.editValues.password = this.data?.password
    },
    async saveUser(id) {
      await this.$api.$put(`/users/${id}`, this.editValues)
        .then(res => {
          this.data = res
          this.editFlag = !this.editFlag
        })
        .then((res) => console.log(res))
    },
    handleSave() {
      !this.editFlag ? this.editUser() : this.saveUser(this.user.id)
    },
    checkData(length, dataValue, editValue) {
      return !length ? dataValue : editValue
    }
  }
}
</script>

<style scoped>

</style>

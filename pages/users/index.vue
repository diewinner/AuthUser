<template>
  <div v-if="usersNew" class="page_container">
    <SearchForm :pageName="pageName" @searchItems="searchItems($event)"/>
    <CustomTable  :theadArr="thead" :list="usersNew">
      <template v-slot:extraBtn="slotProps">
        <div class="table_btn">
          <BaseButton @click="deleteItem(slotProps.unit?.id)" :nameBtn="deleteBtn"/>
        </div>
      </template>
      <template v-slot:extraBtnSec="slotProps">
        <div class="table_btn">
          <nuxt-link :to="`/users/${slotProps.unit?.id}`" :params="{id:slotProps.unit?.id}">
            <BaseButton :nameBtn="detailBtn"/>
          </nuxt-link>
        </div>
      </template>
    </CustomTable>
  </div>
</template>

<script>
export default {
  name:'users',
  layout:'authUser',
  data() {
    return {
      pageName:'users',
      deleteBtn:'delete',
      detailBtn:'detail',
      deletedItem:null,
      users: null,
      usersNew: null,
      filterUsers: null,
      thead: ['ID', 'Username', 'Email', 'Password', 'Age','','']
    }
  },
  async mounted() {
    await this.getData()
  },
  methods: {
    async getData() {
      if(!this.usersNew) {
        await this.$api.$get(`/users`)
          .then(res => {
            this.users = res?.users
            this.usersNew = this.users.map((item) => {
              return {
                id: item.id,
                username: item.username,
                email: item.email,
                password: item.password,
                age: item.age
              }
            })
          })
          .catch(e => console.log(e))
      }
    },
    async deleteItem(id) {
      await this.$api.$delete(`/users/${id}`)
        .then(res => {
          this.filterUsers = this.usersNew.filter(item => {
            return item.id !== res?.id
          })
          this.usersNew = this.filterUsers.map(item => {
            return {
              id: item.id,
              username: item.username,
              email: item.email,
              password: item.password,
              age: item.age
            }
          })
        })
        .catch(e => console.log(e))
    },
    async searchItems(value) {
      this.usersNew = value?.users.map((item) => {
        return {
          id: item.id,
          username: item.username,
          email: item.email,
          password: item.password,
          age: item.age
        }
      });
    }
  }
}
</script>

<style scoped>


</style>

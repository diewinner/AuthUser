<template>
  <div class="page_container">
    <SearchForm :pageName="pageName" @searchItems="searchItems($event)"/>
    <CustomTable v-if="postsNew" :theadArr="thead" :list="postsNew">
      <template v-slot:extraBtn="slotProps">
        <div class="table_btn">
          <BaseButton @click="deleteItem(slotProps.unit?.id)" :nameBtn="deleteBtn"/>
        </div>
      </template>
      <template v-slot:extraBtnSec="slotProps">
        <div class="table_btn">
          <nuxt-link :to="`/posts/${slotProps.unit?.id}`" :params="{id:slotProps.unit?.id}">
            <BaseButton :nameBtn="detailBtn"/>
          </nuxt-link>
        </div>
      </template>
    </CustomTable>
  </div>
</template>


<script>
export default {
  name:'posts',
  layout:'authUser',
  data() {
    return {
      pageName:'posts',
      posts: null,
      postsNew: null,
      filterPosts:null,
      detailBtn:'detail',
      deleteBtn:'delete',
      thead: ['ID', 'Title', 'Body', 'UserId','','']
    }
  },
  async mounted() {
    await this.getData()
  },
  methods: {
    async getData() {
      await this.$api.$get(`/posts`)
        .then(res => {
          this.posts = res?.posts
          this.postsNew = this.posts.map((item) => {
            return {
              id: item.id,
              title: item.title,
              body: item.body,
              userId: item.userId,
            }
          })
        })
        .catch(e => console.log(e))
    },
    async deleteItem(id) {
      await this.$api.$delete(`/posts/${id}`)
        .then(res => {
          this.filterPosts = this.postsNew.filter(item => {
            return item.id !== res?.id
          })
          this.postsNew = this.filterPosts.map(item => {
            return {
              id: item.id,
              title: item.title,
              body: item.body,
              userId: item.userId,
            }
          })
        })
        .catch(e => console.log(e))
    },
    async searchItems(value) {
       this.postsNew = await value?.posts.map((item) => {
        return {
          id: item.id,
          title: item.title,
          body: item.body,
          userId: item.userId,
        }
      })
    }
  }
}
</script>

<style scoped>

</style>

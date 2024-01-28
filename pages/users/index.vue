<template>
  <div class="posts">
    <CustomTable v-if="postsNew" :theadArr="thead" :list="postsNew"/>
  </div>
</template>

<script>

export default {
  data() {
    return {
      posts: null,
      postsNew: null,
      thead: ['ID', 'Username', 'Email', 'Password', 'Age']
    }
  },
  async mounted() {
    await this.getData()
  },
  layout:'authUser',
  methods: {
    async getData() {
      await this.$api.$get(`/users`)
        .then(res => {
          this.posts = res?.users
          this.postsNew = this.posts.map((item, idx) => {
            return {
              id: item.id,
              username: item.username,
              email: item.email,
              password: item.password,
              age: item.age
            }
          })
        })
        .then(() => console.log(this.postsNew))
        .catch(e => console.log(e))
    }
  }
}
</script>

<style scoped>
.posts {
  width: 80%;
  padding: 25px;
}
</style>

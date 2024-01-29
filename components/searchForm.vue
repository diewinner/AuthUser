<template>
  <div class="search_form">
    <BaseInput v-model="value" :placeholder="placeholder" :typeInput="typeInput"/>
    <BaseButton :nameBtn="nameBtn" @click="searchItem"/>
  </div>
</template>

<script>
export default {
  name:'searchForm',
  props: {
    pageName: {
      type:String,
      default:'',
    }
  },
  data() {
    return {
      placeholder:'Enter to search..',
      typeInput:'text',
      value:'',
      nameBtn:'Search',
    }
  },
  methods: {
    async searchItem() {
      await this.$api.$get(`/${this.pageName}/search?q=${this.value}`)
        .then(res => {
          this.$emit('searchItems',res)
        })
        .catch(e => console.log(e))
    }
  }
}
</script>

<style scoped>
.search_form {
  display: flex;
  gap: 25px;
}
</style>

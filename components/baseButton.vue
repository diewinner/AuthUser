<template>
  <button class="button" @click="click">
    {{nameBtn}}
  </button>
</template>

<script>
export default {
  props: {
    nameBtn: {
      type:String,
    }
  },
  methods: {
    click() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
.button {
  border: 2px solid teal;
  border-radius: 6px;
  color: #000;
  width: 100px;
  padding: 7px;
  text-align: center;
  cursor: pointer;
  transition: all .5s ease;
  background: white;
}
.button:hover {
  background: teal;
  color: white;
}
</style>

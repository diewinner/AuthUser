<template>
  <input class="input"
         :type="typeInput"
         :placeholder="placeholder"
         :value="value"
         @input="$emit('input', $event.target.value)"
  >
</template>

<script>
export default {
  name:'baseInput',
  props: {
    typeInput: {
      type: String,
    },
    placeholder: {
      type:String,
    },
    value: {
      type:String,
    }
  }
}
</script>

<style scoped>
.input {
    appearance: none;
    outline: none;
    border: 1px solid #ADB3BB;
    border-radius: 10px;
    background: #FFF;
    padding: 13px;
    text-align: center;
    &:focus {
      border: 1px solid #00afaf;
      box-shadow: 0 2px 4px 0 rgb(42, 60, 147);
  }
}
</style>

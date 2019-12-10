<template>
  <textarea rows="10"></textarea>
</template>

<script>
export default {
  name: "Textarea"
};
</script>

<style scoped>
textarea {
  width: calc(100% - 7px);
  border-radius: 3px;
  box-shadow: 1px 1px 2px 1px rgb(0, 0, 0, 0.4);
  outline: none;
}
</style>
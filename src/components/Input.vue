<template>
  <input class="input" type="text" autofocus />
</template>

<script>
export default {
  name: "Input"
};
</script>

<style scoped>
.input {
  width: calc(100% - 10px);
  margin: 0.5em 0;
  padding: 1em 5px;
  outline: 0;
  font-size: 1em;
  border-radius: 3px;
  border: none;
  box-shadow: 1px 1px 2px 1px rgb(0, 0, 0, 0.4);
}
</style>
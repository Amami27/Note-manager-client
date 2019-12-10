<template>
  <input class="custom" type="submit" value="{label}" />
</template>

<script>
export default {
  name: "CustomBtn",
  props: ["label"]
};
</script>
<style scoped>
.custom {
  background: #2c3e50;
  color: white;
  font-family: "Open-Sans";
  padding: 0.8em 1em;
  border-radius: 5px;
  width: 100%;
  border: none;
  font-weight: 700;
  font-size: 18px;
  outline: none;
  transition: 0.3s;
}

.custom:hover {
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.3);
  transform: translateY(-1px);
  background: #2c3e50;
}
</style>
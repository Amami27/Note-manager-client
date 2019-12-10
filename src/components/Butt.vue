<template>
  <input class="butt" type="button" />
</template>

<script>
export default {
  name: "Butt"
};
</script>

<style scoped>
.butt {
  border: none;
  font-family: "Open-Sans";
  font-size: 15px;
  padding: 5px 10px;
  background: #2c3e50;
  color: white;
  border-radius: 3px;
  font-weight: 700;
  outline: none;
  transition: 0.3s;
}

.butt:hover {
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.3);
  transform: translateY(-1px);
}
</style>
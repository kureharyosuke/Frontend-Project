<template>
  <input type="type" placeholder="placeholder" value="value" />
</template>

<script>
export default {
  name: "Input",
  props: {
    type: {
      type: String,
      default: "text",
    },
  },
};
</script>

<style></style>

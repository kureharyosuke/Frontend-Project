<template>
  <input type="type" placeholder="placeholder" value="value" />
</template>

<script>
export default {
  name: "INPUT",
  props: {
    type: {
      type: String,
      default: "text",
    },
  },
};
</script>

<style></style>

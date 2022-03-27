<template>
  <Form :onClick="onClick">
    <InputForm />
  </Form>
</template>

<script>
export default {
  components: {
    InputForm: () => import("@/components/Input.vue"),
    Form: () => import("@/components/Form.vue"),
  },
  data() {
    return {
      first: Math.ceil(Math.random() * 9),
      second: Math.ceil(Math.random() * 9),
    };
  },
};
</script>

<style></style>

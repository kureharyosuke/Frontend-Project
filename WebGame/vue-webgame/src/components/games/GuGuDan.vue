<template>
  <div>
    <h2>{{ first }} X {{ second }}</h2>
    <form @submit.prevent="onSubmit">
      <input type="number" v-model="value" placeholder="number please" />
      <button type="submit">Button</button>
    </form>
    <h2>{{ result }}</h2>
  </div>
</template>

<script>
export default {
  name: "GuGuDan",
  data() {
    return {
      first: Math.ceil(Math.random() * 9),
      second: Math.ceil(Math.random() * 9),
      value: "",
      result: "",
    };
  },
  methods: {
    onSubmit() {
      // e.preventDefault(); //@submit.prevent
      // const value = Number(this.value);
      // const result = value === this.first * this.second ? "정답" : "오답";
      // this.result = result;
      if (Number(this.value) === this.first * this.second) {
        this.result = "정답";
        this.first = Math.ceil(Math.random() * 9);
        this.second = Math.ceil(Math.random() * 9);
        this.value = "";
      } else {
        this.result = "오답";
        this.value = "";
      }
    },
  },
};
</script>

<style></style>

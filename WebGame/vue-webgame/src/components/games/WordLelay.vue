<template>
  <div>
    <h2>{{ question }}</h2>
    <form @submit="onSubmit">
      <input type="text" v-model="value" placeholder="text please" />
      <button type="submit">Button</button>
    </form>
    <h2>{{ result }}</h2>
  </div>
</template>

<script>
export default {
  name: "WordLelay",
  data() {
    return {
      question: "apple",
      value: "",
      result: "",
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      if (this.question[this.question.length - 1] === this.value[0]) {
        this.result = "정답";
        this.question = this.value;
        this.value = "";
      } else {
        this.result = "오답";
        this.value = "";
      }
    },
    // getRandomWord() {
    //   const words = ["apple", "banana", "cucumber", "mango", "orange", "pineapple", "strawberry", "watermelon"];
    //   const randomIndex = Math.floor(Math.random() * words.length);
    //   return words[randomIndex];
    // },
  },
};
</script>

<style></style>

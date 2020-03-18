<template>
  <button type="button" @click="onClick">
    {{ innerText }}
  </button>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    innerText: {
      type: String,
      required: true
    }
  },

  methods: {
    onClick() {
      this.$emit("onClick");
    }
  }
});
</script>

<style lang="scss"></style>

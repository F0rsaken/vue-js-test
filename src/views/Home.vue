<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <hello-world msg="Welcome to Your Vue.js App" />

    <app-button />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import AppButton from "@/components/AppButton.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    AppButton
  }
};
</script>

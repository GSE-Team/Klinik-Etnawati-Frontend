<template>
  <div>
    <h1 class="mb-0">Masuk</h1>
    <p>Masukkan username dan password untuk mengakses admin panel.</p>
    <sign-in1-form></sign-in1-form>
  </div>
</template>

<script>
import SignIn1Form from "./Forms/SignIn1Form";
export default {
  name: "SignIn1",
  components: { SignIn1Form },
  data: () => ({}),
  mounted() {},
};
</script>

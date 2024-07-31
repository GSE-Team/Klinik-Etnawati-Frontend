<template>
  <form class="mt-4" novalidate @submit.prevent="onSubmit">
    <div class="form-group">
      <label for="username" class="mb-2">Username</label>
      <input
        class="form-control mb-0"
        :class="{ 'is-invalid': validationErrors.username }"
        type="text"
        id="username"
        aria-describedby="usernameHelp"
        v-model="user.username"
        placeholder="Username"
        required
      />
      <div class="invalid-feedback">
        {{ validationErrors.username }}
      </div>
    </div>
    <div class="form-group">
      <label for="passwordInput" class="mb-2">Password</label>
      <div class="input-wrapper">
        <input
          :type="showPassword ? 'text' : 'password'"
          id="passwordInput"
          class="form-control mb-0"
          :class="{ 'is-invalid': validationErrors.password }"
          v-model="user.password"
          placeholder="Password"
          required
        />
        <button type="button" class="btn-eye" @click="togglePasswordVisibility">
          <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
        </button>
        <div class="invalid-feedback">
          {{ validationErrors.password }}
        </div>
      </div>
    </div>
    <div class="d-inline-block w-100">
      <div class="custom-control custom-checkbox d-inline-block mt-2 pt-1">
        <input
          type="checkbox"
          class="custom-control-input"
          id="rememberMe"
          v-model="user.rememberMe"
        />
        <label class="custom-control-label" for="rememberMe">Ingat saya</label>
      </div>
      <button
        type="submit"
        class="btn btn-primary float-end mt-2"
        :disabled="loading"
      >
        <span
          v-if="loading"
          class="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
        <span v-if="loading"> Loading...</span>
        <span v-else>Masuk</span>
      </button>
    </div>
    <div class="sign-info">
      <span class="dark-color d-inline-block line-height-2 text-center">
        Klinik Spesialis Kulit dan Kelamin dr. Etnawati MPH.,Sp.KK(K)
      </span>
    </div>
  </form>
</template>

<script>
import instance from "../../../../axios";
import { useAuthStore } from "../../../../store/pinia/authStore";
export default {
  name: "SignIn1Form",
  props: ["username", "password"],
  data: () => ({
    user: {
      username: "",
      password: "",
      rememberMe: false,
    },
    loading: false,
    validationErrors: {},
    showPassword: false,
  }),
  mounted() {
    this.user.username = this.$props.username;
    this.user.password = this.$props.password;
  },
  watch: {
    "user.username"(newValue) {
      if (newValue && this.validationErrors.username) {
        this.validationErrors.username = null;
      }
    },
    "user.password"(newValue) {
      if (newValue && this.validationErrors.password) {
        this.validationErrors.password = null;
      }
    },
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    validateForm() {
      this.validationErrors = {};

      if (!this.user.username) {
        this.validationErrors.username = "Username wajib diisi.";
      }

      if (!this.user.password) {
        this.validationErrors.password = "Password wajib diisi.";
      }

      return Object.keys(this.validationErrors).length === 0;
    },
    async onSubmit() {
      const authStore = useAuthStore();
      if (!this.validateForm()) {
        return;
      }
      this.loading = true;
      try {
        const response = await instance.post("/account/auth/login", this.user);
        const { token, expired_at } = response.data;
        authStore.setAuthData(token, expired_at);
        this.$router.push({ name: "dashboard.home-1" });
      } catch (error) {
        this.loading = false;
        alert(error.response.data.message);
      }
    },
  },
};
</script>

<style scoped>
.input-wrapper {
  position: relative;
}

.btn-eye {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.btn-eye i {
  font-size: 1.2rem;
}
</style>

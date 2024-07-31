import { defineStore } from "pinia";
import moment from "moment";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: null,
    expiredAt: null,
  }),
  actions: {
    setAuthData(token, expiredAt) {
      this.token = token;
      this.expiredAt = expiredAt;
      localStorage.setItem(
        "user",
        JSON.stringify({ token, expired_at: expiredAt })
      );
    },
    clearAuthData() {
      this.token = null;
      this.expiredAt = null;
      localStorage.removeItem("user");
    },
  },
  getters: {
    isAuthenticated() {
      return this.token && moment().isBefore(moment(this.expiredAt));
    },
  },
});

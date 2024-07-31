<template>
  <!-- TOP Nav Bar -->
  <div class="iq-top-navbar header-top-sticky">
    <div
      class="iq-navbar-custom"
      :class="
        horizontal ? 'd-flex align-items-center justify-content-between' : ''
      "
    >
      <div class="iq-sidebar-logo">
        <div class="top-logo">
          <router-link :to="homeURL">
            <img :src="logo" class="img-fluid" alt="logo" />
            <span>XRay</span>
          </router-link>
        </div>
      </div>
      <div class="iq-menu-horizontal" v-if="horizontal">
        <div class="iq-sidebar-menu">
          <List :items="items" class="d-flex"></List>
        </div>
      </div>
      <nav class="navbar navbar-expand-lg navbar-light p-0">
        <!-- <div class="iq-search-bar">
          <form action="#" class="searchbox">
            <input
              type="text"
              class="text search-input"
              placeholder="Type here to search..."
            />
            <a class="search-link" href="#"><i class="ri-search-line"></i></a>
          </form>
        </div> -->
        <div class="marquee-container px-2">
          <marquee direction="left" class="marquee-text"
            >Selamat datang di Admin Panel</marquee
          >
        </div>
        <b-navbar-toggle target="nav">
          <i class="ri-menu-3-line"></i>
        </b-navbar-toggle>
        <div class="iq-menu-bt align-self-center">
          <div class="wrapper-menu" @click="miniSidebar">
            <div class="main-circle"><i class="ri-more-fill"></i></div>
            <div class="hover-circle"><i class="ri-more-2-fill"></i></div>
          </div>
        </div>
        <b-collapse id="nav-collapse" is-nav>
          <slot name="responsiveRight" />
        </b-collapse>
        <slot name="right" />
      </nav>
    </div>
  </div>
  <!-- TOP Nav Bar END -->
</template>
<script>
import List from "../menus/ListStyle1";
import SideBarItems from "../../../FackApi/json/SideBar";
export default {
  name: "NavBarStyle1",
  props: {
    homeURL: { type: Object, default: () => ({ name: "dashboard" }) },
    title: { type: String, default: "Dashboard" },
    logo: { type: String, default: require("../../../assets/images/logo.png") },
    horizontal: { type: Boolean, default: false },
    items: { type: Array },
  },
  mounted() {
    document.addEventListener("click", this.closeSearch, true);
  },
  components: {
    List,
  },
  computed: {},
  data() {
    return {
      sidebar: SideBarItems,
      globalSearch: "",
      showSearch: false,
      showMenu: false,
    };
  },
  methods: {
    miniSidebar() {
      this.$emit("toggle");
    },
  },
};
</script>

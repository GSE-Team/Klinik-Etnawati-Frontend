import { createRouter, createWebHistory } from "vue-router";
/* Layouts */
import Layout1 from "../layouts/Layout1.vue";
// import Default from "../layouts/BlankLayout";
import AuthLayout1 from "../layouts/AuthLayouts/AuthLayout1";

/* Dashboards View */
import Dashboard1 from "../views/Dashboards/Dashboard1.vue";
import Dashboard2 from "../views/Dashboards/Dashboard2.vue";
// import Dashboard3 from "../views/Dashboards/Dashboard3";
// import Dashboard4 from "../views/Dashboards/Dashboard4";
// import Dashboard5 from "../views/Dashboards/Dashboard5.vue";

/* UIElements View */
// import UiAlerts from "../views/core/UiAlerts.vue";
// import UiButtons from "../views/core/UiButtons.vue";
// import UiBadges from "../views/core/UiBadges.vue";
// import UiBreadcrumb from "../views/core/UiBreadcrumb.vue";
// import UiColors from "../views/core/UiColors.vue";
// import UiTypography from "../views/core/UiTypography.vue";
// import UiCards from "../views/core/UiCards.vue";
// import UiCarousel from "../views/core/UiCarousel.vue";
// import UiEmbedVideo from "../views/core/UiEmbedVideo.vue";
// import UiGrid from "../views/core/UiGrid.vue";
// import UiModal from "../views/core/UiModal.vue";
// import UiListGroup from "../views/core/UiListGroup.vue";
// import UiImages from "../views/core/UiImages.vue";
// import UiMediaObject from "../views/core/UiMediaObject.vue";
// import UiTooltips from "../views/core/UiTooltips.vue";
// import UiPopovers from "../views/core/UiPopovers.vue";
// import UiNotifications from "../views/core/UiNotifications.vue";
// import UiTabs from "../views/core/UiTabs.vue";
// import UiPagination from "../views/core/UiPagination.vue";
// import UiProgressBars from "../views/core/UiProgressBars.vue";
/* Authentic View */
import SignIn1 from "../views/AuthPages/Default/SignIn1";
// import SignUp1 from "../views/AuthPages/Default/SignUp1";
// import RecoverPassword1 from "../views/AuthPages/Default/RecoverPassword1";
// import LockScreen1 from "../views/AuthPages/Default/LockScreen1";
// import ConfirmMail1 from "../views/AuthPages/Default/ConfirmMail1";
/* Extra Pages */
// import ErrorPage from "../views/Pages/ErrorPage";
// import ComingSoon from "../views/Pages/ComingSoon";
// import Maintenance from "../views/Pages/Maintenance";
// import TimeLine from "../views/Pages/TimeLines";
// import Pricing from "../views/Pages/Pricing";
// import Pricing1 from "../views/Pages/Pricing1";
import BlankPage from "../views/Pages/BlankPage";
// import FAQ from "../views/Pages/FAQ";
import Invoice from "../views/Pages/Invoice";
/* Apps Views */
// import EmailListing from "../views/Apps/Email/EmailListing";
// import EmailCompose from "../views/Apps/Email/EmailCompose";
// import Calendar from "../views/Apps/Calendar/Calendar";
// import ChatIndex from "../views/Apps/Chat/Index";
/* Icon Views */
// import IconDripicons from "../views/Icons/IconDripicons";
// import IconFontawesome5 from "../views/Icons/IconFontawesome5";
// import IconLineAwesome from "../views/Icons/IconLineAwesome";
// import IconRemixicon from "../views/Icons/IconRemixicon";
// import IconUnicons from "../views/Icons/IconUnicons";
/* Tables Views */
// import TablesBasic from "../views/Tables/TablesBasic";
// import DataTable from "../views/Tables/DataTable";
// import EditableTable from "../views/Tables/EditableTable";
// import ApexCharts from "../views/Charts/ApexCharts";
// import AmCharts from "../views/Charts/AmCharts";
// import ChartJS from "../views/Charts/ChartJS.vue";
// import Echart from "../views/Charts/EChart.vue";
// import GoogleMaps from "../views/Maps/GoogleMaps";
// import VectorMaps from "../views/Maps/VectorMaps";
/* Form View */
// import FormLayout from "../views/Forms/FormLayout";
// import FormValidates from "../views/Forms/FormValidates";
// import FormSwitches from "../views/Forms/FormSwitches";
// import FormRadios from "../views/Forms/FormRadios";
// import FormCheckboxes from "../views/Forms/FormCheckboxes";
/* User View */
import Profile from "../views/User/Profile";
import ProfileEdit from "../views/User/ProfileEdit";
import AddUser from "../views/User/AddUser";
import UserList from "../views/User/UserList";
/* Plugins Views */
// import DatepickerDemo from "../views/Plugins/DatepickerDemo";
// import SelectDemo from "../views/Plugins/SelectDemo";
// import DragDropDemo from "../views/Plugins/DragDropDemo";
// import AppTreeView from "../views/Plugins/AppTreeView";

// Form Wizard
// import SimpleWizard from "../views/FormWizard/SimpleWizard.vue";
// import ValidateWizard from "../views/FormWizard/ValidateWizard.vue";
// import VerticalWizard from "../views/FormWizard/VerticalWizard.vue";

import { useAuthStore } from "../store/pinia/authStore";

import moment from "moment";

// Vue.use(VueRouter)

const childRoutes = (prop, mode) => [
  {
    path: "",
    name: prop + ".home-1",
    meta: { dark: mode, auth: true, name: "Home 1" },
    component: Dashboard1,
  },
];
const medrecChildRoute = (prop, mode) => [
  {
    path: "",
    name: prop + ".record",
    meta: { dark: mode, auth: true, name: "Medical Record" },
    component: Dashboard2,
  },
];
const transactionChildRoute = (prop, mode) => [
  {
    path: "payment",
    name: prop + ".payment",
    meta: { dark: mode, auth: true, name: "Payment" },
    component: Invoice,
  },
];
const letterChildRoute = (prop, mode) => [
  {
    path: "caption",
    name: prop + ".caption",
    meta: { dark: mode, auth: true, name: "Caption" },
    component: BlankPage,
  },
  {
    path: "referral",
    name: prop + ".referral",
    meta: { dark: mode, auth: true, name: "Referral" },
    component: BlankPage,
  },
  {
    path: "action-approval",
    name: prop + ".actionApproval",
    meta: { dark: mode, auth: true, name: "Action Approval" },
    component: BlankPage,
  },
  {
    path: "laboratory",
    name: prop + ".laboratory",
    meta: { dark: mode, auth: true, name: "Laboratory" },
    component: BlankPage,
  },
];
const authChildRoutes = (prop, mode = false) => [
  {
    path: "login",
    name: prop + ".login",
    meta: { dark: mode, auth: false },
    component: SignIn1,
  },
];
const userChildRoute = (prop, mode = false) => [
  {
    path: "profile",
    name: prop + ".profile",
    meta: { dark: mode, auth: true, name: "Profile" },
    component: Profile,
  },
  {
    path: "profile-edit",
    name: prop + ".edit",
    meta: { dark: mode, auth: true, name: "Edit Profile" },
    component: ProfileEdit,
  },
  {
    path: "add-user",
    name: prop + ".add",
    meta: { dark: mode, auth: true, name: "Add Profile" },
    component: AddUser,
  },
  {
    path: "user-list",
    name: prop + ".list",
    meta: { dark: mode, auth: true, name: "User List" },
    component: UserList,
  },
  {
    path: "doctor",
    name: prop + ".doctor",
    meta: { dark: mode, auth: true, name: "Doctor" },
    component: UserList,
  },
  {
    path: "patient",
    name: prop + ".patient",
    meta: { dark: mode, auth: true, name: "Patient" },
    component: UserList,
  },
  {
    path: "nurse",
    name: prop + ".nurse",
    meta: { dark: mode, auth: true, name: "Nurse" },
    component: UserList,
  },
];

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Layout1,
    meta: { auth: true },
    children: childRoutes("dashboard"),
  },
  {
    path: "/medical-record",
    name: "medrec",
    component: Layout1,
    meta: { auth: true },
    children: medrecChildRoute("medrec"),
  },
  {
    path: "/transaction",
    name: "transaction",
    component: Layout1,
    meta: { auth: true },
    children: transactionChildRoute("transaction"),
  },
  {
    path: "/letter",
    name: "letter",
    component: Layout1,
    meta: { auth: true },
    children: letterChildRoute("letter"),
  },
  {
    path: "/auth",
    name: "auth",
    component: AuthLayout1,
    meta: { auth: false },
    children: authChildRoutes("auth"),
  },
  {
    path: "/user",
    name: "user",
    component: Layout1,
    meta: { auth: true },
    children: userChildRoute("user"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_BASE_URL),
  base: process.env.VUE_APP_BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  try {
    const userData = JSON.parse(localStorage.getItem("user"));

    if (userData) {
      const expiresAt = moment(userData.expired_at);
      if (expiresAt.isAfter(moment())) {
        authStore.setAuthData(userData.token, userData.expired_at);
      } else {
        authStore.clearAuthData();
      }
    } else {
      authStore.clearAuthData();
    }

    if (to.meta.auth && !authStore.isAuthenticated) {
      next("/auth/login");
    } else if (!to.meta.auth && authStore.isAuthenticated) {
      next("/");
    } else {
      next();
    }
  } catch (error) {
    console.error("Error during authentication check:", error);
    authStore.clearAuthData();
    next("/auth/login");
  }
});

export default router;

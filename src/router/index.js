import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import FeaturesView from "../views/FeaturesView.vue";
import ReviewsView from "../views/ReviewsView.vue";
import ScreenshotsView from "../views/ScreenshotsView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/Features",
    name: "Features",
    component: FeaturesView,
  },
  {
    path: "/Reviews",
    name: "Reviews",
    component: ReviewsView,
  },
  {
    path: "/Screenshots",
    name: "Screenshots",
    component: ScreenshotsView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

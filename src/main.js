// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import LazyImage from "~/components/ui/LazyImage";
import UiButton from "~/components/ui/Button";
import ChooseCategories from "~/components/ui/ChooseCategories";
import AnimatedText from "~/components/ui/AnimatedText";

import store from "~/store";
import Vuex from "vuex";

import "./styles/index.scss";
import "./styles/typography.scss";

import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

export default function (Vue, { appOptions }) {
  Vue.component("Layout", DefaultLayout);
  Vue.component("LazyImage", LazyImage);
  Vue.component("UiButton", UiButton);
  Vue.component("ChooseCategories", ChooseCategories);
  Vue.component("AnimatedText", AnimatedText);

  Vue.use(Vuex);

  appOptions.store = store;
}

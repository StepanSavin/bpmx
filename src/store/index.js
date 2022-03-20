import Vuex from "vuex";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

function manageScroll(display, el) {
  if (display) disableBodyScroll(el);
  else enableBodyScroll(el);
}

export default function createStore() {
  return new Vuex.Store({
    state: () => ({
      showResultModal: false,
      showContactModal: false,
    }),
    mutations: {
      setContactModal(state, value) {
        state.showContactModal = value;
        const el = document.querySelector("#contactModal");
        manageScroll(value, el);
      },
      setResultModal(state, value) {
        state.showResultModal = value;
        const el = document.querySelector("#resultModal");
        manageScroll(value, el);
      },
    },
  });
}

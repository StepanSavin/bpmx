<template>
  <div style="padding-top: 88px" class="overflow-x-hidden">
    <Navbar />
    <slot />
    <Footer />
    <div v-show="$store.state.showContactModal">
      <ContactModal />
    </div>
    <div v-show="$store.state.showResultModal">
      <ResultModal />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/modals/ContactModal";
import ResultModal from "@/components/modals/ResultModal";

export default {
  name: "Layout",
  components: { Navbar, Footer, ContactModal, ResultModal },
};
</script>

<style lang="scss">
</style>

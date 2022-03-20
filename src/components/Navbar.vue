<template>
  <nav
    style="height: 88px"
    class="bg-white fixed z-10 top-0 left-0 w-full border-b border-gray-2"
    :class="{ 'navbar-shadow': scrollY > 0 }"
  >
    <div
      class="
        h-full
        navbar-container
        px-6
        mx-auto
        flex
        justify-between
        xs:justify-center
        items-center
      "
    >
      <div class="flex justify-between xs:w-full">
        <g-link to="/" class="mr-44 md:mr-32 xs:m-0">
          <LazyImage
            width="152"
            height="36"
            alt="logotype"
            src="logotype.svg"
        /></g-link>
        <g-link
          to="/product-details"
          class="
            flex
            pl-s4
            prs-2
            mr-2
            gap-1
            items-center
            hover:text-blue
            active:text-blue-active
          "
        >
          <span class="text-sm leading-6 font-medium xs:text-right">
            Подробнее
          </span>
          <!-- <LazyImage
            width="24"
            height="24"
            alt="dropdown"
            src="navbar/navbar-dropdown.svg"
          /> -->
        </g-link>
        <div class="flex pl-4 pr-2 gap-1 items-center cursor-pointer hidden">
          <span class="text-sm leading-6 font-medium">Применение</span>
          <LazyImage
            width="24"
            height="24"
            alt="dropdown"
            src="navbar/navbar-dropdown.svg"
          />
        </div>
      </div>
      <UiButton
        buttonHeight="md"
        class="rounded-12 w-52 xs:hidden"
        @click.native="$store.commit('setContactModal', true)"
      >
        <LazyImage
          width="24"
          height="24"
          alt="mail"
          src="navbar/navbar-mail.svg"
        />
        <span> Оставить заявку </span>
      </UiButton>
      <UiButton buttonHeight="lg" class="rounded-full w-14 hidden">
        <LazyImage
          width="32"
          height="32"
          alt="burger"
          src="navbar/navbar-burger.svg"
          class="mx-auto"
        />
      </UiButton>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      scrollY: 0,
    };
  },
  methods: {
    onScroll() {
      this.scrollY = window.scrollY;
    },
  },
  mounted() {
    this.onScroll();
    window.addEventListener("scroll", this.onScroll, { passive: true });
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>

<style>
.navbar-container {
  max-width: 1280px;
}
.navbar-shadow {
  box-shadow: 0 12px 24px rgba(51, 51, 51, 0.06);
}
</style>
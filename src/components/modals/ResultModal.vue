<template>
  <div
    class="
      result
      fixed
      z-20
      top-0
      left-0
      h-full
      w-screen
      flex
      justify-center
      items-center
      py-8
      bg-black-1
      xs:px-6
      sm:px-6
      md:px-6
    "
    @click.self="closeResultModal"
  >
    <div
      id="resultModal"
      class="
        result__window
        overflow-scroll
        xs:h-full
        bg-white
        rounded-16
        relative
      "
    >
      <LazyImage
        width="32"
        height="32"
        src="modals/modal-cross.svg"
        class="result__cross cursor-pointer absolute top-2 right-2"
        @click.native="closeResultModal"
      />
      <LazyImage
        width="146"
        height="191"
        src="modals/resultModal/result-image.svg"
        class="mt-16 xs:mt-20 mx-auto"
      />
      <p
        class="
          mt-4
          xs:mt-2.5
          text-center text-3sxl
          leading-10
          font-gbold font-bold
        "
      >
        Спасибо!<br class="hidden xs:inline" />
        Мы получили<br />
        ваши контакты.
      </p>
      <p class="mt-4 text-lg leading-8 text-blue text-center">
        Мы свяжемся в течение часа!
      </p>
      <p
        class="
          text-sm
          leading-6
          text-gray
          mt-8
          xs:mt-8
          text-center
          mt-20
          mb-12
          xs:mt-14
        "
      >
        © ООО "ДИДЖИТАЛ ТВИН"<br class="hidden xs:inline" />
        Все права защищены
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResultModal",
  methods: {
    closeResultModal() {
      this.$store.commit("setResultModal", false);
    },
  },
};
</script>

<style lang="scss">
.result {
  background: rgba(0, 0, 0, 0.25);
  &__window {
    width: 568px;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    @media (max-width: 768px) {
      max-height: 616px;
    }
  }
  &__cross {
    filter: invert(47%) sepia(23%) saturate(12%) hue-rotate(353deg)
      brightness(94%) contrast(84%);
    &:hover {
      filter: invert(37%) sepia(100%) saturate(819%) hue-rotate(194deg)
        brightness(95%) contrast(103%);
    }
    &:active {
      filter: invert(36%) sepia(96%) saturate(3593%) hue-rotate(212deg)
        brightness(101%) contrast(84%);
    }
  }
}
</style>

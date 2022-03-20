<template>
  <div ref="imageContainer" class="flex flex-col items-end xs:items-center">
    <div class="flex items-end justify-end gap-4 pr-4">
      <div
        class="
          bg-white
          rounded-t-16 rounded-l-16
          p-4
          pr-6
          text-sm
          leading-5
          vision-message
        "
        :class="{ 'vision-invisible': !isVisible }"
      >
        ⚠️ Обнаружен брак!
      </div>
      <LazyImage
        width="56"
        height="56"
        src="index/vision/vision-people.png"
        class="vision-people"
        :class="{ 'vision-invisible': !isVisible }"
      />
    </div>
    <div class="mt-8 relative">
      <LazyImage
        width="329"
        height="347"
        src="index/vision/vision-image-2.svg"
        class="vision-bg-2"
        :class="{ 'vision-invisible': !isVisible }"
      />
      <LazyImage
        width="96"
        height="96"
        src="index/vision/vision-button-1.svg"
        class="absolute -top-1 -left-8 xs:left-0 vision-button-1"
        :class="{ 'vision-invisible': !isVisible }"
      />
      <LazyImage
        width="96"
        height="96"
        src="index/vision/vision-button-2.svg"
        class="absolute right-0 top-32 vision-button-2"
        :class="{ 'vision-invisible': !isVisible }"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageTwo",
  data() {
    return {
      isVisible: false,
    };
  },
  mounted() {
    const observer = new IntersectionObserver(
      (entry) => {
        if (entry[0].isIntersecting) {
          this.isVisible = true;
          observer.unobserve(this.$refs.imageContainer);
        }
      },
      {
        threshold: 0.6,
      }
    );
    observer.observe(this.$refs.imageContainer);
  },
};
</script>

<style lang="scss">
.vision-invisible.vision {
  &-people,
  &-message,
  &-button-1,
  &-button-2 {
    opacity: 0;
    transform: translateX(200px);
  }
  &-bg-2 {
    transform: translate(70px);
    opacity: 0;
  }
}

.vision {
  &-bg-2 {
    transition: all 0.8s ease;
  }
  &-button-1,
  &-button-2 {
    transition: all 0.7s cubic-bezier(0.5, 0.04, 0.2, 1.44);
  }
  &-button-1 {
    transition-delay: 250ms;
  }
  &-button-2 {
    transition-delay: 400ms;
  }
  &-people {
    transition: all 0.7s cubic-bezier(0.17, 0.67, 0.15, 1.28);
    transition-delay: 400ms;
  }
  &-message {
    transition: transform 0.4s ease, opacity 1s ease;
    transition-delay: 500ms;
  }
}
</style>
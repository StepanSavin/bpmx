<template>
  <div ref="imageContainer" class="relative">
    <LazyImage
      width="423"
      height="254"
      src="index/advantages/advantages-image-2.svg"
      class="advantages-image-2"
      :class="{ 'advantages-invisible': !isVisible }"
    />
    <LazyImage
      width="103"
      height="197"
      src="index/advantages/advantages-people-1.svg"
      class="advantages-people-1 absolute bottom-0 left-24"
      :class="{ 'advantages-invisible': !isVisible }"
    />
    <LazyImage
      width="79"
      height="201"
      src="index/advantages/advantages-people-2.svg"
      class="advantages-people-2 absolute bottom-0 right-16"
      :class="{ 'advantages-invisible': !isVisible }"
    />
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
        threshold: 0.7,
      }
    );
    observer.observe(this.$refs.imageContainer);
  },
};
</script>

<style lang="scss">
.advantages {
  &-people-1 {
    transition: all 0.8s cubic-bezier(0.17, 0.67, 0.19, 1.22);
    @media (max-width: 900px) {
      width: 24% !important;
      left: 22% !important;
    }
  }
  &-people-2 {
    transition: all 0.8s cubic-bezier(0.17, 0.67, 0.19, 1.22);
    @media (max-width: 900px) {
      width: 19% !important;
      right: 14% !important;
    }
  }
  &-image-2 {
    transition: all 1s;
  }
}
.advantages-invisible.advantages {
  &-people-1 {
    transform: translateX(-200px);
    opacity: 0;
  }
  &-people-2 {
    transform: translateX(200px);
    opacity: 0;
  }
  &-image-2 {
    opacity: 0;
  }
}
</style>
<template>
  <div ref="imageContainer" class="relative h-full w-full">
    <LazyImage
      width="460"
      height="464"
      src="index/advantages/advantages-image-3.svg"
      class="advantages-image-3 object-cover rounded-32"
      :class="{ 'advantages-invisible': !isVisible }"
    />
    <LazyImage
      width="216"
      height="325"
      src="index/advantages/advantages-people-3.svg"
      class="advantages-people-3 absolute bottom-0 z-1"
      :class="{ 'advantages-invisible': !isVisible }"
    />
    <LazyImage
      width="230"
      height="228"
      src="index/advantages/advantages-icon-3.svg"
      class="advantages-icon-3 absolute left-6"
      :class="{ 'advantages-invisible': !isVisible }"
    />
  </div>
</template>

<script>
export default {
  name: "ImageThree",
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
  &-people-3 {
    right: 6%;
    transition: all .8s cubic-bezier(.17,.67,.03,1.42);
    @media (max-width: 900px) {
      width: 47% !important;
    }
  }
  &-icon-3 {
    top: 13.7%;
    transition: all .7s ease;
    transition-delay: 400ms;
    @media (max-width: 900px) {
      width: 50% !important;
    }
  }
  &-image-3 {
    transition: all 1s cubic-bezier(.27,.04,.86,.02);
  }
}
.advantages-invisible.advantages {
  &-image-3 {
    opacity: 0;
  }
  &-people-3 {
    opacity: 0;
    transform: translateX(200px);
  }
  &-icon-3 {
    opacity: 0;
    transform: translatey(-200px);
  }
}
</style>
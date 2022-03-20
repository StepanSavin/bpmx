<template>
  <div class="xl:px-16 md:px-16 main-container pt-24 md:pt-20 xs:pt-12">
    <div
      class="
        bg-white
        pt-7 pb-5
        xs:py-0
        rounded-32
        px-14
        xs:px-5
        relative
        xs:bg-transparent
        flex
        justify-center
      "
    >
      <LazyImage
        width="593"
        height="286"
        alt="second scheme"
        src="productDetails/details-scheme-2.svg"
        class="xs:hidden"
      />
      <LazyImage
        width="247"
        height="573"
        alt="second scheme"
        src="productDetails/details-scheme-2-xs.svg"
        class="hidden xs:block"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "SecondScheme",
};
</script>
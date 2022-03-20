<template>
  <div class="xl:px-16 md:px-16 main-container pt-24 md:pt-20 xs:pt-12">
    <div class="bg-white py-9 rounded-32 px-14 xs:px-5 relative">
      <p style="max-width: 690px" class="text-xl leading-7">
        Создавайте системы корпоративного уровня с нуля за часы. Проверяйте
        гипотезы на ходу без привлечения разработчиков.
      </p>
      <LazyImage
        width="50"
        height="35"
        alt="incognito"
        src="productDetails/details-incognito.svg"
        class="absolute -bottom-6 left-0 right-0 mx-auto hidden xs:block"
      />
    </div>
    <div
      class="
        bg-white
        py-9
        rounded-32
        px-16
        mt-16
        md:mt-20
        xs:mt-12
        flex
        justify-center
      "
    >
      <LazyImage
        width="808"
        height="290"
        alt="first scheme"
        src="productDetails/details-scheme-1.svg"
        class="xs:hidden"
      />
      <LazyImage
        width="263"
        height="418"
        alt="first scheme"
        src="productDetails/details-scheme-1-xs.svg"
        class="hidden xs:block"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "FirstScheme",
};
</script>
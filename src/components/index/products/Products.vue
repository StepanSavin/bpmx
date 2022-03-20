<template>
  <div class="main-container pt-32 xs:pt-24">
    <p class="tag--sm">Единая Платформа для решения задач любой сложности</p>
    <p
      class="
        mt-2
        font-gbold font-bold
        text-5sxl
        leading-12
        xs:leading-10 xs:text-3xl
      "
    >
      Продукт позволяет
    </p>
    <div
      class="
        grid grid-cols-2
        xs:grid-cols-1
        gap-x-10 gap-y-8
        xs:gap-6
        mt-16
        xs:mt-12
      "
    >
      <div
        v-for="(product, index) in products"
        :key="product.key"
        class="rounded-32 overflow-hidden flex flex-col"
      >
        <div style="height: 176px">
          <LazyImage
            width="510"
            height="394"
            :src="`index/products/products-${index + 1}.svg`"
            class="object-cover h-full object-left-bottom w-full rounded-t-32"
          />
        </div>
        <div class="bg-light p-12 xs:px-4 flex-1">
          <p class="heading-3" v-html="product.title"></p>
          <p class="subtext--base mt-4" v-html="product.text"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Products",
  data() {
    return {
      products: [
        {
          title: "Создавать любые приложения",
          text: "Можно сконструировать все системы и процессы в одном месте",
        },
        {
          title: "Workflow любой сложности",
          text: "Можно сконструировать все системы и процессы в одном месте",
        },
        {
          title: "Анализироватьлюбые данные",
          text: "Можно сконструировать все системы и процессы в одном месте",
        },
        {
          title: "Агрегировать данные из систем и оборудования",
          text: "Можно сконструировать все системы и процессы в одном месте",
        },
      ],
    };
  },
};
</script>

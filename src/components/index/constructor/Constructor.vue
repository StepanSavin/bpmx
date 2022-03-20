<template>
  <div class="xs:px-5 main-container pt-40 xs:pt-32">
    <p class="tag--sm text-center">Конструктор Приложений</p>
    <p style="max-width: 900px" class="mt-4 heading-2 text-center mx-auto">
      Создавайте приложения в разы быстрее чем при классической разработке
    </p>
    <p style="max-width: 700px" class="mt-6 subtext text-center mx-auto">
      С платформой BPMx вы получаете возможность создавать бизнес-приложения без
      привлечения разработчиков.
    </p>
    <ChooseCategories
      :categories="categories"
      :currentCategory="currentCategory"
      class="mt-8 xs:hidden"
      @updateCategory="updateCategory"
    />
    <div
      class="
        mt-16
        px-24
        py-20
        smd:px-10
        bg-light-2
        rounded-32
        flex
        justify-between
        overflow-hidden
        xs:hidden
      "
    >
      <AnimatedText
        :text="texts[currentCategory]"
        :class="`constructor__text-${currentCategory}`"
      />
      <ImageOne v-if="currentCategory === 0" />
      <ImageTwo v-if="currentCategory === 1" />
      <ImageThree v-if="currentCategory === 2" />
    </div>
    <div
      class="xs:block hidden mt-12 pt-9 pb-12 -mx-5 bg-light-2 overflow-hidden"
    >
      <ImageOne />
      <AnimatedText :text="texts[0]" class="mt-12 px-6" />
      <ImageTwoXs class="mx-auto mt-20" />
      <AnimatedText :text="texts[1]" class="mt-14 px-6" />
      <ImageThree class="mt-28 mx-auto" />
      <AnimatedText :text="texts[2]" class="px-6 mt-14" />
    </div>
  </div>
</template>

<script>
import ImageOne from "@/components/index/constructor/ImageOne";
import ImageTwo from "@/components/index/constructor/ImageTwo";
import ImageTwoXs from "@/components/index/constructor/ImageTwoXs";
import ImageThree from "@/components/index/constructor/ImageThree";

export default {
  name: "Constructor",
  components: { ImageOne, ImageTwo, ImageThree, ImageTwoXs },
  data() {
    return {
      currentCategory: 0,
      categories: [
        "Опишите структуру данных",
        "Добавьте WorkFlow",
        "Визуализируйте хранимые данные",
      ],
      texts: [
        {
          tag: "Структуры данных",
          title: "Конструируйте Формы",
          paragraph:
            "Структуры данных создаются в удобном визуальном дизайнере: добавьте формы с нужными типами полей, репорты для визуализации данных, свяжите данные из разных форм.",
        },
        {
          tag: "Рабочие процессы",
          title: "Создавайте WorkFlow с правилами",
          paragraph:
            "Опишите поведение полей в формах логику проверки данных и цепочки прохождения согласований.",
        },
        {
          tag: "Визуализация накапливаемых данных",
          title: "Формируйте отчеты для пользователей",
          paragraph:
            "Выберите дизайн отчётов и укажите какие позльзователи и роли будут иметь доступ к разным данным.",
        },
      ],
    };
  },
  methods: {
    updateCategory(value) {
      this.currentCategory = value;
    },
  },
};
</script>

<style lang="scss">
.constructor__text-0 {
  width: 341px;
}
.constructor__text-1 {
  width: 307px;
}
.constructor__text-2 {
  width: 338px;
}
</style>
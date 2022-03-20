<template>
  <div
    class="
      main-container
      pt-40
      pb-32
      xs:pb-20 xs:pt-14
      flex
      smd:items-center
      xs:flex-col
      gap-24
    "
  >
    <div class="flex-1 xs:order-1">
      <p
        class="
          text-white text-sm
          leading-6
          uppercase
          tracking-wider
          font-gbold font-bold
        "
      >
        Заголовок
      </p>
      <p
        class="
          mt-2
          text-5sxl
          leading-12
          font-gbold font-bold
          text-white
          xs:text-3xl xs:leading-10
        "
      >
        Преимущества использования
      </p>
      <div class="mt-6 h-12 flex gap-12" @mousedown.prevent>
        <div
          v-for="(category, index) in categories"
          :key="category"
          class="h-full relative flex items-center px-1.5 cursor-pointer"
          @click="currentCategory = index"
        >
          <span class="text-white text-sm leading-6 font-medium">{{
            category
          }}</span>
          <div
            style="height: 3px"
            class="
              absolute
              bottom-0
              w-full
              left-0
              rounded-32
              advantages__category-line
              duration-300
            "
            :class="{ 'opacity-0': index !== currentCategory }"
          >
            <div
              class="bg-white rounded-32 h-full duration-300"
              :class="currentCategory === index ? ' w-1/2' : 'w-0'"
            ></div>
          </div>
        </div>
      </div>
      <div
        class="
          advantages__card-image
          bg-light
          rounded-32
          justify-center
          items-center
          overflow-hidden
          hidden
          xs:flex
          mt-8
        "
        :class="[
          { 'xs:px-10 smd:px-7': currentCategory === 0 },
          { 'xs:px-5 smd:px-7': currentCategory === 1 },
        ]"
      >
        <ImageOne v-if="currentCategory === 0" />
        <ImageTwo v-if="currentCategory === 1" />
        <ImageThree class="rounded-32" v-if="currentCategory === 2" />
      </div>
      <transition name="advantages">
        <p :key="currentCategory" class="text-white text-lg leading-8 mt-8">
          {{ texts[currentCategory] }}
        </p>
      </transition>
      <UiButton
        buttonHeight="lg"
        colorType="light"
        class="mt-12 px-8 rounded-16"
        @click.native="$store.commit('setContactModal', true)"
      >
        Попробовать
      </UiButton>
    </div>
    <div
      class="
        advantages__card-image
        bg-light
        rounded-32
        flex
        justify-center
        items-center
        mx-auto
        overflow-hidden
        xs:hidden
      "
      :class="[
        { 'xs:px-10 smd:px-7': currentCategory === 0 },
        { 'xs:px-5 smd:px-7': currentCategory === 1 },
      ]"
    >
      <ImageOne v-if="currentCategory === 0" />
      <ImageTwo v-if="currentCategory === 1" />
      <ImageThree v-if="currentCategory === 2" />
    </div>
  </div>
</template>

<script>
import ImageOne from "@/components/index/advantages/ImageOne";
import ImageTwo from "@/components/index/advantages/ImageTwo";
import ImageThree from "@/components/index/advantages/ImageThree";

export default {
  name: "UsingAdvantages",
  components: { ImageOne, ImageTwo, ImageThree },
  data() {
    return {
      texts: [
        "Не нужно нанимать разработчиков -  теперь главным разработчиком становится ваш Аналитик или другой специалист, который хорошо знает  процессы.",
        "Можете быстро проверять гипотезы без сложной разработки: добавляйте новые поля в формы, конструируйте WorkFlow.",
        "Вы экономите огромное количество денег и времени на тестировании гипотез и внедрении. Также обеспечивается преемственность - нового специалиста по работе с BPMx можно легко вводить в курс дела.",
      ],
      categories: ["Раз", "Два", "Три"],
      currentCategory: 0,
    };
  },
};
</script>

<style lang="scss">
.advantages {
  &__category-line {
    background: rgba(245, 248, 255, 0.5);
  }
  &-leave-active {
    transition: all 0s;
  }
  &-leave {
    position: absolute;
    opacity: 0;
  }
  &-enter {
    opacity: 0;
  }
  &-enter-active {
    transition: all 0.5s;
  }
  &__card-image {
    width: 460px;
    height: 496px;
    @media (max-width: 768px) {
      height: auto;
      width: 100%;
      aspect-ratio: 1/1;
      max-width: 460px;
    }
    @media (max-width: 940px) and (min-width: 769px) {
      aspect-ratio: 1/1 !important;
      width: 100% !important;
      height: min-content;
    }
  }
}
</style>

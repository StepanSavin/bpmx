<template>
  <div class="main-container pt-32 xs:pt-16">
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
      Области примерения
    </p>
    <div class="mt-16 xs:mt-8 grid grid-cols-2 xs:grid-cols-1 gap-10">
      <div class="flex flex-col gap-10 xs:hidden">
        <div class="rounded-32 bg-white overflow-hidden">
          <div style="height: 176px">
            <LazyImage
              width="510"
              height="176"
              src="index/areas/areas-image-1.svg"
              class="object-cover w-full h-full max-w-none rounded-t-32"
            />
          </div>
          <div class="p-12">
            <div class="areas__text-1">
              <p class="text-2xl leading-8 font-bold font-gbold">
                {{ areas[0].title }}
              </p>
              <p class="text-gray text-base leading-6 mt-4">
                {{ areas[0].text }}
              </p>
            </div>
          </div>
        </div>
        <div class="rounded-32 bg-white overflow-hidden">
          <div style="height: 176px">
            <LazyImage
              width="510"
              height="176"
              src="index/areas/areas-image-3.svg"
              class="object-cover w-full h-full max-w-none rounded-t-32"
            />
          </div>
          <div class="p-12">
            <div class="areas__text-2">
              <p class="text-2xl leading-8 font-bold font-gbold">
                {{ areas[2].title }}
              </p>
              <p class="text-gray text-base leading-6 mt-4">
                {{ areas[2].text }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-10 xs:hidden">
        <div class="rounded-32 bg-white overflow-hidden">
          <div style="height: 176px">
            <LazyImage
              width="510"
              height="176"
              src="index/areas/areas-image-2.svg"
              class="object-cover w-full h-full max-w-none rounded-t-32"
            />
          </div>
          <div class="p-12">
            <div class="areas__text-3">
              <p class="text-2xl leading-8 font-bold font-gbold">
                {{ areas[1].title }}
              </p>
              <p class="text-gray text-base leading-6 mt-4">
                {{ areas[1].text }}
              </p>
            </div>
          </div>
        </div>
        <div class="rounded-32 bg-light flex justify-between items-center p-12 smd:px-6">
          <div
            class="
              h-32
              w-32
              smd:h-24
              smd:w-24
              bg-blue
              flex
              justify-center
              items-center
              rounded-32
            "
          >
            <LazyImage
              width="67"
              height="51"
              src="index/areas/areas-icon.svg"
            />
          </div>
          <UiButton buttonHeight="lg" class="px-8 smd:px-3 rounded-16" 
          @click.native="$store.commit('setContactModal', true)">
            <LazyImage
              width="24"
              height="24"
              src="index/areas/areas-mail.svg"
            />
            <span>Оставить заявку</span>
          </UiButton>
        </div>
      </div>
      <div class="hidden xs:flex flex-col gap-6">
        <div
          v-for="(area, index) in areas"
          :key="area.title"
          class="rounded-32 bg-white overflow-hidden"
        >
          <div style="height: 176px">
            <LazyImage
              width="510"
              height="176"
              :src="`index/areas/areas-image-${index + 1}.svg`"
              class="object-cover w-full h-full max-w-none rounded-t-32"
            />
          </div>
          <div class="pt-12 pb-9 px-6">
            <p class="text-2xl leading-8 font-bold font-gbold">
              {{ area.title }}
            </p>
            <p class="text-gray text-base leading-6 mt-4">
              {{ area.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Areas",
  data() {
    return {
      areas: [
        {
          title: "Малый бизнес",
          text: "Не нужно больше покупать CRM или конфигурации 1с, конструируйте структуры данных и процессы в BPMx.",
        },
        {
          title: "Крупный бизнес",
          text: "Создайте цифрового двойника: оцифруйте данные, процессы, отчетность. Свяжите данные из разнородных систем в едином месте.",
        },
        {
          title: "Автоматизируйте производства",
          text: "BPMx объединяет данные, рабочие процессы и оборудование, преобразуя бизнес и потребительский опыт.",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.areas {
  &__text-1 {
    max-width: 361px;
  }
  &__text-2 {
    max-width: 351px;
  }
  &__text-3 {
    max-width: 327px;
  }
}
</style>
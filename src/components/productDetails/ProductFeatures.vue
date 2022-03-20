<template>
  <div class="xl:px-16 md:px-16 main-container pt-16 md:pt-20 pb-20 xs:pb-10">
    <div class="bg-white rounded-32 pt-10 pb-14 px-16 xs:p-0 xs:bg-transparent">
      <h2 class="text-blue leading-8 text-3xl font-medium">
        Краткие характеристики
      </h2>
      <div style="max-width: 522px" class="mt-6 flex flex-col gap-5 xs:gap-6">
        <div v-for="(feature, index) in features" :key="feature.title">
          <p
            class="text-xl leading-7 mb-5 xs:mb-3 xs:text-lg"
            :class="{ 'font-gbold': index === 0 }"
          >
            {{ feature.title }}
          </p>
          <div class="flex flex-col gap-3">
            <p
              v-for="section in feature.sections"
              :key="section"
              class="
                pl-6
                text-xl
                leading-7
                xs:text-base xs:text-5
                details__feature
              "
            >
              {{ section }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductFeatures",
  data() {
    return {
      features: [
        {
          title: "Для профессионалов:",
          sections: [
            "Обеспечение транзакционной целостности",
            "Гибкая ролевая модель (каждой роли доступны только свои данные и поля)",
            "Интеграция с Active Directory (SSO)",
            "Контроль версионности микроприложений",
          ],
        },
        {
          title: "Интеграции:",
          sections: [
            "С  любыми системами через API",
            "WebHooks",
            "Производственное оборудование",
          ],
        },
        {
          title: "Особенности:",
          sections: [
            "Мощный скриптовый движок",
            "Возможность создавать простые структуры данных: формы, списки записей, связывание форм и данных",
          ],
        },
        {
          title: "Варианты установки:",
          sections: ["Ваш сервер", "Наше облако"],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.details {
  &__feature {
    position: relative;
    &::before {
      position: absolute;
      content: "";
      background: #3478f6;
      width: 9px;
      height: 9px;
      border-radius: 50%;
      top: 9px;
      left: 5px;
    }
  }
}
</style>
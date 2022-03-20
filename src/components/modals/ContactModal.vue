<template>
  <div
    class="
      modal
      fixed
      z-20
      top-0
      left-0
      h-full
      w-screen
      flex
      justify-center
      items-center
      py-8
      bg-black-1
      xs:px-6
      sm:px-6
      md:px-6
    "
    @click.self="closeContactModal"
  >
    <div
      id="contactModal"
      class="
        modal__window
        overflow-scroll
        xs:h-full
        bg-white
        rounded-16
        relative
        px-12
        xs:px-6
        pt-16
        pb-12
        xs:py-12
      "
    >
      <LazyImage
        width="32"
        height="32"
        src="modals/modal-cross.svg"
        class="modal__cross cursor-pointer absolute top-2 right-2"
        @click.native="closeContactModal"
      />
      <p class="text-center text-5sxl leading-12 font-gbold font-bold">
        Расскажите о себе
      </p>
      <div
        class="
          mt-12
          xs:mt-8
          grid grid-cols-2
          xs:grid-cols-1
          gap-8
          xs:gap-4
          modal__name-phone
        "
      >
        <div>
          <p class="text-sm leading-6 font-gbold">Ваше имя</p>
          <UiInput
            :isError="nameError"
            placeholder="Имя"
            class="mt-2 w-full"
            v-model="name"
            @focus="nameError = false"
            ><LazyImage
              style="width: 24px"
              width="24"
              height="56"
              src="modals/contactModal/contact-person.svg"
          /></UiInput>
        </div>
        <div>
          <p class="text-sm leading-6 font-gbold">Ваш телефон</p>
          <UiInput
            :isError="phoneError"
            placeholder="Телефон"
            class="mt-2"
            v-model="phone"
            @focus="phoneError = false"
            ><LazyImage
              width="24"
              height="24"
              src="modals/contactModal/contact-phone.svg"
          /></UiInput>
        </div>
      </div>
      <p class="mt-4 text-sm leading-6 font-gbold">Ваша почта</p>
      <UiInput
        :isError="emailError"
        placeholder="Электронная почта"
        class="mt-2"
        v-model="email"
        @focus="emailError = false"
        ><LazyImage
          width="24"
          height="24"
          src="modals/contactModal/contact-email.svg"
      /></UiInput>
      <UiButton
        buttonHeight="lg"
        class="mt-12 w-full rounded-16 relative"
        @click.native="send"
      >
        <template v-if="!isLoading">
          <LazyImage
            width="24"
            height="24"
            src="modals/contactModal/contact-send.svg"
          />
          <span> Отправить </span>
        </template>
        <template v-else>
          <LoadingSpinner size="md" color="white" />
        </template>
      </UiButton>
      <p class="text-sm leading-6 text-gray mt-8 xs:mt-8 text-center">
        © ООО "ДИДЖИТАЛ ТВИН"<br class="hidden xs:inline" />
        Все права защищены
      </p>
    </div>
  </div>
</template>

<script>
import UiInput from "@/components/ui/Input";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

import httpClient from "@/api/index.js";

export default {
  name: "ContactModal",
  components: { UiInput, LoadingSpinner },
  data() {
    return {
      isLoading: false,
      email: "",
      name: "",
      phone: "",
      emailError: false,
      nameError: false,
      phoneError: false,
    };
  },
  methods: {
    closeContactModal() {
      this.$store.commit("setContactModal", false);
    },
    async send() {
      this.validate();
      if (this.emailError || this.nameError || this.phoneError) return;
      this.isLoading = true;
      try {
        await httpClient.post("/v2/leads/", {
          data: {
            first_name: this.name,
            last_name: this.name,
            email: this.email,
            phone: this.phone,
            tags: ["bpmx_site_reg"],
          },
        });
        this.email = "";
        this.phone = "";
        this.name = "";
        this.closeContactModal();
        this.$store.commit("setResultModal", true);
      } catch (e) {
        console.log("Request Error " + e);
      } finally {
        this.isLoading = false;
      }
    },
    validate() {
      if (!this.email || !/^\S+@\S+\.\S+$/.test(this.email))
        this.emailError = true;
      if (!this.name) this.nameError = true;
      if (!this.phone) this.phoneError = true;
    },
  },
};
</script>


<style lang="scss">
.modal {
  background: rgba(0, 0, 0, 0.25);
  &__window {
    width: 568px;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    @media (max-width: 768px) {
      max-height: 708px;
    }
  }
  &__cross {
    filter: invert(47%) sepia(23%) saturate(12%) hue-rotate(353deg)
      brightness(94%) contrast(84%);
    &:hover {
      filter: invert(37%) sepia(100%) saturate(819%) hue-rotate(194deg)
        brightness(95%) contrast(103%);
    }
    &:active {
      filter: invert(36%) sepia(96%) saturate(3593%) hue-rotate(212deg)
        brightness(101%) contrast(84%);
    }
  }
}
</style>


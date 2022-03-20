<template>
  <div
    class="
      h-14
      rounded-16
      hover:bg-light-hover
      duration-300
      cursor-pointer
      px-5
      flex
      justify-between
      gap-x-2
    "
    :class="
      isError
        ? 'shadow-error bg-white'
        : 'bg-light focus-within:shadow-focus focus-within:bg-white'
    "
  >
    <input
      :value="value"
      :placeholder="placeholder"
      class="
        flex-1
        outline-none
        bg-transparent
        ui-input
        text-sm text-gray
        leading-6
        placeholder-blue
      "
      @input="handleInput"
      @focus="$emit('focus')"
    />
    <slot />
  </div>
</template>

<script>
export default {
  name: "UiInput",
  props: {
    placeholder: {
      type: String,
      default: "",
      required: false,
    },
    value: {
      type: String,
      default: "",
      required: false,
    },
    isError: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  methods: {
    handleInput(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>

<style lang="scss">
.ui-input {
  caret-color: #3478f6;
  &::placeholder {
    transition: all 300ms;
    font-weight: 500;
  }
  &:focus::placeholder {
    transform: translateX(7px);
  }
}

.modal__name-phone .ui-input {
  @media (min-width: 769px) {
    max-width: 140px;
  }
}
.footer__input-block .ui-input {
  max-width: 150px;
}
</style>
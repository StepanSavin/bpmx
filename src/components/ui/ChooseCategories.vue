<template>
  <div class="flex justify-center gap-10 mt-8" @mousedown.prevent>
    <div
      v-for="(category, index) in categories"
      :key="category"
      class="cursor-pointer"
      @click="$emit('updateCategory', index)"
    >
      <p
        class="text-sm leading-12 font-medium"
        :class="{ 'text-blue': currentCategory === index }"
      >
        {{ category }}
      </p>
      <div class="h-0.5 w-full rounded-5 bg-light overflow-hidden">
        <div
          class="w-1/2 h-full bg-blue duration-300 origin-left"
          :class="{ 'transform scale-x-0': currentCategory !== index }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChooseCategories",
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
    currentCategory: {
      type: Number,
      default: 0,
    },
  },
};
</script>
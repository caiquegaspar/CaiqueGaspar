<script lang="ts" setup>
import { onMounted, ref } from "vue";

interface Ability {
  ability: { name: string; url: string };
  is_hidden: boolean;
  slot: number;
}

const props = defineProps<{
  prop: Ability[];
}>();

const arr = ["a", "b", "c"];
const count = ref(0);

onMounted(async () => {
  const request = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  const response = await request.json();

  console.log(response);
});
</script>

<template>
  <div>
    <button class="vue_btn" @click="count++">Add</button>
    <h2>{{ count }}</h2>
    <div class="flex gap-4">
      <h3 v-for="ability in prop" :key="ability.slot">
        {{ ability.ability.name }}
      </h3>
    </div>
  </div>
</template>

<style scoped>
.vue_btn {
  @apply rounded-[7px] duration-300 mx-[4px] bg-[#4f39fa] text-white;
  @apply shadow-[0_2px_5px_rgb(0,0,0,0.16),0_2px_10px_rgb(0,0,0,0.12)] p-[10px];
}
</style>

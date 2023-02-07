<script lang="ts" setup>
import { computed } from "vue";

import type { Skill } from "types/skills.interface";

const props = defineProps<{ title: string; skills: Skill[] }>();

const cardBackText = computed(() => JSON.stringify(props.title));
</script>

<template>
  <div class="card">
    <div class="img_box">
      <slot name="card-icons"></slot>
    </div>

    <div class="content_box">
      <h2>{{ title }}</h2>

      <div class="skills">
        <h3>experiência</h3>

        <div class="skill_item" v-for="skill in skills" :key="skill.name">
          <span :style="`--skill-color: ${skill.color}`"></span>
          <h4>
            <strong>{{ skill.name }}:&nbsp;</strong>
            <span>{{ skill.xp }}</span>
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  @apply relative w-[280px] h-[350px] overflow-hidden rounded-2xl;
  @apply bg-[rgba(0,0,0,0.2)] backdrop-blur-[100px];
  /* before */
  @apply before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#42b883];
  @apply before:transition-all before:duration-500 before:ease-in-out before:hover:clip-path-circle-[300px_80%_-20%];
  @apply before:clip-path-circle-[150px_80%_20%] before:content-[''];
  /* after */
  @apply after:absolute after:font-['Poppins',sans-serif] after:content-[v-bind(cardBackText)];
  @apply after:top-[45%] after:-left-[20%] after:text-8xl after:font-extrabold after:italic after:text-[rgba(66,184,131,0.1)];
}

.img_box {
  @apply absolute flex w-full top-1/2 -translate-y-1/2;
}

:slotted(svg):nth-child(1) {
  --y: 95%;
  @apply scale-[1.2] translate-x-[45%] -translate-y-[17%] transition duration-300;
}

:slotted(svg):nth-child(2) {
  --y: 75%;
  @apply scale-[1.2] z-10 transition duration-500;
}

:slotted(svg):nth-child(3) {
  --y: 95%;
  @apply scale-[1.2] -translate-x-[45%] -translate-y-[17%] transition duration-700;
}

.card:hover :slotted(svg) {
  @apply -translate-y-[var(--y)];
}

.content_box {
  @apply absolute flex flex-col gap-4 h-[25%] w-full bottom-0 text-center transition-all duration-1000;
}

.card:hover .content_box {
  @apply h-[55%];
}

.content_box h2 {
  @apply relative font-[600] text-[#fff] m-0 tracking-[2px] text-xl;
}

.content_box .skills {
  @apply flex flex-col justify-center items-start px-5 py-1 invisible opacity-0 transition-all;
  @apply duration-500 gap-1;
}

.content_box .skills h3 {
  @apply text-[#fff] font-[600] text-[14px] uppercase tracking-[2px] mb-[4px];
}

.content_box .skills .skill_item {
  @apply flex justify-center items-center gap-1 max-w-[95%];
}

.content_box .skills .skill_item > span {
  @apply w-[20px] h-[20px] bg-[color:var(--skill-color)] rounded-full cursor-pointer mr-1;
}

.card:hover .content_box .skills {
  @apply opacity-100 visible delay-500;
}

.content_box .skills .skill_item > h4 {
  @apply text-[#fff] font-[600] text-[12px] uppercase tracking-[2px] truncate;
}
</style>

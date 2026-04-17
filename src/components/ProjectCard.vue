<template>
  <div class="col-12 col-md-4 col-lg-3 d-flex justify-content-center mb-3 slide-up">
    <div class="card project-card w-100 h-100 d-flex flex-column" style="max-width: 26rem;">
      <img :src="project.image" class="img-fluid" :alt="project.title" />

      <div class="card-body d-flex flex-column flex-grow-1">
        <h5 class="mt-3 text-success">{{ project.title }}</h5>

        <div class="text-center">
          <span
            class="mb-2 badge rounded-pill"
            :class="getTypeClass(project.type)"
          >
            {{ project.type }}
          </span>
        </div>

        <!-- Limit description height -->
        <p class="project-description mb-3">{{ project.description }}</p>

        <div class="mt-auto d-flex justify-content-start gap-2">
          <a :href="project.view" target="_blank" class="btn btn-outline-success w-50">
            <i class="fa-solid fa-earth-americas"></i> View
          </a>
          <a :href="project.source" target="_blank" class="btn btn-success w-50">
            <i class="fa-brands fa-github"></i> Source
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  project: Object
});

// 👇 ADD THIS
const getTypeClass = (type) => {
  if (!type) return '';

  const t = type.toLowerCase();

  if (t === 'mobile app') return 'mobileapp';
  if (t === 'front-end') return 'frontend';
  if (t === 'back-end') return 'backend';
  if (t === 'full-stack') return 'fullstack';

  return '';
};
</script>
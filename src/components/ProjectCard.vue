<template>
    <div class="col-12 col-md-4 col-lg-3 d-flex justify-content-center mb-3">
      <div class="card project-card w-100 h-100 d-flex flex-column" style="max-width: 26rem;">
        <img :src="project.image" class="img-fluid" :alt="project.title" />
        <div class="card-body d-flex flex-column">
          <h5 class="mt-3 text-success">{{ project.title }}</h5>
          <p>{{ project.description }}</p>
  
          <div class="mt-auto d-flex justify-content-start gap-2">
            <a :href="project.view" target="_blank" class="btn btn-outline-success w-50">View</a>
            <a :href="project.source" target="_blank" class="btn btn-success w-50">Source</a>
          </div>
        </div>
      </div>
    </div>
  </template>
<script setup>
import { defineProps } from "vue";

defineProps({
    project: Object
})
</script>
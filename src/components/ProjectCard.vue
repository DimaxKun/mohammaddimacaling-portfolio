<template>
    <div class="card col-12 col-lg-3 col-md-5 p-3 project-card">
        <img :src="project.image" class="img-fluid" :alt="project.title" />
        <h5 class="mt-3">{{ project.title }}</h5>
        <p>{{ project.description }}</p>
    </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
    project: Object
})
</script>
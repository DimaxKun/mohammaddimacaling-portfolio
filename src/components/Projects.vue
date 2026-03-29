<template>
    <!-- Projects start -->
    <div class="container-fluid">
        <div class="row mb-5 text-center mt-5 justify-content-center gap-5" id="projects">
            <h1 class="text-light slide-up">Projects</h1>

            <!-- First 6 projects -->
            <ProjectCard v-for="project in visibleProjects" :key="project.id" :project="project" />

            <!-- Hidden Cards -->
            <div class="collapse text-center" id="moreProjects">
                <div class="row d-flex justify-content-center gap-5 mt-3 mb-4">
                    <ProjectCard v-for="project in hiddenProjects" :key="project.id" :project="project" />
                </div>
            </div>
        </div>

        <!-- Show more button -->
        <div class="d-flex justify-content-center mb-4">
            <button
                class="btn btn-primary"
                data-bs-toggle="collapse"
                data-bs-target="#moreProjects"
                @click="isExpanded = !isExpanded"
            >
                {{ isExpanded ? "Show Less" : "Show More" }}
            </button>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from "vue";
import ProjectCard from "./ProjectCard.vue";
import projects from "../data/projects.json";
import { useScrollAnimation } from '../composables/useScrollAnimation';
useScrollAnimation();

const isExpanded = ref(false);

const visibleProjects = computed(() => projects.slice(0, 6));
const hiddenProjects = computed(() => projects.slice(6));
</script>
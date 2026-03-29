<script setup>
import { useScrollAnimation } from '../composables/useScrollAnimation';
useScrollAnimation();
</script>

<template>
    <!-- Tools Start -->
    <section class="row text-center" id="tools">
        <h1 class="my-1 text-light slide-up">Tools</h1>

        <div class="row">
            <div class="col-12 col-lg-4 col-md-6 mb-4 slide-up">
                <h3 class="mb-3 text-light">Front-End</h3>
                <div class="d-flex justify-content-center gap-3 flex-wrap">
                    <img class="icon-img" 
                    src="https://skillicons.dev/icons?i=html" alt="">
                    <img class="icon-img" src="https://skillicons.dev/icons?i=css" alt="">
                    <img class="icon-img"
                        src="https://skillicons.dev/icons?i=bootstrap"
                        alt="">
                    <img class="icon-img"
                        src="https://skillicons.dev/icons?i=javascript" alt="">
                </div>
            </div>

            <div class="col-12 col-lg-4 col-md-6 mb-4 slide-up" style="transition-delay: 0.15s;">
                <h3 class="mb-3 text-light">MEVRN</h3>
                <div class="d-flex justify-content-center gap-3 flex-wrap">
                    <img class="icon-img" 
                    src="https://skillicons.dev/icons?i=mongodb" alt="mongodb">
                    <img class="icon-img"
                        src="https://skillicons.dev/icons?i=express" alt="express">
                    <img class="icon-img"
                        src="https://skillicons.dev/icons?i=vue"
                        alt="vue">
                    <img class="icon-img"
                        src="https://skillicons.dev/icons?i=react"
                        alt="react">
                    <img class="icon-img"
                        src="https://skillicons.dev/icons?i=nodejs"
                        alt="node">
                </div>
            </div>

            <div class="col-12 col-lg-4 col-md-12 mb-4 slide-up" style="transition-delay: 0.3s;">
                <h3 class="mb-3 text-light">Others</h3>
                <div class="d-flex justify-content-center gap-3 flex-wrap">
                    <img class="icon-img" 
                    src="https://skillicons.dev/icons?i=aws" alt="">
                    <img class="icon-img" 
                    src="https://skillicons.dev/icons?i=git" alt="">
                    <img class="icon-img" 
                    src="https://skillicons.dev/icons?i=postman" alt="">
                    <img class="icon-img"
                        src="https://skillicons.dev/icons?i=vscode"
                        alt="">
                </div>
            </div>
        </div>
    </section>
    <!-- Tools End -->
</template>

<script setup>
import { useScrollAnimation } from '../composables/useScrollAnimation';
useScrollAnimation();
</script>

<template>
    <!-- Start of About Me -->
    <div class="container-fluid">
        <div id="landing" class="row align-items-center py-5 text-center">
            <div
                class="col-12 col-md-4 text-center mb-4 d-flex justify-content-center justify-content-md-end me-5 slide-up">
                <img id="profile-img" src="/images/graduation - college.JPG" class="img-fluid rounded-circle"
                    alt="profile.png" />
            </div>
            <div class="col-12 col-md-7 gap-1 gap-lg-4 text-md-start text-light slide-up"
                style="transition-delay: 0.15s;">
                <h1 class="mb-3">Hi! I'm Mohammad Ali Dimacaling</h1>
                <a><img
                            src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=23&pause=1000&color=F8F9FA&width=435&lines=Full-Stack+Web+Developer"
                            alt="Typing SVG" /></a>
                <div>
                    <a href="#projects"><button class="btn btn-primary about-btn">Explore My Projects</button></a>
                </div>
            </div>
        </div>
    </div>
    <!-- End of About Me -->
</template>

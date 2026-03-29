<script setup>
import { useScrollAnimation } from '../composables/useScrollAnimation';
useScrollAnimation();
</script>

<template>
    <!-- Footer start -->
    <div id="footer" class="container-fluid bg-black pt-3">
        <div id="social" class="row">
            <div id="icons" class="d-flex justify-content-center gap-3 mb-1 slide-up">
                <a href="https://www.facebook.com/mohammadali.dimacaling.58" target="_blank" aria-label="Facebook">
                    <i class="fa-brands fa-facebook text-light social-icon"></i>
                </a>
                <a href="https://www.linkedin.com/in/mohammad-ali-dimacaling/" target="_blank" aria-label="LinkedIn">
                    <i class="fa-brands fa-linkedin text-light social-icon"></i>
                </a>
                <a href="https://github.com/DimaxKun" target="_blank" aria-label="Github">
                    <i class="fa-brands fa-github text-light social-icon"></i>
                </a>
                <a href="https://mail.google.com/mail/?view=cm&to=dimacalingmohammadali@gmail.com" target="_blank" aria-label="Send email">
                    <i class="fa-regular fa-envelope text-light social-icon"></i>
                </a>
            </div>
        </div>
        <div class="text-light text-center py-2 slide-up" style="transition-delay: 0.15s;">
            <p class="my-auto">&copy; 2026 Mohammad Ali Dimacaling</p>
        </div>
    </div>
    <!-- Footer end -->
</template>

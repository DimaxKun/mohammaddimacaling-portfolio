<template>
    <!-- Join Map & Contact Form -->
    <div id="contact" class="row align-items-stretch">
        <h1 class="mt-5 text-center text-light">Contact Us</h1>
        <!-- Map Start -->
        <div id="map" class="col-12 col-md-6 d-flex justify-content-center">
            <div class="col-12 col-md-10 p-3 d-flex flex-column">
                <div id="map-embed" class="flex-grow-1">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61241.05187486076!2d120.51197629339622!3d16.39606934097438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a16879def13f%3A0x8edef534be3a75c0!2sBaguio%2C%20Benguet!5e0!3m2!1sen!2sph!4v1768135355972!5m2!1sen!2sph"
                        style="width: 100%; height: 100%; border: 0;"
                        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
        <!-- Map End -->

        <!-- Contact Form start -->
        <div class="col-12 col-md-6 d-flex justify-content-center justify-content-md-start" id="contact-form">
            <div class="col-12 col-md-10 p-3">
                <form id="form-col" class="bg-black p-3 rounded-2 shadow" @submit.prevent="handleSubmit">
                    <!-- Web3Forms Access Key -->
                    <input type="hidden" name="access_key" :value="accessKey" />

                    <div class="mb-2">
                        <label class="form-label text-white small mb-1">Name</label>
                        <input type="text" v-model="formData.name" name="name" class="form-control form-control-sm"
                            placeholder="Name" required />
                    </div>

                    <div class="mb-2">
                        <label class="form-label text-white small mb-1">Email address</label>
                        <input type="email" v-model="formData.email" name="email" class="form-control form-control-sm"
                            placeholder="name@example.com" required />
                    </div>

                    <div class="mb-3">
                        <label class="form-label text-white small mb-1">Message</label>
                        <textarea v-model="formData.message" name="message" class="form-control form-control-sm"
                            rows="5" required></textarea>
                    </div>

                    <!-- reCAPTCHA -->
                    <div v-if="useRecaptcha" class="mb-3">
                        <div class="g-recaptcha" :data-sitekey="recaptchaSiteKey"></div>
                    </div>

                    <button type="submit" class="btn btn-primary btn-sm" :disabled="isSubmitting">
                        <span v-if="isSubmitting">Sending...</span>
                        <span v-else>Send Email</span>
                    </button>
                </form>
            </div>
        </div>

        <!-- Success Modal -->
        <div class="modal fade" id="successModal" tabindex="-1" aria-labelledby="successModalLabel" aria-hidden="true"
            ref="successModal">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content bg-dark text-light border border-success border-2">
                    <div class="modal-header border-success">
                        <h5 class="modal-title d-flex align-items-center w-100" id="successModalLabel">
                            <i class="fa-solid fa-circle-check text-success me-3 fs-3"></i>
                            <span>Message Sent Successfully!</span>
                        </h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body py-4">
                        <p class="mb-0 ps-5">I've received your message and will get back to you as soon as I can.</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Error Modal -->
        <div class="modal fade" id="errorModal" tabindex="-1" aria-labelledby="errorModalLabel" aria-hidden="true"
            ref="errorModal">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content bg-dark text-light border border-danger border-2">
                    <div class="modal-header border-danger">
                        <h5 class="modal-title d-flex align-items-center w-100" id="errorModalLabel">
                            <i class="fa-solid fa-circle-exclamation text-danger me-3 fs-3"></i>
                            <span>Oops! Something Went Wrong</span>
                        </h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body py-4">
                        <p class="mb-0 ps-5">{{ errorMessage }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Contact section end -->
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Modal } from 'bootstrap';


const accessKey = ref('d8ed7a2f-16cb-448b-a7a7-5e3e8e8699bb');

const recaptchaSiteKey = ref('');

// Enable/disable reCAPTCHA
const useRecaptcha = ref(false); // Set to true when you have a reCAPTCHA key

const formData = ref({
    name: '',
    email: '',
    message: ''
});

const isSubmitting = ref(false);
const errorMessage = ref('');
const successModal = ref(null);
const errorModal = ref(null);

let successModalInstance = null;
let errorModalInstance = null;

onMounted(() => {
    successModalInstance = new Modal(successModal.value);
    errorModalInstance = new Modal(errorModal.value);

    // Load reCAPTCHA script only if enabled
    if (useRecaptcha.value && recaptchaSiteKey.value && !document.querySelector('script[src*="recaptcha"]')) {
        const script = document.createElement('script');
        script.src = 'https://www.google.com/recaptcha/api.js';
        script.async = true;
        script.defer = true;
        script.onerror = () => {
            console.error('Failed to load reCAPTCHA script');
        };
        document.head.appendChild(script);
    }
});

const handleSubmit = async () => {
    isSubmitting.value = true;

    try {
        let recaptchaResponse = '';

        // Only check reCAPTCHA if it's enabled
        if (useRecaptcha.value) {
            // Check if grecaptcha is loaded
            if (typeof grecaptcha === 'undefined') {
                errorMessage.value = 'reCAPTCHA is still loading. Please wait a moment and try again.';
                errorModalInstance.show();
                isSubmitting.value = false;
                return;
            }

            // Get reCAPTCHA response
            recaptchaResponse = grecaptcha.getResponse();

            if (!recaptchaResponse) {
                errorMessage.value = 'Please complete the reCAPTCHA verification.';
                errorModalInstance.show();
                isSubmitting.value = false;
                return;
            }
        }

        // Prepare form data
        const data = {
            access_key: accessKey.value,
            name: formData.value.name,
            email: formData.value.email,
            message: formData.value.message
        };

        // Add reCAPTCHA response if enabled
        if (useRecaptcha.value && recaptchaResponse) {
            data['g-recaptcha-response'] = recaptchaResponse;
        }

        // Submit to Web3Forms
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result.success) {
            // Reset form
            formData.value = {
                name: '',
                email: '',
                message: ''
            };
            
            // Reset reCAPTCHA if available and enabled
            if (useRecaptcha.value && typeof grecaptcha !== 'undefined') {
                grecaptcha.reset();
            }

            // Show success modal
            successModalInstance.show();
        } else {
            errorMessage.value = result.message || 'Failed to send message. Please try again.';
            errorModalInstance.show();
        }
    } catch (error) {
        console.error('Form submission error:', error);
        errorMessage.value = `An error occurred: ${error.message}. Please try again later.`;
        errorModalInstance.show();
    } finally {
        isSubmitting.value = false;
    }
};
</script>

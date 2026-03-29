import { onMounted, onBeforeUnmount } from 'vue';

export function useScrollAnimation(selector = '.slide-up') {
  let observer;

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    // Small delay so elements in the initial viewport animate in rather than snap
    setTimeout(() => {
      document.querySelectorAll(selector).forEach((el) => observer.observe(el));
    }, 100);
  });

  onBeforeUnmount(() => observer?.disconnect());
}

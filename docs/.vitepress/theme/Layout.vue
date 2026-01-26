<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'

const { Layout } = DefaultTheme
const { theme } = useData()
</script>

<template>
  <Layout>
    <template #layout-bottom>
      <footer class="custom-footer">
        <div class="footer-content">
          <p class="footer-message" v-html="theme.footer?.message"></p>
          <p class="footer-copyright" v-html="theme.footer?.copyright"></p>
        </div>
      </footer>
    </template>
  </Layout>
</template>

<style scoped>
.custom-footer {
  /* Full width positioning - break out of parent container */
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;

  /* Styling */
  border-top: 1px solid var(--vp-c-divider);
  padding: 24px;
  background-color: var(--vp-c-bg);

  /* Ensure footer is above any overlapping elements */
  z-index: 10;
}

.footer-content {
  max-width: 1152px;
  margin: 0 auto;
  text-align: center;
  padding: 0 24px;
}

.footer-message {
  font-size: 14px;
  color: var(--vp-c-text-2);
  margin-bottom: 8px;
}

.footer-message :deep(a) {
  color: var(--vp-c-brand-1);
  text-decoration: none;
}

.footer-message :deep(a:hover) {
  text-decoration: underline;
}

.footer-copyright {
  font-size: 14px;
  color: var(--vp-c-text-3);
}

.footer-copyright :deep(a) {
  color: var(--vp-c-text-2);
  text-decoration: none;
}

.footer-copyright :deep(a:hover) {
  text-decoration: underline;
}
</style>

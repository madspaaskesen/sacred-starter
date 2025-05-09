<template>
  <AdminLayout>
    <h1 class="text-2xl font-bold text-error">404 — Page Not Found</h1>
    <p class="mt-2 text-sm text-gray-600">This page doesn't exist or is still unfolding.</p>
    <RouterLink to="/" class="btn btn-sm btn-outline mt-4">Back to Dashboard</RouterLink>
  </AdminLayout>
</template>

<script setup>
import AdminLayout from '../layouts/AdminLayout.vue'
</script>

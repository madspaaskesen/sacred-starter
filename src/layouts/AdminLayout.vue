<template>
  <div class="flex min-h-screen flex-col bg-base-200 text-base-content">
    <AdminTopbar />
    <div class="flex flex-1">
      <AdminSidebar />
      <div class="flex flex-col flex-1">
        <main class="p-6 flex-grow overflow-y-auto">
          <slot />
        </main>
        <BaseFooter />
      </div>
    </div>
  </div>
</template>


<script setup>
import AdminSidebar from '../components/AdminSidebar.vue'
import AdminTopbar from '../components/AdminTopbar.vue'
import BaseFooter from '../components/BaseFooter.vue'
</script>

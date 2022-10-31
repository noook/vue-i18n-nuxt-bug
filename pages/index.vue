<script setup lang="ts">
import { useUserStore } from '~~/store/userStore';

const userStore = useUserStore();
</script>

<template>
  <div class="p-8">
    <h1 class="text-2xl font-semibold">Index page</h1>
    <p class="mt-4">Hello {{ userStore.user.firstName }} {{ userStore.user.lastName}}</p>
  </div>
</template>
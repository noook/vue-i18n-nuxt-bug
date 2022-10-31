<script setup lang="ts">
import { useUserStore } from '~~/store/userStore';

const { t } = useI18n()

const userStore = useUserStore()
</script>

<template>
  <div class="p-8">
    <h1 class="text-2xl font-semibold">Index page</h1>
    <!-- works -->
    <p class="mt-4">{{ t('hello') }} {{ userStore.user.firstName }} {{ userStore.user.lastName}}</p>
    <!-- Prevents the server from crashing -->
    <client-only>
      <!-- Property "$tc" was accessed during render but is not defined on instance  -->
      <p class="mt-4">{{ $tc('hello') }}</p>
    </client-only>
  </div>
</template>
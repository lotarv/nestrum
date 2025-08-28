<script lang="ts" setup>
import ArrowLeft from '@/shared/icons/ArrowLeft.vue';
import { useRouter } from 'vue-router';
const props = defineProps<{
    featName: string
}>()
const router = useRouter()
</script>
<template>
    <div class="flex items-center w-full relative">
        <button class="abolsute left-0 text-white text-2xl" @click="router.back()"><ArrowLeft/></button>
        <h1 class="mx-auto">{{ featName }}</h1>
    </div>
</template>
<style scoped></style>

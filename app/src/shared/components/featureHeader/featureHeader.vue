<script lang="ts" setup>
import ArrowLeft from '@/shared/icons/ArrowLeft.vue';
import { useRouter } from 'vue-router';
const props = defineProps<{
    featName: string
}>()
const router = useRouter()
</script>
<template>
    <button class="abolsute left-0 text-white text-2xl" @click="router.back()"><ArrowLeft/></button>
    <div class="flex items-center w-full relative">
        <h1 class="text-center flex-1 font-bold">{{ featName }}</h1>
    </div>
</template>
<style scoped></style>

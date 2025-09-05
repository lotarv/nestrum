<script lang="ts" setup>
import featureHeader from '@/shared/components/featureHeader/featureHeader.vue';
import TimePicker from './ui/TimePicker.vue';
</script>
<template>
    <main>
        <featureHeader feat-name="Timer"></featureHeader>
        <div class="mb-2"></div>
        <TimePicker></TimePicker>
    </main>
</template>
<style scoped></style>
<script lang="ts" setup>
import featureHeader from '@/shared/components/featureHeader/featureHeader.vue';
import ref from 'vue'
</script>
<template>
    <main>
        <featureHeader feat-name="Stopwatch"></featureHeader>
        <div class="flex flex-col justify-start h-[800px] relative">
            <div class="stopwatch">
                <p class="text-5xl font-bold">00:00:00</p>
                <div class="flex gap-2 justify-center">
                    <button class="btn-start">START</button>
                    <button>RESET</button>
                </div>
            </div>
        </div>
    </main>
</template>
<style scoped>
.stopwatch{
    display:flex;
    flex-direction: column;
    gap:20px;
    padding: 10rem 0;
    background-image: url('@/features/stopwatch/assets/stopwatch.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain; /* или cover, если нужно растянуть */
}

button {
    @apply  py-2 px-4 bg-[#121619] rounded-[10px];
}
.btn-start {
    @apply text-[#68a79f]
}
</style>
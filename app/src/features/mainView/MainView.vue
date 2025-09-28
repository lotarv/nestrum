<script lang="ts" setup>
import { useRouter } from 'vue-router';
const router = useRouter()
</script>
<template>
    <main class="main-view">
        <h1 class="text-white font-semibold">Nestrum</h1>
        <div class="features">
            <div class="feature" @click="router.push('/stopwatch')">
                <img src="./assets/clock.png" class="w-10 h-10" alt="">
                <p>Stopwatch</p>
            </div>
            <div class="feature" @click="router.push('/timer')">
                <img src="./assets/timer.png" alt="">
                <p>Timer</p>
            </div>
            <div class="feature" @click="router.push('/calendar')">
                <img src="./assets/calendar.png" alt="">
                <p>Calendar</p>
            </div>
            <div class="feature">
                <img src="./assets/to-do.png" alt="">
                <p>ToDo List</p>
            </div>
        </div>
    </main>
</template>
<style scoped>
.main-view {
    @apply gap-10
}
.features {
    @apply grid grid-cols-3 gap-2 place-items-center
}
.feature {
    @apply flex flex-col items-center gap-2
}

.feature img {
    @apply w-10 h-10;
}
</style>
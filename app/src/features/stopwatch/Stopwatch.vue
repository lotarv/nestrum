<script lang="ts" setup>
import featureHeader from '@/shared/components/featureHeader/featureHeader.vue';
import { RefSymbol } from '@vue/reactivity';
import { ref } from 'vue';

const timeString = ref<string>("00:00:00")
const interval = ref<number | null>(null)
const startTime = ref<number | null>(null)
const elapsedTime  = ref<number>(0)
const btnState = ref<string>("start")

function handleMainButton() {
    if (btnState.value == 'start') {
        handleStart()
    } else {
        handleStop()
    }
}
function handleStart() {
    if (startTime.value == null) {
        startTime.value = Date.now()
    }  else {
        startTime.value = Date.now() - elapsedTime.value
    }
    interval.value = setInterval(() => {
        elapsedTime.value = Date.now() - startTime.value!
        timeString.value = formatTime(elapsedTime.value)
    },10)
    btnState.value = "stop"
}
function handleReset() {
    if (interval.value) clearInterval(interval.value)
    if (startTime.value) startTime.value = null
    if (elapsedTime.value) elapsedTime.value = 0
    timeString.value = "00:00:00"
    btnState.value = 'start'
}

function handleStop() {
    if (interval.value) clearInterval(interval.value)
    btnState.value = "start"
}

function formatTime(ms: number): string {
  const totalSeconds = Math.floor(ms / 1000)
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0')
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0')
  const seconds = String(totalSeconds % 60).padStart(2, '0')
  const millisconds = String(Math.floor(ms % 1000 / 10)).padStart(2, '0')
  return `${minutes}:${seconds}:${millisconds}`
}


</script>
<template>
    <main>
        <featureHeader feat-name="Stopwatch"></featureHeader>
        <div class="flex flex-col justify-start h-[800px] relative">
            <div class="stopwatch">
                <p class="text-5xl font-bold">{{ timeString }}</p>
                <div class="flex gap-2 justify-center">
                    <button :class="btnState == 'start'?'btn-start':'btn-stop' " @click="handleMainButton">{{ btnState }}</button>
                    <button @click="handleReset()">RESET</button>
                </div>
            </div>
        </div>
    </main>
</template>
<style scoped>
.stopwatch{
    background-image: url('@/features/stopwatch/assets/stopwatch.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    @apply flex flex-col gap-4 py-[9rem]
}

button {
    @apply  py-2 px-4 bg-[#121619] rounded-[10px] uppercase;
}
.btn-start {
    @apply text-[#68a79f]
}
.btn-stop {
    @apply text-[#e74d62]
}
</style>
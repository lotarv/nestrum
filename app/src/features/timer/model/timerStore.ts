import { defineStore } from "pinia";
import { ref } from "vue";

const useTimerStore = defineStore("timer", () => {
    const timerTime = ref<number>(0)
})
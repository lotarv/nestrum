<script lang="ts" setup>
import { ref } from 'vue'
import { VueScrollPicker } from 'vue-scroll-picker'
import "vue-scroll-picker/style.css";
const hours = Array.from({length:24}, (_, i) => String(i).padStart(2,'0'))
const minutes = Array.from({length:60}, (_, i) => String(i).padStart(2,'0'))
const seconds = Array.from({length:60}, (_, i) => String(i).padStart(2,'0'))

const options = [
  { name: 'Option 1', value: 1 },
  { name: 'Option 2', value: 2 },
  { name: 'Option 3', value: 3 },
]
const selectedHours = ref(0)
const selectedMinutes = ref(0)
const selectedSeconds = ref(0)

</script>
<template>
    <div class="flex flex-col gap-10">
        <div class="grid grid-cols-3 gap-5 text-2xl">
            <VueScrollPicker :options="hours" v-model="selectedHours"/>
            <VueScrollPicker :options="minutes" v-model="selectedMinutes" />
            <VueScrollPicker :options="seconds" v-model="selectedSeconds" />
            <span>hrs</span>
            <span>min</span>
            <span>sec</span>
        </div>
        <button>start</button>
    </div>
</template>
<style>


.vue-scroll-picker-item-selected{
 color:white;
 background: #000;
}
.vue-scroll-picker-item {
  color: #aaa !important;
}


.vue-scroll-picker-layer-selection{
    background-color: hsla(0, 0%, 100%, 0.2);
    padding:none !important;
    border-radius: 15px;

}

.vue-scroll-picker-layer-top,
.vue-scroll-picker-layer-bottom {
    background: none !important;
    display: none !important;
}
</style>

<style scoped>
button {
    @apply py-2 px-4 rounded-[10px] uppercase;
    background-color: hsla(0, 0%, 100%, 0.1);

}
</style>
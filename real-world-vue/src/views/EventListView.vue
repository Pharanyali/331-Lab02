<script setup lang="ts">
import EventCard from '../components/EventCard.vue'
import type { EventItem } from '@/type';
import EventCard2 from '@/components/EventCard2.vue';
import axios from 'axios'
import { ref } from 'vue'
import type { Ref } from 'vue'
const events: Ref<Array<EventItem>> = ref ([])
  axios.get<EventItem[]>('http://localhost:3004/events')
  .then((response) => {
    events.value = response.data
  })
</script>

<template>
  <h1>Events For Good</h1>
  <main class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event"></EventCard>
  </main>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.events2 {
  display: flex;
  flex-direction: column;
  text-align: right;
  align-items: center;
}
</style>

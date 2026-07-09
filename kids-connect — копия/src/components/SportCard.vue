<template>
  <div class="card" @click="$emit('click')">
    <div class="card-img">
      <div v-if="sport.image" class="card-img-real">
        <img :src="sport.image" :alt="sport.title" />
      </div>
      <div v-else class="card-img-placeholder">
        <svg viewBox="0 0 24 24" fill="none" stroke="#999" stroke-width="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
      </div>
    </div>

    <div class="card-body">
      <div class="card-header">
        <div>
          <div class="card-title">{{ sport.title }}</div>
          <div v-if="sport.subtitle" class="card-subtitle">
            {{ sport.subtitle }}
          </div>
        </div>
      </div>

      <div class="card-tag">{{ sport.tag }}</div>

      <div class="card-badges">
        <span
          v-for="(badge, i) in sport.badges"
          :key="i"
          :class="['badge', `badge-${badge.type}`]"
        >
          {{ badge.text }}
        </span>
      </div>

      <div class="card-info">👤 {{ sport.age }}</div>
      <div class="card-info"> {{ sport.address }}</div>
      <div class="card-info">📍 {{ sport.place }}</div>

      <div class="card-schedule">
        <span class="schedule-days">🕐 {{ sport.days }}</span>
        <span v-for="time in sport.times" :key="time" class="time-slot">
          {{ time }}
        </span>
      </div>
    </div>

    <div class="card-action">
      <button class="btn-details">Подробнее</button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  sport: { type: Object, required: true },
})
defineEmits(['click'])
</script>

<style scoped>
.card {
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 16px;
  display: flex;
  gap: 20px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
  border-top: 3px solid #6b2d3e;
  cursor: pointer;
  transition: box-shadow 0.2s;
}
.card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}
.card-img {
  width: 140px;
  height: 120px;
  flex-shrink: 0;
}
.card-img-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #ccc, #bbb);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}
.card-img-placeholder svg {
  width: 60px;
  height: 60px;
  opacity: 0.5;
}
.card-img-real {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
}
.card-img-real img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card-body {
  flex: 1;
  min-width: 0;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 4px;
}
.card-title {
  font-size: 16px;
  font-weight: 700;
  color: #222;
}
.card-subtitle {
  font-size: 13px;
  color: #888;
}
.card-tag {
  font-size: 12px;
  color: #c06070;
  margin-bottom: 8px;
}
.card-badges {
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
  flex-wrap: wrap;
}
.badge {
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
}
.badge-free {
  background: #d4727e;
  color: #fff;
}
.badge-first-free {
  background: #fff;
  color: #6b2d3e;
  border: 1px solid #d4727e;
}
.badge-price {
  background: #d4727e;
  color: #fff;
}
.card-info {
  font-size: 13px;
  color: #555;
  margin-bottom: 4px;
}
.card-schedule {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
  flex-wrap: wrap;
}
.schedule-days {
  font-size: 13px;
  color: #555;
}
.time-slot {
  padding: 4px 12px;
  background: #f5d5a8;
  border-radius: 6px;
  font-size: 12px;
  color: #555;
  font-weight: 500;
}
.card-action {
  display: flex;
  align-items: flex-end;
  flex-shrink: 0;
}
.btn-details {
  padding: 10px 24px;
  background: #6b2d3e;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  font-weight: 600;
  white-space: nowrap;
  transition: background 0.2s;
}
.btn-details:hover {
  background: #5a2535;
}
</style>
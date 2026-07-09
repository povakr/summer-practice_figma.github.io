<template>
  <div class="detail-container">
    <div class="back-bar">
      <button class="btn-back" @click="$router.push('/')">← Назад</button>
      <button class="map-btn">📍 На карте</button>
    </div>

    <h2 class="section-title">{{ detail.title }}</h2>

    <!-- Hero -->
    <div class="detail-hero">
      <div class="detail-hero-img">
        <img
          v-if="detail.image"
          :src="detail.image"
          :alt="detail.title"
        />
        <div v-else class="img-fallback">🏃</div>
      </div>
      <div class="detail-hero-body">
        <div class="detail-badges">
          <span
            v-for="(badge, i) in detail.badges"
            :key="i"
            :class="['badge', `badge-${badge.type}`]"
          >
            {{ badge.text }}
          </span>
        </div>
        <div class="detail-info"> {{ detail.age }}</div>
        <div class="detail-info">🏠 {{ detail.address }}</div>
        <div class="detail-info"> {{ detail.place }}</div>
        <button class="btn-enroll">Записаться</button>
      </div>
    </div>

    <!-- Groups & Schedule -->
    <div class="detail-section">
      <div class="groups-grid">
        <div class="group-info">
          <div class="detail-section-title">Группы</div>
          <h4>{{ detail.groups.name }}</h4>
          <div class="group-detail">👩 {{ detail.groups.coach }}</div>
          <div class="group-detail">👥 {{ detail.groups.spots }}</div>
          <div class="group-detail">📅 {{ detail.groups.duration }}</div>
        </div>
        <div class="group-info">
          <div class="detail-section-title">Расписание занятий</div>
          <div class="schedule-block">
            <div class="schedule-row">🕐 {{ detail.schedule.days }}</div>
            <div class="schedule-row">
              <span
                v-for="time in detail.schedule.times"
                :key="time"
                class="time-slot"
              >
                {{ time }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Description -->
    <div class="detail-section">
      <div class="detail-section-title">Описание</div>
      <p class="description-text">{{ detail.description }}</p>
    </div>

    <!-- Program -->
    <div class="detail-section">
      <div class="detail-section-title">Содержание программы</div>

      <div
        v-for="(item, index) in detail.program"
        :key="index"
        class="accordion"
      >
        <div class="accordion-header" @click="toggleAccordion(index)">
          <h4>{{ item.title }}</h4>
          <span class="accordion-toggle" :class="{ open: openAccordions[index] }">
            ▼
          </span>
        </div>
        <div
          class="accordion-content"
          :class="{ open: openAccordions[index] }"
          v-html="item.content"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { detailData } from '../data/sports'

const detail = detailData
const openAccordions = reactive({})

function toggleAccordion(index) {
  openAccordions[index] = !openAccordions[index]
}
</script>

<style scoped>
.detail-container {
  max-width: 900px;
  margin: 20px auto;
  padding: 0 20px;
}
.back-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}
.btn-back {
  display: flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  font-size: 14px;
  color: #6b2d3e;
  cursor: pointer;
  font-weight: 600;
}
.btn-back:hover {
  text-decoration: underline;
}
.map-btn {
  padding: 8px 18px;
  border-radius: 8px;
  border: 1px solid #ddd;
  background: #fff;
  cursor: pointer;
  font-size: 14px;
  color: #555;
}
.section-title {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 16px;
  color: #222;
}
.detail-hero {
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  gap: 24px;
  margin-bottom: 20px;
  border-top: 3px solid #6b2d3e;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
}
.detail-hero-img {
  width: 220px;
  height: 160px;
  border-radius: 10px;
  overflow: hidden;
  flex-shrink: 0;
}
.detail-hero-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.img-fallback {
  width: 100%;
  height: 100%;
  background: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-size: 48px;
}
.detail-hero-body {
  flex: 1;
}
.detail-badges {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
  flex-wrap: wrap;
}
.badge {
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
}
.badge-open {
  background: #fff;
  color: #6b2d3e;
  border: 1px solid #6b2d3e;
}
.badge-free {
  background: #d4727e;
  color: #fff;
}
.detail-info {
  font-size: 14px;
  color: #555;
  margin-bottom: 6px;
}
.btn-enroll {
  padding: 12px 32px;
  background: #6b2d3e;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  margin-top: 16px;
  transition: background 0.2s;
}
.btn-enroll:hover {
  background: #5a2535;
}
.detail-section {
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 16px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
}
.detail-section-title {
  font-size: 16px;
  font-weight: 700;
  color: #6b2d3e;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 16px;
}
.groups-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.group-info h4 {
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 8px;
  color: #333;
}
.group-detail {
  font-size: 13px;
  color: #555;
  margin-bottom: 4px;
}
.schedule-block {
  margin-top: 8px;
}
.schedule-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
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
.description-text {
  font-size: 14px;
  color: #555;
  line-height: 1.6;
}
.accordion {
  border-bottom: 1px solid #eee;
}
.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 12px 0;
}
.accordion-header h4 {
  font-size: 15px;
  font-weight: 700;
  color: #333;
}
.accordion-toggle {
  font-size: 18px;
  color: #999;
  transition: transform 0.3s;
}
.accordion-toggle.open {
  transform: rotate(180deg);
}
.accordion-content {
  padding: 0 0 12px 0;
  font-size: 13px;
  color: #555;
  line-height: 1.7;
  display: none;
}
.accordion-content.open {
  display: block;
}
.accordion-content ul {
  padding-left: 20px;
  margin-bottom: 8px;
}
.accordion-content li {
  margin-bottom: 2px;
}
@media (max-width: 700px) {
  .detail-hero {
    flex-direction: column;
  }
  .detail-hero-img {
    width: 100%;
    height: 200px;
  }
  .groups-grid {
    grid-template-columns: 1fr;
  }
}
</style>
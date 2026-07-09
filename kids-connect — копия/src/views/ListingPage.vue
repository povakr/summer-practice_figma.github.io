<template>
  <div class="main-container">
    <div class="content-area">
      <!-- Toolbar -->
      <div class="toolbar">
        <div class="search-box">
          <span class="search-icon">🔍</span>
          <input type="text" placeholder="Поиск" v-model="searchQuery" />
        </div>
        <div class="filter-tabs">
          <button
            v-for="tab in tabs"
            :key="tab.value"
            class="filter-tab"
            :class="{ active: activeFilter === tab.value }"
            @click="activeFilter = tab.value"
          >
            {{ tab.label }}
          </button>
        </div>
        <button class="map-btn">📍 На карте</button>
      </div>

      <!-- Cards by section -->
      <template v-for="section in filteredSections" :key="section.name">
        <h2 class="section-title">{{ section.name }}</h2>
        <SportCard
          v-for="sport in section.items"
          :key="sport.id"
          :sport="sport"
          @click="goToDetail(sport.id)"
        />
      </template>
    </div>

    <div class="sidebar">
      <Sidebar />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import SportCard from '../components/SportCard.vue'
import Sidebar from '../components/Sidebar.vue'
import { sports } from '../data/sports'

const router = useRouter()
const searchQuery = ref('')
const activeFilter = ref('all')

const tabs = [
  { label: 'Все', value: 'all' },
  { label: 'Платные', value: 'paid' },
  { label: 'Бесплатные', value: 'free' },
]

const filteredSports = computed(() => {
  let result = sports

  if (activeFilter.value !== 'all') {
    result = result.filter((s) => s.type === activeFilter.value)
  }

  if (searchQuery.value) {
    const q = searchQuery.value.toLowerCase()
    result = result.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.tag.toLowerCase().includes(q) ||
        s.place.toLowerCase().includes(q)
    )
  }

  return result
})

const filteredSections = computed(() => {
  const sections = {}
  filteredSports.value.forEach((sport) => {
    if (!sections[sport.section]) {
      sections[sport.section] = { name: sport.section, items: [] }
    }
    sections[sport.section].items.push(sport)
  })
  return Object.values(sections)
})

function goToDetail(id) {
  router.push({ name: 'Detail', params: { id } })
}
</script>

<style scoped>
.main-container {
  max-width: 1200px;
  margin: 20px auto;
  display: flex;
  gap: 20px;
  padding: 0 20px;
}
.content-area {
  flex: 1;
  min-width: 0;
}
.sidebar {
  width: 280px;
  flex-shrink: 0;
}
.toolbar {
  background: #f5f5f5;
  border-radius: 12px;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}
.search-box {
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 8px;
  padding: 8px 14px;
  flex: 1;
  min-width: 200px;
  border: 1px solid #ddd;
}
.search-box input {
  border: none;
  outline: none;
  font-size: 14px;
  width: 100%;
  background: transparent;
  margin-left: 8px;
}
.filter-tabs {
  display: flex;
  gap: 4px;
}
.filter-tab {
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 14px;
  color: #555;
  transition: all 0.2s;
}
.filter-tab.active {
  background: #fff;
  color: #333;
  font-weight: 600;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
.filter-tab:hover {
  background: #fff;
}
.map-btn {
  margin-left: auto;
  padding: 8px 18px;
  border-radius: 8px;
  border: 1px solid #ddd;
  background: #fff;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
  color: #555;
}
.section-title {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 16px;
  margin-top: 8px;
  color: #222;
}
@media (max-width: 900px) {
  .main-container {
    flex-direction: column;
  }
  .sidebar {
    width: 100%;
  }
}
</style>
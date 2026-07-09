<template>
  <div class="sidebar-box">
    <div class="sidebar-title">Фильтры</div>

    <div class="filter-group">
      <div class="filter-label">Возраст</div>
      <select class="filter-select" v-model="age">
        <option>Любой</option>
        <option>6-10 лет</option>
        <option>10-14 лет</option>
        <option>14-18 лет</option>
      </select>
    </div>

    <div class="filter-group">
      <div class="filter-label">Пол</div>
      <div class="checkbox-group">
        <label class="checkbox-label">
          <input type="checkbox" v-model="gender.male" /> Мужской
        </label>
        <label class="checkbox-label">
          <input type="checkbox" v-model="gender.female" /> Женский
        </label>
      </div>
    </div>

    <div class="filter-group">
      <div class="filter-label">Каталог</div>
      <ul class="catalog-list">
        <li
          v-for="cat in categories"
          :key="cat.name"
          class="catalog-item"
          :class="{ active: cat.open }"
          @click="cat.open = !cat.open"
        >
          {{ cat.name }}
          <span v-if="cat.count" class="count">{{ cat.count }}</span>
          <span class="catalog-arrow" :class="{ open: cat.open }">▼</span>
        </li>
        <template v-for="cat in categories" :key="'sub-' + cat.name">
          <div v-if="cat.open && cat.children" class="catalog-sub">
            <li
              v-for="child in cat.children"
              :key="child.name"
              class="catalog-item"
            >
              {{ child.name }}
              <span v-if="child.count" class="count">{{ child.count }}</span>
            </li>
          </div>
        </template>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const age = 'Любой'
const gender = reactive({ male: true, female: true })

const categories = reactive([
  {
    name: 'Силовой спорт',
    count: 3,
    open: true,
    children: [
      { name: 'Тяжелая атлетика', count: 3 },
      { name: 'Пауэрлифтинг', count: 1 },
    ],
  },
  {
    name: 'Единоборства',
    count: 2,
    open: false,
    children: [
      { name: 'Вольная борьба', count: 1 },
      { name: 'Дзюдо', count: 1 },
    ],
  },
  { name: 'ДПИ и ремёсла', open: false },
  { name: 'Техническое конструирование', open: false },
  { name: 'Словесность', open: false },
  { name: 'Иностранные языки', open: false },
  { name: 'Развитие интеллекта', open: false },
  { name: 'Информационные технологии', open: false },
  { name: 'История и традиции', open: false },
  { name: 'Педагогика', open: false },
  { name: 'Музыка и звук', open: false },
  { name: 'Пение', open: false },
  { name: 'Хореография (танцы)', open: false },
  { name: 'Зрелищные искусства', open: false },
  { name: 'Мода и стиль', open: false },
  { name: 'Познавательные развлечения', open: false },
  { name: 'Туризм', open: false },
  { name: 'Естественные науки', open: false },
  { name: 'Люди и животные', open: false },
  { name: 'Эстетические виды спорта', open: false },
  { name: 'Технические виды спорта', open: false },
  { name: 'Командно-игровой спорт', open: false },
  { name: 'Индивидуально игровой спорт', open: false },
  { name: 'Водные виды спорта', open: false },
  { name: 'Лёгкая атлетика и гимнастика', open: false },
  { name: 'Физкультура', open: false },
])
</script>

<style scoped>
.sidebar-box {
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
}
.sidebar-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 16px;
}
.filter-group {
  margin-bottom: 16px;
}
.filter-label {
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 8px;
  color: #333;
}
.filter-select {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  background: #fff;
  outline: none;
  cursor: pointer;
}
.checkbox-group {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}
.checkbox-label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  cursor: pointer;
}
.checkbox-label input {
  accent-color: #6b2d3e;
  width: 16px;
  height: 16px;
}
.catalog-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.catalog-item {
  padding: 6px 0;
  font-size: 14px;
  color: #555;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
}
.catalog-item:hover {
  color: #6b2d3e;
}
.catalog-item.active {
  color: #6b2d3e;
  font-weight: 600;
}
.catalog-item .count {
  color: #999;
  font-size: 13px;
}
.catalog-sub {
  padding-left: 16px;
}
.catalog-sub .catalog-item {
  font-size: 13px;
  padding: 4px 0;
}
.catalog-arrow {
  font-size: 12px;
  color: #999;
  transition: transform 0.2s;
}
.catalog-arrow.open {
  transform: rotate(180deg);
}
</style>
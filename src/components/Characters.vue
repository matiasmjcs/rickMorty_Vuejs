<script setup lang="ts">
import {GetCharacters} from '../services/Get-Characters'
import { useQuery } from "@tanstack/vue-query"; 
const { data } = useQuery({ queryKey: ['Characters'], queryFn: GetCharacters })
</script>
<template>
  <div class="character-grid">
    <div v-for="character in data" :key="character.id" class="character-card">
      <img :src="character.image" alt="Character Image" class="character-image">
      <div class="character-info">
        <h1 class="character-name">{{ character.name }}</h1>
        <div class="character-details">
          <div class="character-details-row">
            <p class="character-status">{{ character.status }}</p>
            <p class="character-species">{{ character.species }}</p>
          </div>
          <div class="character-details-row">
            <p class="character-gender">{{ character.gender }}</p>
            <p class="character-location">
              Location: <a :href="character.location.url">{{ character.location.name }}</a>
            </p>
          </div>
          <div class="character-details-row">
            <p class="character-origin">
              Origin: <a :href="character.origin.url">{{ character.origin.name }}</a>
            </p>
            <p class="character-type" v-if="character.type">
              Type: {{ character.type }}
            </p>
            <p class="character-type" v-else>
              Type: Unknown
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.character-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.character-card {
  display: flex;
  padding: 10px;
  background-color: #fff;
  border-radius: 16px;

}

.character-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 10px;
}

.character-info {
  flex: 1;
}

.character-name {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
}

.character-details {
  display: flex;
  flex-direction: column;
}

.character-details-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
}

.character-status,
.character-species,
.character-gender,
.character-location,
.character-origin,
.character-type {
  margin: 0;
}

.character-location a,
.character-origin a {
  color: blue;
  text-decoration: underline;
}

@media (max-width: 767px) {
  .character-grid {
    grid-template-columns: 1fr;
  }
}
</style>

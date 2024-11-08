<template>
  <div class="works-page">
    <h1>Musical Works</h1>
    
    <div class="categories">
      <button 
        v-for="cat in categories" 
        :key="cat"
        :class="['category-btn', { active: activeCategory === cat }]"
        @click="activeCategory = cat"
      >
        {{ cat }}
      </button>
    </div>

    <div class="works-grid">
      <div v-for="work in filteredWorks" :key="work.title" class="work-card">
        <div class="work-info">
          <h3>{{ work.title }}</h3>
          <p class="year">{{ work.year }}</p>
          <p class="description">{{ work.description }}</p>
          <div class="tags">
            <span class="tag">{{ work.category }}</span>
            <span class="tag">{{ work.duration }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeCategory: 'All',
      categories: ['All', 'Orchestral', 'Chamber', 'Solo Piano', 'Vocal'],
      works: [
        {
          title: 'Symphony No. 1 "Elements"',
          year: 2023,
          category: 'Orchestral',
          duration: '45 min',
          description: 'A four-movement symphony exploring the classical elements.'
        },
        {
          title: 'String Quartet No. 2',
          year: 2022,
          category: 'Chamber',
          duration: '28 min',
          description: 'Commissioned by the Kronos Quartet.'
        },
        // Add more works as needed
      ]
    }
  },
  computed: {
    filteredWorks() {
      if (this.activeCategory === 'All') return this.works
      return this.works.filter(work => work.category === this.activeCategory)
    }
  }
}
</script>

<style scoped>
.works-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
}

.categories {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
}

.category-btn {
  padding: 0.5rem 1.5rem;
  border: none;
  background: #f5f5f5;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.category-btn.active {
  background: var(--primary-color);
  color: white;
}

.works-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.work-card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.work-info h3 {
  margin: 0 0 0.5rem 0;
}

.year {
  color: var(--primary-color);
  font-weight: bold;
  margin: 0.5rem 0;
}

.description {
  margin: 1rem 0;
  line-height: 1.4;
}

.tags {
  display: flex;
  gap: 0.5rem;
}

.tag {
  background: #f5f5f5;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
}
</style>
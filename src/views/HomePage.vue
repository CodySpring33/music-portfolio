<template>
  <div class="home-page">
    <div class="hero">
      <h1>Jack Conklin</h1>
      <p class="subtitle">Composer • Conductor • Educator</p>
    </div>

    <div class="upcoming-events">
      <h2>Upcoming Performances</h2>
      <div class="events-list">
        <div class="event">
          <div class="event-date">MAR 15</div>
          <div class="event-details">
            <h3>Carnegie Hall Debut</h3>
            <p>New York City, USA</p>
          </div>
        </div>
        <div class="event">
          <div class="event-date">APR 22</div>
          <div class="event-details">
            <h3>Royal Albert Hall Concert</h3>
            <p>London, UK</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-page {
  max-width: 1200px;
  margin: 0 auto;
}

.hero {
  text-align: center;
  padding: 4rem 0;
  background: linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)),
              url('https://picsum.photos/1200/400') center/cover;
  margin-bottom: 4rem;
}

.hero h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.5rem;
  color: var(--text-color);
  opacity: 0.8;
}

.featured-works, .upcoming-events {
  margin-bottom: 4rem;
}

h2 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
}

.works-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 0 1rem;
}

.work-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.work-card:hover {
  transform: translateY(-5px);
}

.work-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.work-card h3, .work-card p {
  padding: 1rem;
  margin: 0;
}

.events-list {
  max-width: 800px;
  margin: 0 auto;
}

.event {
  display: flex;
  align-items: center;
  padding: 1.5rem;
  margin-bottom: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.event-date {
  font-size: 1.2rem;
  font-weight: bold;
  padding-right: 2rem;
  color: var(--primary-color);
}

.event-details h3 {
  margin: 0;
  font-size: 1.2rem;
}

.event-details p {
  margin: 0.5rem 0 0;
  color: #666;
}
</style>

<script>
export default {
  name: 'HomePage'
}
</script>
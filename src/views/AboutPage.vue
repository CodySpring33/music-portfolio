<template>
  <div class="about-page">
    <div class="profile-section">
      <img src="https://picsum.photos/300/300" alt="John Smith" class="profile-image">
      <div class="bio">
        <h1>About Me</h1>
        <p>John Smith is an award-winning composer and pianist based in New York City. His works have been performed by major orchestras worldwide, including the London Symphony Orchestra, Berlin Philharmonic, and New York Philharmonic.</p>
        <p>A graduate of Juilliard School, John's compositions blend traditional classical forms with contemporary innovations, creating a unique voice in modern classical music.</p>
        
        <div class="achievements">
          <h2>Awards & Recognition</h2>
          <ul>
            <li>2023 Pulitzer Prize Finalist</li>
            <li>2022 Grammy Nomination - Best Contemporary Classical Composition</li>
            <li>2021 Royal Philharmonic Society Award</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
}

.profile-section {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 3rem;
  align-items: start;
}

.profile-image {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.bio h1 {
  margin-top: 0;
  font-size: 2.5rem;
}

.bio p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.achievements {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #eee;
}

.achievements h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.achievements ul {
  list-style-type: none;
  padding: 0;
}

.achievements li {
  margin-bottom: 0.8rem;
  padding-left: 1.5rem;
  position: relative;
}

.achievements li::before {
  content: "•";
  color: var(--primary-color);
  position: absolute;
  left: 0;
}

@media (max-width: 768px) {
  .profile-section {
    grid-template-columns: 1fr;
  }
  
  .profile-image {
    max-width: 300px;
    margin: 0 auto;
  }
}
</style>

<script>
export default {
  name: 'AboutPage'
}
</script>
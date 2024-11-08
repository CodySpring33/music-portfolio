<template>
    <div class="contact-page">
      <h1>Contact</h1>
      <div class="contact-content">
        <div class="contact-info">
          <h2>Get in Touch</h2>
          <p>For performance inquiries, collaborations, or score purchases:</p>
          <a href="mailto:john.smith@example.com" class="email-link">
            <i class="fas fa-envelope"></i> john.smith@example.com
          </a>
        </div>

        <div class="social-links">
          <h2>Connect with me</h2>
          <div class="social-grid">
            <a href="https://instagram.com/username" target="_blank" class="social-link">
              <i class="fab fa-instagram"></i> Instagram
            </a>
            <a href="https://youtube.com/username" target="_blank" class="social-link">
              <i class="fab fa-youtube"></i> YouTube
            </a>
            <a href="https://spotify.com/artist/username" target="_blank" class="social-link">
              <i class="fab fa-spotify"></i> Spotify
            </a>
            <a href="https://soundcloud.com/username" target="_blank" class="social-link">
              <i class="fab fa-soundcloud"></i> SoundCloud
            </a>
          </div>
        </div>

        <div class="representation">
          <h2>Professional Representation</h2>
          <div class="rep-info">
            <p><strong>Management:</strong> Classical Artists Management</p>
            <p><strong>Publishing:</strong> Universal Edition</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .contact-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  .contact-content {
    display: grid;
    gap: 3rem;
  }
  
  .contact-info, .social-links, .representation {
    text-align: center;
    padding: 2rem;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
  
  .email-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--primary-color);
    text-decoration: none;
    font-size: 1.2rem;
    margin-top: 1rem;
  }
  
  .social-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-top: 1.5rem;
  }
  
  .social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 1rem;
    background: #f5f5f5;
    border-radius: 8px;
    text-decoration: none;
    color: var(--text-color);
    transition: all 0.3s ease;
  }
  
  .social-link:hover {
    background: var(--primary-color);
    color: white;
    transform: translateY(-2px);
  }
  
  .rep-info {
    margin-top: 1.5rem;
  }
  
  .rep-info p {
    margin: 0.5rem 0;
  }
  </style>
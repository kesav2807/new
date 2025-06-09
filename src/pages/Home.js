import React from 'react';
import kesavanImage from '../assets/my img.jpg'; 

function Home() {
  return (
    <section className="home-container">
      <div className="intro-section">
        <img
          src={kesavanImage}
          alt="Kesavan"
          className="profile-pic"
        />
        <div className="intro-text">
          <h1>Hello, I'm <span className="highlight">Kesavan</span></h1>
          <p className="tagline">
            Full-stack developer | Photography Enthusiast | Solo Traveler | Music Lover 🎧
          </p>
          <p className="welcome-msg">
            Welcome to my personal space where I share my work, passion, and tales.
            Let's build something amazing together!
          </p>
        </div>
      </div>

      <div className="tales-section">
        <h2>My Personality Tales</h2>
        <ul>
          <li><strong>Photography & Video Editing:</strong> Capturing moments and crafting stories frame by frame.</li>
          <li><strong>Solo Rider:</strong> Exploring new places with freedom and thrill on my bike.</li>
          <li><strong>Music Vibes:</strong> Always tuned to breakup songs on my headphones while coding or gaming.</li>
          <li><strong>Design Lover:</strong> Passionate about UI/UX design and creating smooth user experiences.</li>
        </ul>
      </div>
    </section>
  );
}

export default Home;

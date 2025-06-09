import React from 'react';

function About() {
  return (
    <section className="about-container">
      <h1>About Me</h1>
      <p>
        Hi, I'm <strong>Kesavan</strong> — a passionate full-stack developer who
        loves crafting clean, responsive, and beautiful web and mobile applications.
      </p>

      <p>
        I have a keen interest in photography, video editing, solo traveling, and
        creating smooth user experiences through UI/UX design.
      </p>

      <h2>My Skills</h2>
      <div className="skills-grid">
        <div className="skill-card">
          <h3>Frontend</h3>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>React.js, React Native</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
        <div className="skill-card">
          <h3>Backend</h3>
          <ul>
            <li>Node.js, Express.js</li>
            <li>MongoDB, Mongoose</li>
            <li>JWT Authentication</li>
          </ul>
        </div>
        <div className="skill-card">
          <h3>Tools & Others</h3>
          <ul>
            <li>Git, VS Code, Postman</li>
            <li>Android Studio</li>
            <li>Razorpay Integration</li>
            <li>UI/UX Design (Figma, Canva)</li>
          </ul>
        </div>
      </div>

      <h2>Passions & Interests</h2>
      <p>
        Beyond coding, I enjoy capturing moments through photography and video editing, exploring new places on solo rides, and listening to music that fuels my creativity.
      </p>
    </section>
  );
}

export default About;

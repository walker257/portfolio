import React from 'react';

const Portfolio = () => {
  return (
    <div>
      <header>
        <h1>My Professional Portfolio</h1>
        <p>Welcome to my portfolio website!</p>
      </header>
      <section>
        <h2>About Me</h2>
        <p>Hello! I'm a passionate developer with experience in building web applications.</p>
      </section>
      <section>
        <h2>Projects</h2>
        <ul>
          <li>
            <h3>Project 1</h3>
            <p>Description of project 1.</p>
            <a href="https://github.com/yourusername/project1">GitHub Link</a>
          </li>
          <li>
            <h3>Project 2</h3>
            <p>Description of project 2.</p>
            <a href="https://github.com/yourusername/project2">GitHub Link</a>
          </li>
          {/* Add more projects as needed */}
        </ul>
      </section>
      <section>
        <h2>Contact</h2>
        <p>Email: your.email@example.com</p>
      </section>
    </div>
  );
};

export default Portfolio;
import React from 'react';
import './App.css'; // You can create this CSS file for styling

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Ray Dixon</h1>
      </header>
      <nav className="nav">
        <a href="#about">About Me</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="container" id="about">
        <h2>About Me</h2>
        <p>I am a dynamic and ambitious full-stack engineer, driven by an unwavering passion
          for technology and its limitless possibilities. Renowned for my meticulous attention
          to detail and tireless work ethic, I consistently deliver results of the highest caliber.
          My positive demeanor and strong interpersonal skills enable me to foster productive
          collaborations and drive success in every endeavor. Committed to excellence and
          continuous self-improvement, I thrive in challenging environments where I can
          leverage my expertise to make a significant impact. With a track record of
          achievement and a dedication to pushing the boundaries of innovation, I am poised
          to play a pivotal role in shaping the future of technology.</p>
      </div>
      <div className="container" id="portfolio">
        <h2>Portfolio</h2>
        <div className="portfolio-item">
          <h3>Ai Image Generator</h3>
          <img src="/aiImageGenerator.png" alt="" /> 
          <p>Developed a cutting-edge AI image generator website leveraging OpenAI's powerful API. This innovative project harnessed state-of-the-art deep learning algorithms to generate high-quality and diverse images based on user input. Utilized modern web development technologies such as HTML, CSS, JavaScript, and React.js to create an intuitive user interface that seamlessly interacts with the OpenAI API. Implemented robust error handling and user feedback mechanisms to enhance the overall user experience. Successfully deployed the website, providing users with a captivating and interactive platform to explore the capabilities of AI-generated imagery.</p>
        </div>
        <div className="portfolio-item">
          <h3>Student-Link</h3>
          <img src="/studentlink.png" alt="" /> 
          <p>Join the Student Link platform to connect with fellow students, exchange valuable notes, and collaborate on projects! As the founder and lead developer of the Student Link project, I conceptualized and implemented a dynamic online community specifically tailored to the needs of students. Leveraging modern web development technologies such as HTML, CSS, JavaScript, and Handlebars, I designed an intuitive and user-friendly interface that facilitates seamless communication and knowledge sharing among students from diverse backgrounds. Through features like real-time chat, note-sharing capabilities, and collaborative project spaces, Student Link fosters a supportive learning environment where students can thrive academically and professionally. Join us on Student Link and unlock endless opportunities to learn, grow, and succeed together!</p>
        </div>
      </div>
      <div className="container" id="contact">
        <h2>Contact</h2>
        <p>Feel free to reach out to me through the following channels:</p>
        <ul>
          <li>Email: email@example.com</li>
          <li>Phone: +1234567890</li>
        </ul>
      </div>
      <footer className="footer">
        &copy; 2024 Ray Dixon - Personal Webpage
      </footer>
    </div>
  );
}

export default App;

// Full Professional Student Portfolio Template
// Includes:
// 1. Navigation Bar
// 2. Dark/Light Theme Toggle
// 3. Resume PDF Download Button
// 4. Section Animations
// 5. Profile Photo Layout
// 6. GitHub-Style Project Cards

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="app">
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

// -------------------- NAVBAR --------------------
function Navbar({ toggleTheme, theme }) {
  return (
    <nav className="navbar">
      <h2>MyPortfolio</h2>
      <div className="nav-right">
        <button onClick={toggleTheme} className="theme-btn">
          {theme === "light" ? "🌙 Dark" : "☀ Light"}
        </button>
        <a href="/Sonal_Resume.pdf" download className="resume-btn">Download Resume</a>
      </div>
    </nav>
  );
}

// -------------------- HERO --------------------
function Hero() {
  return (
    <motion.section className="hero" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <img src="Sonal.jpg" className="profile-pic" alt="profile" />
      <h1>Hello, I'm a Full Stack Developer</h1>
      <p>I build websites, APIs, and beginner-friendly software projects.</p>
    </motion.section>
  );
}

// -------------------- ABOUT --------------------
function About() {
  return (
    <motion.section className="section" initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}>
      <h2>About Me</h2>
      <p>I am passionate about coding, problem-solving, and learning new technologies.</p>
    </motion.section>
  );
}

// -------------------- SKILLS --------------------
function Skills() {
  const skills = ["Python", "JavaScript", "React", "Django", "HTML", "SQL", "CSS","Numpy", "Pandas"];
  return (
    <motion.section className="section" initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}>
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((s) => <div className="skill-card" key={s}>{s}</div>)}
      </div>
    </motion.section>
  );
}

// -------------------- PROJECTS --------------------
function Projects() {
  const projects = [
    { title: "Portfolio Website", desc: "React + Django", link: "#" },
    { title: "Student Attendance System", desc: "Django + React", link: "https://github.com/sonalloya/student-attendance-system" }
  ];

  return (
    <motion.section className="section" initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}>
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((p) => (
          <div className="project-card" key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <a className="project-link" href={p.link}>View Project</a>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

// -------------------- CONTACT --------------------
function Contact() {
  return (
    <motion.section className="section" initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}>
      <h2>Contact Me</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Message"></textarea>
        <button>Send Message</button>
      </form>
    </motion.section>
  );
}

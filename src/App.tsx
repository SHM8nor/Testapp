import { useState } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('about')

  return (
    <div className="portfolio">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Sigve Hofstad Møklebust</h1>
            <p className="hero-subtitle">Business Analysis & Performance Management Student</p>
            <p className="hero-description">
              Passionate about business consulting, project management, and creating value through data-driven insights
            </p>
            <div className="hero-links">
              <a href="https://www.linkedin.com/in/sighofmok" target="_blank" rel="noopener noreferrer" className="btn-primary">
                LinkedIn
              </a>
              <a href="tel:+4741357796" className="btn-secondary">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="nav">
        <button
          className={activeSection === 'about' ? 'nav-link active' : 'nav-link'}
          onClick={() => setActiveSection('about')}
        >
          About
        </button>
        <button
          className={activeSection === 'education' ? 'nav-link active' : 'nav-link'}
          onClick={() => setActiveSection('education')}
        >
          Education
        </button>
        <button
          className={activeSection === 'experience' ? 'nav-link active' : 'nav-link'}
          onClick={() => setActiveSection('experience')}
        >
          Experience
        </button>
        <button
          className={activeSection === 'skills' ? 'nav-link active' : 'nav-link'}
          onClick={() => setActiveSection('skills')}
        >
          Skills & Awards
        </button>
      </nav>

      {/* Main Content */}
      <main className="main">
        {/* About Section */}
        {activeSection === 'about' && (
          <section className="section fade-in">
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
              <div className="about-card">
                <div className="icon">🎓</div>
                <h3>Student at NHH</h3>
                <p>Pursuing MSc in Business Analysis and Performance Management at Norwegian School of Economics</p>
              </div>
              <div className="about-card">
                <div className="icon">🚀</div>
                <h3>Entrepreneur</h3>
                <p>Former CEO of Paratrekk UB – Award-winning youth enterprise, qualified for regional championship.</p>
              </div>
              <div className="about-card">
                <div className="icon">🌍</div>
                <h3>International Experience</h3>
                <p>Exchange semester at University of Mannheim, Germany - specialized in behavioral economics and taxation</p>
              </div>
              <div className="about-card">
                <div className="icon">💼</div>
                <h3>Leadership</h3>
                <p>Active member and event coordinator in NHHS student organizations since 2022</p>
              </div>
            </div>
          </section>
        )}

        {/* Education Section */}
        {activeSection === 'education' && (
          <section className="section fade-in">
            <h2 className="section-title">Education</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="timeline-date">Aug 2025 - Present</span>
                  <h3>MSc Business Analysis and Performance Management</h3>
                  <p className="institution">Norwegian School of Economics, Bergen</p>
                  <p className="description">Specializations: Business Consulting, Valuation, Financial Accounting</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="timeline-date">Aug 2022 - June 2025</span>
                  <h3>BSc Economics and Business Administration</h3>
                  <p className="institution">Norwegian School of Economics, Bergen</p>
                  <p className="description">Specializations: Project Management, Energy, Environment & Sustainability</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="timeline-date">Feb 2024 - June 2024</span>
                  <h3>Exchange Semester</h3>
                  <p className="institution">University of Mannheim, Germany</p>
                  <p className="description">Behavioral Economics, Taxation of Multinational Firms, Information Systems, HR Management, Marketing</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="timeline-date">Aug 2018 - June 2021</span>
                  <h3>High School - Science Track</h3>
                  <p className="institution">Amalie Skram VGS, Bergen</p>
                  <p className="description">IT, Advanced Mathematics, Physics, Economics & Management, Entrepreneurship</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Experience Section */}
        {activeSection === 'experience' && (
          <section className="section fade-in">
            <h2 className="section-title">Professional Experience</h2>
            <div className="experience-grid">
              <div className="exp-card">
                <div className="exp-header">
                  <h3>Substitute Teacher & Assistant</h3>
                  <span className="exp-date">Nov 2024 - Present</span>
                </div>
                <p className="exp-company">Amalie Skram VGS, Bergen</p>
                <ul className="exp-list">
                  <li>Teaching Economics and Management upon request</li>
                  <li>Full-time 1-on-1 tutoring in Business Operations (Spring 2025)</li>
                  <li>Exam and test supervision</li>
                </ul>
              </div>

              <div className="exp-card">
                <div className="exp-header">
                  <h3>Store Employee</h3>
                  <span className="exp-date">June 2021 - Present</span>
                </div>
                <p className="exp-company">Bunnpris Hope, Bergen</p>
                <ul className="exp-list">
                  <li>Managing daily operations in manager's absence</li>
                  <li>Opening and closing responsibilities</li>
                  <li>Solution-oriented approach to unexpected situations</li>
                </ul>
              </div>

              <div className="exp-card highlight">
                <div className="exp-header">
                  <h3>CEO - Youth Enterprise</h3>
                  <span className="exp-date">2019 - 2020</span>
                </div>
                <p className="exp-company">Paratrekk UB, Bergen</p>
                <ul className="exp-list">
                  <li>Led youth enterprise from concept to finished product</li>
                  <li>Won multiple awards at regional championships</li>
                  <li>Qualified for national championships</li>
                  <li>Motivated team through challenging periods</li>
                </ul>
                <div className="awards-badge">🏆 Award Winner</div>
              </div>

              <div className="exp-card">
                <div className="exp-header">
                  <h3>Kiosk Employee/Leader</h3>
                  <span className="exp-date">Feb 2019 - Apr 2021</span>
                </div>
                <p className="exp-company">Snackzone AS, Brann Stadium, Bergen</p>
                <ul className="exp-list">
                  <li>Developed leadership skills as kiosk leader</li>
                  <li>Delegated tasks and guided team</li>
                  <li>Worked efficiently under high-pressure situations</li>
                </ul>
              </div>

              <div className="exp-card">
                <div className="exp-header">
                  <h3>Event Coordinator & Board Member</h3>
                  <span className="exp-date">Aug 2022 - Present</span>
                </div>
                <p className="exp-company">Prosjektgruppen (NHHS), Bergen</p>
                <ul className="exp-list">
                  <li>Planned and executed events for student welfare</li>
                  <li>Organized Fadderuken 2023 & 2025, Constitution Day, Spring Festival</li>
                  <li>Coordinated internal and external student activities</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <section className="section fade-in">
            <h2 className="section-title">Skills & Achievements</h2>

            <div className="skills-container">
              <div className="skills-category">
                <h3>💻 Technical Skills</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Microsoft Office Suite</span>
                  <span className="skill-tag">PowerApps</span>
                  <span className="skill-tag">SQL</span>
                  <span className="skill-tag">R Programming</span>
                  <span className="skill-tag">Various Coding Languages</span>
                </div>
              </div>

              <div className="skills-category">
                <h3>🌐 Languages</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Norwegian - Native</span>
                  <span className="skill-tag">English - Fluent</span>
                  <span className="skill-tag">German - Intermediate</span>
                </div>
              </div>

              <div className="skills-category">
                <h3>⚡ Interests</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Golf</span>
                  <span className="skill-tag">Sports</span>
                  <span className="skill-tag">Music</span>
                </div>
              </div>
            </div>

            <div className="awards-section">
              <h3 className="awards-title">🏆 Awards & Recognition</h3>
              <div className="awards-grid">
                <div className="award-card">
                  <div className="award-icon">🥇</div>
                  <h4>Biggest Value Creation Potential</h4>
                  <p>Vestland Youth Enterprise Championships 2020</p>
                </div>
                <div className="award-card">
                  <div className="award-icon">🥇</div>
                  <h4>Best Exhibition</h4>
                  <p>Vestland Youth Enterprise Championships 2020</p>
                </div>
                <div className="award-card">
                  <div className="award-icon">🥈</div>
                  <h4>2nd Best Youth Enterprise</h4>
                  <p>Vestland Youth Enterprise Championships 2020</p>
                </div>
                <div className="award-card">
                  <div className="award-icon">🎫</div>
                  <h4>National Championship Qualification</h4>
                  <p>Golden Ticket to NM 2020</p>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 Sigve Hofstad Møklebust. Built with React & TypeScript</p>
          <div className="footer-links">
            <a href="mailto:sigve@example.com">Email</a>
            <span>•</span>
            <a href="tel:+4741357796">+47 413 57 796</a>
            <span>•</span>
            <a href="https://www.linkedin.com/in/sighofmok" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

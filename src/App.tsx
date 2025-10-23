import { useState } from 'react'
import './App.css'

function App() {
  const [likes, setLikes] = useState(0)

  return (
    <div className="container">
      <header className="header">
        <h1>Welcome to My Random Page</h1>
        <p>Exploring the world of web development</p>
      </header>

      <main className="main-content">
        <section className="intro">
          <h2>About This Page</h2>
          <p>
            This is a collection of random content showcasing various web elements.
            Feel free to explore and interact with the components below!
          </p>
        </section>

        <section className="card-section">
          <div className="card">
            <h3>Fun Fact</h3>
            <p>Honey never spoils. Archaeologists have found 3000-year-old honey in Egyptian tombs that was still edible!</p>
          </div>

          <div className="card">
            <h3>Interactive Counter</h3>
            <p>Likes: {likes}</p>
            <button onClick={() => setLikes(likes + 1)} className="btn">👍 Like</button>
          </div>

          <div className="card">
            <h3>Random Quote</h3>
            <p>"The only way to do great work is to love what you do."</p>
            <small>- Steve Jobs</small>
          </div>
        </section>

        <section className="list-section">
          <h2>Top 5 Programming Languages</h2>
          <ol>
            <li>JavaScript</li>
            <li>Python</li>
            <li>TypeScript</li>
            <li>Java</li>
            <li>C++</li>
          </ol>
        </section>

        <section className="features">
          <h2>Why Learn Web Development?</h2>
          <ul>
            <li>Create amazing user experiences</li>
            <li>Build interactive applications</li>
            <li>High demand in job market</li>
            <li>Constant learning opportunities</li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 My Random Page. Made with React & TypeScript</p>
      </footer>
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'

const trails = [
  { id: 1, name: 'Skyline Trail', difficulty: 'Hard', miles: 5.5 },
  { id: 2, name: 'Naches Peak Loop', difficulty: 'Easy', miles: 3.5 },
  { id: 3, name: 'Comet Falls', difficulty: 'Moderate', miles: 3.8 },
]

const trailStatus = [
  { name: 'Skyline Trail', status: 'open', note: 'Clear conditions' },
  { name: 'Carbon Glacier', status: 'closed', note: 'Snow closure' },
  { name: 'Naches Peak', status: 'caution', note: 'Muddy sections' },
]

export default function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [difficulty, setDifficulty] = useState('All')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!name || !email) {
      setError('Please fill out all fields.')
    } else {
      setError('')
      alert(`Thanks, ${name}! We'll send updates to ${email}.`)
    }
  }

  const filtered = difficulty === 'All'
    ? trails
    : trails.filter(t => t.difficulty === difficulty)

  return (
    <div>

      <header className="header">
        <h1>Mt. Rainier National Park</h1>
        <p>14,411 ft · Washington State</p>
      </header>

      <main>

        <section className="hero">
          <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1280" />
          <div className="hero-text">
            <h2>Plan Your Visit</h2>
            <p>America's most glaciated peak awaits.</p>
            <a href="#signup">Click here</a>
          </div>
        </section>

        <section className="section">
          <h2>Trail Finder</h2>
          <p>Filter trails by difficulty to find the right hike for your group.</p>
          <div className="filter-row">
            <select
              value={difficulty}
              onChange={e => setDifficulty(e.target.value)}
            >
              <option>All</option>
              <option>Easy</option>
              <option>Moderate</option>
              <option>Hard</option>
            </select>
          </div>

          <table className="trail-table">
            <thead>
              <tr>
                <th>Trail</th>
                <th>Difficulty</th>
                <th>Miles</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(trail => (
                <tr key={trail.id}>
                  <td>{trail.name}</td>
                  <td>{trail.difficulty}</td>
                  <td>{trail.miles}</td>
                  <td>
                    <a href="#">Learn more</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="section">
          <h2>Current Trail Status</h2>
          <p>Updated daily by park rangers. Always check conditions before heading out.</p>
          <ul className="status-list">
            {trailStatus.map(t => (
              <li key={t.name} className="status-item">
                <span className="status-info">
                  <strong>{t.name}</strong> — {t.note}
                </span>
                <span className={`dot dot-${t.status}`} />
              </li>
            ))}
          </ul>
        </section>

        <section className="section" id="signup">
          <h2>Get Trail Updates</h2>
          <p>Sign up to receive alerts about trail closures and conditions.</p>
          {error && <p className="error">{error}</p>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </section>

      </main>

      <footer className="footer">
        <p>© 2025 Mt. Rainier National Park Fan Site · For educational use</p>
      </footer>

    </div>
  )
}

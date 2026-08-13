import '../App.css'
import { useNavigate } from 'react-router-dom'

export default function Manga() {
  const navigate = useNavigate()

  return (
    <main className="landing">
      <div className="landing__content">
        <h1>Manga — Coming Soon</h1>
        <p className="landing__note">This section is coming soon. Stay tuned.</p>
        <button type="button" className="landing__button" onClick={() => navigate('/')}>Back</button>
      </div>
    </main>
  )
}

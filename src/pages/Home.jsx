import '../App.css'
import { Link } from 'react-router-dom'
import ReadMangaButton from '../components/ReadMangaButton'

export default function Home() {
  return (
    <main className="landing">
      <div className="landing__content">
        <h1>KIZUTO.ART</h1>
        <p className="landing__meta">Illustrator · Mangaka</p>
        <p className="landing__statement">Stories drawn in black and white.</p>
        <p className="landing__note">
          Too broke to buy the .art domain, so for now, use kizuto.netlify.app.
        </p>
        <ReadMangaButton />

        <div className="landing__nav">
          <Link to="/manga" className="landing__nav-link">
            MANGA
          </Link>
          <Link to="/commission" className="landing__nav-link">
            COMMISSION
          </Link>
          <Link to="/about" className="landing__nav-link">
            ABOUT ME
          </Link>
        </div>
      </div>
    </main>
  )
}

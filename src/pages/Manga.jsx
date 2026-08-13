import '../App.css'
import { useNavigate } from 'react-router-dom'
import { mangaList } from '../data/manga'
import MangaCard from '../components/MangaCard'

export default function Manga() {
  const navigate = useNavigate()

  return (
    <main className="manga-page">
      <header className="manga-page__header">
        <h1>Manga</h1>
      </header>
      <div className="manga-gallery">
        {mangaList.map((manga) => (
          <MangaCard key={manga.id} manga={manga} />
        ))}
      </div>
      <button type="button" className="landing__button" onClick={() => navigate('/')}>
        Back
      </button>
    </main>
  )
}

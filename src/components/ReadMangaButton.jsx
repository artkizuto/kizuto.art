import { useNavigate } from 'react-router-dom'

export default function ReadMangaButton() {
  const navigate = useNavigate()

  function handleClick() {
    navigate('/manga')
  }

  return (
    <button type="button" className="landing__button" onClick={handleClick}>
      READ MANGA
    </button>
  )
}

export default function MangaCard({ manga }) {
  const { cover, title, type, genre, status } = manga

  return (
    <div className="manga-card">
      <img src={cover} alt={title} className="manga-card__cover" />
      <div className="manga-card__info">
        <h3 className="manga-card__title">{title}</h3>
        <p className="manga-card__type">{type}</p>
        <p className="manga-card__genre">{genre}</p>
        <p className="manga-card__status">{status}</p>
      </div>
    </div>
  )
}

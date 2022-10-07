import { useState } from "react";

const MovieCard = ({ index, movie: {Year, Poster, Title, Type} }) => {
  const [imgSrc, setImgSrc] = useState(Poster);

  const onImgError = () => {
    setImgSrc("https://via.placeholder.com/400.png?text=Image+Not+Found");
  }

  return (
    <div className="movie" key={index}>
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img
          src={imgSrc}
          alt={Title}
          onError={onImgError}
        ></img>
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
  </div>
  )
}

export default MovieCard;
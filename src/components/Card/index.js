import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const Card = ({
  thumbnail,
  title,
  difficulty,
  slug,
}) => {
  // si on veut précharger les images
  // on gère un state pour représenter si l'image est chargée ou non
  const [isLoaded, setIsLoaded] = useState(false);
  // on pose un effet chaque fois que l'image change
  useEffect(() => {
    if (thumbnail) {
      // on la considère comme non chargé
      setIsLoaded(false);
      // on crée une image sans l'afficher
      const image = new Image();
      // à la bonne adresse
      image.src = thumbnail;
      // et on dit quoi faire quand elle sera chargée
      image.onload = function () {
        // on change d'état
        setIsLoaded(true);
      };
    }
  }, [thumbnail]);
  return (
    <article className="card">
      {/* on pose un test pour afficher l'image que si elle est chargée */}
      {isLoaded && (
        <img className="card-img" src={thumbnail} alt={title} />
      )}
      {!isLoaded && <p>Veuillez patienter</p>}
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-desc">Difficulté : {difficulty}</p>
        <Link to={`/recipe/${slug}`} className="card-link">Voir la recette</Link>
      </div>
    </article>
  );
};

Card.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default Card;

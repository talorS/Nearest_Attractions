import "./Favorites.css";
import { FcLike } from "react-icons/fc";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Favorites() {
  const [favorits, setFavorites] = useState(0);
  const counter = useSelector((state) => state.counter.counter);

  useEffect(() => {
    setFavorites(counter);
  }, [counter]);
  
  return (
    <nav className="header">
      <div className="favorits--a">
        <span>
          <FcLike className="iconLike" />
          <span className="counter">{favorits}</span>
          מועדפים
        </span>
      </div>
    </nav>
  );
}

export default Favorites;

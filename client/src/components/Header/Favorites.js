import "./Favorites.css";
import { FcLike } from "react-icons/fc";
import { Row, Col } from 'react-bootstrap'
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Favorites() {
  const [favorits, setFavorites] = useState(0);
  const counter = useSelector((state) => state.counter.counter);

  useEffect(() => {
    setFavorites(counter);
  }, [counter]);

  return (
    <Row className="m-2 pt-3 pb-3 header">
      <Col className="favorits" xs={6} md={2} lg={2}>
        <span>
          <FcLike className="iconLike" />
          <span className="counter">{favorits}</span>
          מועדפים
        </span>
      </Col>
    </Row>
  );
}

export default Favorites;

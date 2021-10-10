import { Row, Col, Container } from 'react-bootstrap'
import Popup from 'reactjs-popup';
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import './Attraction.css'

function Attraction({ props, setStorage}) {
  const [like, setLike] = useState(false);
  const [open, setOpen] = useState(false);
  const dipsatch = useDispatch();
  
   useEffect(() => {
    const storage = localStorage.getItem("favorits")? JSON.parse(localStorage.getItem("favorits")) : [];
    storage.includes(props.id)? setLike(true) : setLike(false);
}, [props.id])
  
 
  const handelLike = () => {
    const favorits = localStorage.getItem("favorits")? JSON.parse(localStorage.getItem("favorits")) : [];
    if (!favorits.includes(props.id)) {
      favorits.push(props.id);
      dipsatch({
        type: "INCREMENT"
      });
    } else {
      const index = favorits.indexOf(props.id);
      if (index > -1) {
        favorits.splice(index, 1);
      }
      dipsatch({
        type: "DECREMENT"
      });
    }
    localStorage.setItem("favorits", JSON.stringify(favorits));
    setLike(!like);
    setStorage(favorits);
  }

  return (
    <div>
      <Popup open={open} closeOnDocumentClick onClose={setOpen(false)}>
        <Row>
          <div className="popUpHours">
            <Col><h5 className="text-center">שעות הפעילות</h5></Col>
            <Col>{props.openingHours.replace('</br>', "\r\n")}</Col>
            <Col><button className="btnClose btn btn-outline-secondary" onClick={() => setOpen(!open)}>סגור</button></Col></div>
        </Row>
      </Popup>

      <Container className="attraction mt-2 mb-2 text-center p-auto">
        <Row className="m-2 pt-3 pb-3">
          <Col xs={6} md={2} lg={2}>
            <div id="circle" onClick={() => handelLike()}>
              {like? <FcLike className="iconLike" /> : <FcLikePlaceholder className="iconLike" />}
           </div>
          </Col>
          <Col xs={6} md={2} lg={2}><span className="names">שם האטרקציה:</span><br />{props.name}</Col>
          <Col xs={6} md={2} lg={1}><span className="names">מס׳ מזהה: </span><br />{props.id}</Col>
          <Col xs={12} md={2} lg={4}><span className="names">כתובת:</span><br />{props.address}</Col>
          <Col xs={6} md={2} lg={2}> <span className="names">שעות פתיחה:</span><br /> {(props.openingHours === "24/7") ? <div>24/7</div> : <button className="btnHours btn btn-outline-secondary" onClick={() => setOpen(o => !o)}>הצג שעות</button>}</Col>
          <Col xs={6} md={2} lg={1}><span className="names">מרחק בק"מ:</span><br />{props.distance}</Col>
          <Col xs={12} md={2} lg={2}><a href={props.url} rel="noreferrer" target="_blank"><button className="btnHours btn btn-outline-secondary"> בקר באתר</button></a></Col>
        </Row>
      </Container>
      <br />
    </div>
  );

}

export default Attraction;
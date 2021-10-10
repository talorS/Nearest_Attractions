import './Attractions.css';
import Attraction from './Attraction'
import Favorites from '../Header/Favorites'
import AttractionTypes from '../Header/AttractionTypes'
import Pagination from '../Pagination/pagination'
import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { getAttractions } from '../../authService/apiAttractions';
import { Col, Container, Row } from 'react-bootstrap'

const Attractions = () => {
    const [list, setList] = useState([]);
    const [filterList, setFilterList] = useState([]);
    const [filter, setFilter] = useState("כל האטרקציות");
    const [storage,setStorage] = useState([]);
    const location = useSelector((state) => state.user);
    const maxRadius = 40;

    useEffect(() => {
        async function fetchData() {
            try {
                let resp = await getAttractions(location.latitude, location.longitude);
                setList(resp.data);
            } catch (err) {
                alert(err);
            }
        }
        fetchData();
    }, [location])
    

    useEffect(() => {
        if (filter === "מועדפים") {
             setFilterList(list.filter(atr => localStorage.getItem("favorits") && 
             JSON.parse(localStorage.getItem("favorits")).includes(atr.id)));
          } else if (filter === "כל האטרקציות") {
              setFilterList(list);
          } else {
              setFilterList(list.filter(atr => atr.distance <= maxRadius && atr.attractionType.includes(filter)));
          }
    }, [filter,list,storage])

    return (
        <div >
            <h3 style={{ textAlign: 'center' }}>אטרקציות בסביבתי</h3>
            <Container fluid>
                <Row className="d-flex justify-content-around m-auto">
                    <Col xs={6} sm={6} md={4} lg={2}>
                        <AttractionTypes handleTypes={setFilter} />
                    </Col>
                    <Col xs={6} sm={6} md={4} lg={2}>
                        <Favorites />
                    </Col>
                </Row>
            </Container>
            <hr />
            <Container fluid>
                <Pagination
                    data={filterList}
                    RenderComponent={Attraction}
                    dataLimit={5}
                    setStorage={setStorage}
                />
            </Container>
        </div>
    )
}

export default Attractions;
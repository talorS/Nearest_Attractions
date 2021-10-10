import './Dashboard.css';
import { useState, useEffect } from 'react';
import { getToken } from '../../authService/apiAuth';
import BtnLocation from "../Button/BtnLocation";
import BtnAttractions from "../Button/BtnAttractions";


const Dashboard = () => {
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                let resp = await getToken();
                localStorage.setItem("token", resp.data.token);
            } catch (err) {
                alert(err);
            }
        }
        fetchData();
    }, [])

    return (
        <div className="container">
            <BtnLocation setDisplay={setDisplay} />
            {display && <BtnAttractions />}
        </div>
    )
}

export default Dashboard;
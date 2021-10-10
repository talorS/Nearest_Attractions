import "./AttractionTypes.css";
import { useEffect, useState } from "react";
import { getAttractionTypes } from '../../authService/apiAttractions';

const AttractionTypes = (props) => {

const [types, setTypes] = useState([]);

useEffect(() => {
  async function fetchData() {
      try {
          let resp = await getAttractionTypes();
          setTypes(resp.data);
      } catch (err) {
          alert(err);
      }
  }
  fetchData();
}, [types])

  return (
    <div className="types_box">
      <p>רשימת סוגי האטרקציות ברדיוס 40 ק"מ ממיקומך :</p>
      <select onChange={(e) => props.handleTypes(e.target.value)}>
        {types.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
      </select>
    </div>
  );
};

export default AttractionTypes;

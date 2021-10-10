import "./Button.css";
import { Link } from "react-router-dom";

const BtnAttractions = () => {
  return (
      <Link className="btn btn_attractions" to="/attractions">
        מצא אטרקציות בסביבתי
      </Link>
  );
};

export default BtnAttractions;

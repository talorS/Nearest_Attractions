import "./Button.css";
import { useDispatch } from "react-redux";

const BtnLocation = ({setDisplay}) => {
  const dipsatch = useDispatch();

  const handleClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
          dipsatch({
            type: "SET_LOCATION",
            payload: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            },
          });
          alert(
            `longitude:${position.coords.longitude} latitude:${position.coords.latitude}`
          );
          setDisplay(true);
        },function(error) {
          alert(error);
      });
    } else {
      alert("Please enable location service!");
    }
  };

  return (
    <div>
      <input
        className="btn btn_location"
        type="button"
        value="הצג מיקום"
        onClick={handleClick}
      />
    </div>
  );
};

export default BtnLocation;

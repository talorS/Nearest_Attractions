const initialState = {
    latitude: null,
    longitude: null,
    locationExist: false,
  };
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case "SET_LOCATION":
        return {
          ...state,
          latitude: action.payload.latitude,
          longitude: action.payload.longitude,
          locationExist: true,
        };
  
      default:
        return state;
    }
  }
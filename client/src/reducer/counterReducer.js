const initialState = {
    counter: localStorage.getItem("favorits")?
      JSON.parse(localStorage.getItem("favorits")).length
      : 0,
  };
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case "INCREMENT":
        return {
          ...state,
          counter: state.counter + 1,
        };
  
      case "DECREMENT":
        return {
          ...state,
          counter: state.counter - 1,
        };
  
      default:
        return state;
    }
  }
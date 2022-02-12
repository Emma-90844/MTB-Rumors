



const Reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: false,
      };
  }



  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
  }
 
  switch (action.type) {
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: true,
      };
  }
  


  // UPDATE



  // LOGOUT
  switch (action.type) {
    case "UPDATE_START":
      return {
       ...state,
       isFetching:true,
      };
  }

  switch (action.type) {
    case "UPDATE_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
  }
 
  switch (action.type) {
    case "UPDATE_FAILURE":
      return {
        user:state.user,
        isFetching: false,
        error: true,
      };
  }
  switch (action.type) {
    case "LOGOUT":
      return {
        user: null,
        isFetching: false,
        error: false,
      };

    default:
      return state;
  }
  
};
export default Reducer;
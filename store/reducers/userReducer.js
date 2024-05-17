const initialState = {
  user: {
    email: "",
    sifre: "",
    rol: "",
    id: "",
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };

    case "LOGOUT":
      return {
        ...state,
        user: {
          email: "",
          sifre: "",
          rol: "",
          id: "",
        },
      };

    default:
      return state;
  }
};

export default userReducer;

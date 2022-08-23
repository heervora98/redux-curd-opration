
const initialState = [
  {
    id: 0,
    name: "Heer Vora",
    number: "1234567890",
    email: "heer@g.com",
    post: [
      {
        id: 0,
        postname: "img1",
        postDescription: "description1",
      },

    ]
  },
  {
    id: 1,
    name: "Secound Name",
    number: "0987654321",
    email: "secound@g.com",
    post: [
      {
        id: 0,
        postname: "img2",
        postDescription: "description2",
      }
    ]
  }
]



const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      state = [...state, action.payload];
      // console.log(state,"----state");
      return state;

    case "UPDATE_USER":
      const updateState = state.map((user) => user.id === action.payload.id ? action.payload : user)
      state = updateState;
      return state;

    case "DELETE_USER":
      const filterUser = state.filter((user) => user.id !== action.payload && user);
      state = filterUser;
      return state;

    case "USER_POST":
      state = [...state, action.payload];
      // console.log(state,"----state");
      return state;

    // case "DELETE_POST":
    //   const filterPost = state.filter((user) => user.post.id !== action.payload && user.post );
      

    //   state = filterPost;
    //   return state

    // return {
    //   // ...state,
    //   state: filterPost
    // }
    default:
      return state;
  }
};

export default userReducer;
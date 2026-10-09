export function userReducer(state, action) {
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.payload];
    case "DELETE_USER":
      return state.filter((user) => user.id !== action.payload);
    case "UPDATE_USER":
      return state.map((user) =>
        user.id === action.payload.id ? action.payload : user,
      );
    default:
      return state;
  }
}

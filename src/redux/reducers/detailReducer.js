const initialState = { game: {}, screen: {}, modal: false };

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        game: action.payload.game,
        screen: action.payload.screen,
        modal: true,
      };
    case "OFF_MODAL":
      return {
        ...state,
        modal: action.payload.modal,
      };
    default:
      return { ...state };
  }
};

export default detailReducer;

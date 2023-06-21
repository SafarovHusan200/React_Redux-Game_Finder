import { combineReducers } from "redux";
import gamesReduser from "./gamesReducer";
import detailReducer from "./detailReducer";

const rootReducer = combineReducers({
  games: gamesReduser,
  detail: detailReducer,
});

export default rootReducer;

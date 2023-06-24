import axios from "axios";
import { GameDetailsURL, gameScreenShotsURL } from "../../api";

export const loadDetail = (id) => async (dispatch) => {
  const detailData = await axios.get(GameDetailsURL(id));
  const screenData = await axios.get(gameScreenShotsURL(id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: screenData.data,
      modal: true,
    },
  });
};

export const OffDetail = () => async (dispatch) => {
  dispatch({
    type: "OFF_MODAL",
    payload: {
      modal: false,
    },
  });
};

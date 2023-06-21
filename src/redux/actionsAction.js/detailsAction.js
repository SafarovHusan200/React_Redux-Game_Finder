import axios from "axios";
import { GameDetailsURL } from "../../api";

export const loadDetail = (id) => async (dispatch) => {
  const detailData = await axios.get(GameDetailsURL(id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
    },
  });
};

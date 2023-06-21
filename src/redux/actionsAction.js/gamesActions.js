import axios from "axios";
import { popularGames, upcomingGames, newGames } from "../../api";

// Action Greators
export const loadGames = () => async (dispatch) => {
  const popularGamesData = await axios.get(popularGames());
  const upcomingGamesData = await axios.get(upcomingGames());
  const newGamesData = await axios.get(newGames());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularGamesData.data.results,
      upcoming: upcomingGamesData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};

import React, { useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../redux/actionsAction.js/gamesActions";
import Game from "../components/Game";
import { styled } from "styled-components";
import { motion } from "framer-motion";

export default function Home() {
  // Dispatch
  const dispatch = useDispatch();
  // useEffect
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  const games = useSelector((state) => state.games);

  return (
    <>
      <GameList>
        <h2>Upcoming Games </h2>
        <Game popular={games.upcoming} />
      </GameList>
      <GameList>
        <h2>Popular Games </h2>
        <Game popular={games.popular} />
      </GameList>
      <GameList>
        <h2>New Games </h2>
        <Game popular={games.newGames} />
      </GameList>
    </>
  );
}

const GameList = styled(motion.div)`
  padding: 0 5rem;
  h2 {
    padding: 2rem 0;
  }
`;

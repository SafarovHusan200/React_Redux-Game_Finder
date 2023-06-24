import { motion } from "framer-motion";
import React from "react";
import { styled } from "styled-components";
import Loading from "./Loading";
import { useDispatch } from "react-redux";
import { loadDetail } from "../redux/actionsAction.js/detailsAction";

export default function Game({ popular }) {
  const dispatch = useDispatch();
  // Load Details

  const loadDetailHandler = (id) => {
    dispatch(loadDetail(id));
  };

  return (
    <GamesStyle>
      {popular.length > 0 ? (
        popular.map((item, index) => {
          return (
            <GameStyle key={item.id} onClick={() => loadDetailHandler(item.id)}>
              <h3>Game name: {item.name}</h3>
              <p>Released Date: {item.released}</p>
              <img src={item.background_image} alt="" />
            </GameStyle>
          );
        })
      ) : (
        <Loading />
      )}
    </GamesStyle>
  );
}

const GamesStyle = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 3rem;
`;

const GameStyle = styled(motion.div)`
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;

  img {
    width: 100%;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    height: 35vh;
    object-fit: cover;
  }
  h3 {
    margin-top: 5px;
    line-height: 150%;
  }
`;

import React from "react";
// Style
import styled from "styled-components";
import { motion } from "framer-motion";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { OffDetail } from "../redux/actionsAction.js/detailsAction";

export default function GameDetail() {
  const { game, screen } = useSelector((state) => state.detail);
  const { modal } = useSelector((state) => state.detail);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(OffDetail());
  }
  return (
    <>
      {modal ? (
        <div>
          <BlackBoard onClick={handleClick}></BlackBoard>
          <CardShadow>
            <div className="card-shadow">
              <CardDetail className="detail">
                <div className="stats">
                  <div className="rating">
                    <h3>{game.name}</h3>
                    <div className="platforms">
                      {game.platforms.map((data) => (
                        <h2 key={data.id}>{data.platform.name}</h2>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="media">
                  <img src={game.background_image} alt="background_image" />
                </div>
                <div className="gallery">
                  {screen.results.map((item) => (
                    <img key={item.id} src={item.image} alt="imag" />
                  ))}
                </div>
              </CardDetail>
            </div>
          </CardShadow>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

// Styled Components
const CardShadow = styled(motion.div)`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0.4rem;
  }
  &::-webkit-scrollbar-track {
    background-color: white;
  }
  &::-webkit-scrollbar-thumb {
    background-color: blue;
    border-radius: 1rem;
  }
`;

const CardDetail = styled(motion.div)`
  width: 90%;
  border-radius: 1rem;
  padding: 2rem 20rem;
  position: absolute;
  background-color: white;
  left: 5%;
  z-index: 2;
  img {
    width: 100%;
  }
`;

const BlackBoard = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

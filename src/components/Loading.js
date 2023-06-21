import React from "react";
import loading from "../assets/loading.svg";
import { styled } from "styled-components";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <LoadingStyle>
      <img src={loading} alt="loading" />
    </LoadingStyle>
  );
}

const LoadingStyle = styled(motion.div)`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 200px !important;
    height: 200px;
  }
`;

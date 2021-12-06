import React from "react";
import styled from "styled-components";
const RightSide = () => {
  return (
    <RightSideMain>
      <BackGroundPattern src="images/pattern-background-png-4 1 (1).png" />
      <BackGroundRectangle src="images/Rectangle 1.png" />
      <BodyImageContainer>
        <img src="images/circle highlight.png" alt="circle-highlight"></img>
      </BodyImageContainer>
    </RightSideMain>
  );
};

const RightSideMain = styled.div`
  position: relative;
  min-height: 100vh;
  z-index: 1;
`;
const BodyImageContainer = styled.div`
  position: absolute;
  width: 606px;
  height: 570px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 100px 200px;

  img {
    position: absolute;
    width: 80%;
    height: 80%;
    object-fit: contain;
    z-index: 5;
  }
`;
const BackGroundPattern = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-height: 100vh;
  overflow: hidden;
  position: absolute;
  left: 0;
  bottom: 0;
`;
const BackGroundRectangle = styled.img`
  width: 742px;
  height: 1024px;
  object-fit: cover;
  max-height: 100vh;
  overflow: hidden;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export default RightSide;

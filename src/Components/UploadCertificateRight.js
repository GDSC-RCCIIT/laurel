import React from "react";
import styled from "styled-components";
const UploadCertificateRight = () => {
  return (
    <RightMain>
      <RightMainWrapper>
        <CentralContainer>
          <h4>Certificate ID: #xxx</h4>
          <img src="images/Untitled design 1.svg" alt="" />
        </CentralContainer>
      </RightMainWrapper>
    </RightMain>
  );
};
const RightMain = styled.div`
  flex: 7;
`;
const RightMainWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  background: #f6f6fd;
  border-radius: 45px 0px 0px 45px;
`;
const CentralContainer = styled.div`
  position: relative;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  img {
    margin-top: 40px;
    padding-bottom: 30px;
    width: 80%;
    height: 80%;
    object-fit: contain;
  }
  h1 {
    margin-top: 20px;
    position: absolute;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: bold;
    color: #cfcfcf;
  }
`;
export default UploadCertificateRight;

import React from "react";
import styled from "styled-components";

const LeftSide = () => {
  return (
    <LeftSideContainer>
      <LoginMain>
        <BackGroundImgContainer>
          <BackGroundImg
            src="images/GDSC RCCIIT Logo.png"
            alt="gdsclogo"
          ></BackGroundImg>
        </BackGroundImgContainer>
        <LoginBox>
          <label htmlFor="name">Name:</label>
          <input required type="text" id="name" className="rounded-pill" />
          <label htmlFor="email">Email Id:</label>
          <input required type="email" id="email" className="rounded-pill" />
          <label htmlFor="password">Password</label>
          <input
            required
            type="password"
            id="password"
            className="rounded-pill"
          />
          <button type="submit" className="rounded-pill">
            Signup Now
          </button>
          <LoginButtonBottom>
            <a>Login</a>
            <a>Forget Password ?</a>
          </LoginButtonBottom>
        </LoginBox>
      </LoginMain>
      <BottomImageContainer>
        <img src="images/google-crowdsource 1.png" alt="" />
      </BottomImageContainer>
    </LeftSideContainer>
  );
};

const LeftSideContainer = styled.div`
  min-height: calc(100vh-50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: relative;
  z-index: 3;
  background-color: transparent;
`;
const BackGroundImgContainer = styled.div`
  flex: 1;
`;
const BackGroundImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  padding: 20px;
  margin-bottom: 20px;
`;

const LoginMain = styled.div`
  width: 100%;
  /* margin-top: 10px; */
  /* margin-left: 140px; */
  flex: 1;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  background-color: transparent;
  /* justify-content: space-between; */
`;
const LoginBox = styled.form`
  position: relative;
  top: -40px;
  height: 50vh;

  padding: 20px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 0;
  input {
    width: 100%;
  }
  & > label {
    width: 107px;
    height: 32px;
    left: 97px;
    top: 338px;
    font-family: "Roboto Slab", serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
  }
  button {
    margin-top: 10px;
    /* width: 100%;
    height: 100%; */
    background-color: #1c1818;
    border-radius: 50px;
    width: 430px;
    height: 52px;
    left: 94px;
    top: 608px;
    color: #fff;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 35px;
    text-align: center;
  }
`;
const LoginButtonBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  a {
    cursor: pointer;
    font-size: 24px;
    font-family: "Roboto", sans-serif;
    color: #929292;
    font-weight: 500;
  }
`;
const BottomImageContainer = styled.div`
  flex: 1;
  position: relative;
  width: 100%;
  height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    object-fit: cover;
    width: 80%;
    height: 80%;
  }
`;

export default LeftSide;

import React from "react";
import styled from "styled-components";
const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoLeft>
        <Logo src="/images/istockphoto-1279136583-612x612 1.png" alt="" />
        <LogoText>Laurel</LogoText>
      </LogoLeft>
      <NavbarMain>
        <a>Home | </a>
        <a>Privacy Policy | </a>
        <a>GDSC RCCIIT</a>
      </NavbarMain>
    </NavbarContainer>
  );
};

export default Navbar;
const NavbarContainer = styled.div`
  height: 50px;
  display: flex;
  padding: 0 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow-x: hidden;
`;
const LogoLeft = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Logo = styled.img`
  width: 40px;
  height: 40px;
`;
const NavbarMain = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  margin-left: 25px;
  width: 434px;
  height: 35px;
  left: 192px;
  top: 40px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    justify-content: space-between;
  }
`;
const LogoText = styled.span`
  font-family: Roboto Slab;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
`;

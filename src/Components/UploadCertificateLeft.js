import styled from "styled-components";
import ToggleButton from "../components/ToggleButton/ToggleButton";
const UploadCertificateLeft = () => {
  return (
    <LeftContainer>
      <LeftContainerTop>
        <Heading>Upload Certificate</Heading>
      </LeftContainerTop>
      <LeftContainerMiddle>
        <LeftContainerMiddleTop>
          <Label>GDSC Name</Label>
          <Input></Input>
        </LeftContainerMiddleTop>
        <LeftContainerMiddleBottom>
          <span>Make Design Public</span>
          <ToggleButton />
        </LeftContainerMiddleBottom>
      </LeftContainerMiddle>
      <LeftContainerBottom>
        <CoOrdinatesHeadingContainer>
          <h2>Coordinates</h2>
          <button>+</button>
        </CoOrdinatesHeadingContainer>
        <CoOrdinateContainer>
          <CoOrdinateItem>Coordinate 1: 20.089 - 12.332</CoOrdinateItem>
          <CoOrdinateItem>Coordinate 2: 90.123 - 234.122</CoOrdinateItem>
          <CoOrdinateItem>Coordinate 3: 120.111 - 334.12</CoOrdinateItem>
        </CoOrdinateContainer>
      </LeftContainerBottom>
      <LeftContainerButton>
        <button>+ Add Certificate</button>
      </LeftContainerButton>
    </LeftContainer>
  );
};
const LeftContainer = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
`;
const LeftContainerTop = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const Heading = styled.h1`
  margin-top: 30px;
  text-align: center;
  font-weight: bold;
  line-height: 28px;
`;
const LeftContainerMiddle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const Label = styled.label`
  text-align: start;
  margin-left: 30px;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  line-height: 16px;
  color: #000000;
`;
const Input = styled.input`
  width: 90%;
  border-radius: 50px;
  margin-left: 20px;
  background: #f6f6fd;
  border: 1px solid #000000;
  padding-top: 20px;
`;
const LeftContainerBottom = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const CoOrdinatesHeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  button {
    background: #f3f6ff;
    color: #815dfe;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    border-radius: 50px;
    border: 1px solid #815dfe;
  }
  &:focus {
    outline: none;
  }
`;
const CoOrdinateContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const CoOrdinateItem = styled.div`
  align-items: center;
  justify-content: space-around;
  margin-left: 90px;
`;
const LeftContainerButton = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    border-radius: 50px;
    width: 60%;
    height: 40%;
    background: #5e5adf;
    box-shadow: 0px 0px 11px rgba(0, 0, 0, 0.25);
    font-weight: bold;
    font-size: 24px;
    line-height: 16px;

    color: #ffffff;
  }
`;
const LeftContainerMiddleTop = styled.div`
  display: flex;
  flex-direction: column;
`;
const LeftContainerMiddleBottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  span {
    margin-top: 10px;
  }
`;
export default UploadCertificateLeft;

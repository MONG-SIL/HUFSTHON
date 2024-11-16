import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Layer from "./assets/Layer_1.png";
import Msg1 from "./assets/당신 근처의 행복 스팟,.png";
import LOGO from "./assets/틈새로.png";
import FirstStartBtn from "./assets/Frame 78.png";
// 사이트 접속 페이지 (첫 화면)

function FirstPage() {
  const navigate = useNavigate();
  const startCrack = () => {
    navigate("/signup");
  };

  return (
    <PageWrapper>
      <ContentWrapper>
        <Top>
          <ChaImg
            width={"352px"}
            height={"300px"}
            src={Layer}
          />

        </Top>
        <Middle>
          <ChaImg src={Msg1}></ChaImg>
          <ChaImg src={LOGO}></ChaImg>
        </Middle>
        <Bottom>
          <StartBtn onClick={startCrack} src={FirstStartBtn}></StartBtn>
        </Bottom>
      </ContentWrapper>
    </PageWrapper>
  );
}

export default FirstPage;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  width: 100%;
  background-color: #4273F9;
`;

const ContentWrapper = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -50px;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  padding-top: 120px;
`;

const Middle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
  padding-top: 0px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: center;
`;

const ChaImg = styled.img`
  display: flex;
  margin-left: 0px;
`;

const StartBtn = styled.img`
  width: 315px;
  height: 60px;
  border-radius: 12px;
  border: none;
  background-color: #ffb1d0;
  font-family: "Pretendard";
  font-weight: 600;
  font-size: 16px;
  line-height: 19.2px;
  position: absolute;
  bottom: 50px;
`;

const Bubble = styled.img`
  position: relative;
  width: 222px;
  height: 40px;
  border-radius: 30px;
  background-color: #353535;
  color: #ffb1d0;
  font-family: "Pretendard";
  font-weight: 700;
  font-size: 12px;
  line-height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;

  &:after {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 16px 10px 0;
    border-color: #353535 transparent;
    display: block;
    width: 0;
    z-index: 1;
    bottom: -14px;
    left: calc(50% - 10px);
  }
`;

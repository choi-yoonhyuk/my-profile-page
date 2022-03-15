import React from "react";
import styled from "styled-components";

const Containter = styled.section`
  background: #ecf0f1;
  height: 100%;
  padding: 100px 0;
`;

const Inner = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-left: 100px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 500px) {
    width: 90%;
    padding-left: 0;
  }
`;

const Text = styled.div``;

const Title = styled.h2`
  font-family: "Montserrat";
  font-size: 15px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: bold;
  @media screen and (max-width: 500px) {
    font-size: 13px;
  }
`;

const P = styled.p`
  font-size: 25px;
  line-height: 1.2;
  margin: 40px 0;
  letter-spacing: 1px;
  line-height: 1.5;
  @media screen and (max-width: 1024px) {
    font-size: 20px;
  }
  @media screen and (max-width: 768px) {
    font-size: 17px;
  }
  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;

const More = styled.a`
  display: inline-block;
  padding: 5px 15px;
  border: 1px solid #333;
  border-radius: 20px;
  font-size: 15px;
  font-family: "Montserrat";
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 0.5s;
  &:hover,
  &:focus {
    border: 1px solid transparent;
    border-bottom: 1px solid #333;
    border-radius: 0;
    padding: 5px 18px;
    transition: all 0.2s;
  }
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

function Abouts() {
  return (
    <Containter>
      <Inner>
        <Text>
          <Title>About me</Title>
          <P>
            - IT스타트업에서 인턴기간을 거치면서 개발자의 꿈을 키웠습니다.
            <br />
            - 코딩 부트캠프에서 프론트엔드 6개월 과정 교육을 이수하였습니다.
            <br />
            - 현재 웹 프론트엔드 분야를 공부하고 있으며, React 전문가가 되길
            원합니다.
            <br />- 배려하고 함께 일하는 것을 즐깁니다.
            <br />- 항상 배우는 자세와 노력하는 자세를 중요하게 생각합니다.
          </P>
          <More href="https://cyber-buffalo-142.notion.site/f0c91ac8d30e4b509b46c97e286f8524">
            Resume
          </More>
        </Text>
      </Inner>
    </Containter>
  );
}

export default Abouts;

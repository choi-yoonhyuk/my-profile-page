import styled from "styled-components";
import { motion } from "framer-motion";
import Git from "../static/git.png";
import Code from "../static/code.png";
import A from "../static/a.mp4";
import B from "../static/b.mp4";
import C from "../static/c.mp4";
import D from "../static/d.mp4";
import E from "../static/e.mp4";
import F from "../static/f.mp4";
import G from "../static/g.mp4";
import { useEffect } from "react";

const Container = styled.section`
  padding: 100px 0;
  height: auto;
  background-color: #ecf0f1;
  z-index: 2;
  width: 100%;
`;

const Inner = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);
  gap: 100px;
`;

const Box = styled(motion.div)`
  width: 100%;
  display: flex;
  margin: 0 auto;
  position: relative;
  justify-content: center;
  padding: 50px 0;
  background-color: transparent;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const Video = styled.video`
  width: 40%;
  height: 330px;
  border-radius: 15px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const PortWrapper = styled.div`
  width: 50%;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 20px;
  letter-spacing: 1px;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 100px;
  position: relative;
  display: inline-block;
  animation: txtup 1.5s infinite;
  -webkit-animation: txtup 1.8s infinite;
  -ms-animation: txtup 1.8s infinite;
  -moz-animation: txtup 1.8s infinite;

  &:nth-of-type(1) {
    animation-delay: 0.1s;
  }
  &:nth-of-type(2) {
    animation-delay: 0.2s;
  }
  &:nth-of-type(3) {
    animation-delay: 0.3s;
  }
  &:nth-of-type(4) {
    animation-delay: 0.4s;
  }
  &:nth-of-type(5) {
    animation-delay: 0.4s;
  }
  &:nth-of-type(6) {
    animation-delay: 0.5s;
  }
  &:nth-of-type(7) {
    animation-delay: 0.6s;
  }
  &:nth-of-type(8) {
    animation-delay: 0.7s;
  }
  &:nth-of-type(8) {
    animation-delay: 0.8s;
  }
  &:nth-of-type(9) {
    animation-delay: 0.9s;
  }

  @keyframes txtup {
    0% {
      top: 0;
    }
    20% {
      top: -0.2rem;
    }
    40% {
      top: 0;
    }
    60% {
      top: 0;
    }
    80% {
      top: 0;
    }
    100% {
      top: 0;
    }
  }
`;

const PortWrap1 = styled.div`
  padding-left: 100px;
  @media screen and (max-width: 500px) {
    padding-left: 50px;
  }
`;

const PortContent = styled.div`
  font-size: 18px;
  line-height: 1.2;
  letter-spacing: 1px;
  line-height: 1.5;
  margin-top: 60px;
  width: 600px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.1);
  white-space: pre-line;
  @media screen and (max-width: 1024px) {
    width: 100%;
    font-size: 15px;
  }
  @media screen and (max-width: 768px) {
    font-size: 13px;
  }
  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;

const PortTitle = styled.p`
  font-family: "Montserrat";
  font-size: 20px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: bold;
  @media screen and (max-width: 1024px) {
    font-size: 17px;
  }
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }

  @media screen and (max-width: 500px) {
    font-size: 13px;
  }
`;

const PortWrap2 = styled.div`
  margin-top: 10%;
  width: 30%;
  display: flex;
  justify-content: space-between;
  float: right;
`;

const Linked = styled.a``;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  @media screen and (max-width: 1024px) {
    width: 30px;
    height: 30px;
  }
  @media screen and (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
  @media screen and (max-width: 500px) {
    width: 20px;
    height: 20px;
  }
`;

const Project = () => {
  useEffect(() => {
    console.log("render");
  }, []);
  return (
    <Container>
      <Inner>
        <TitleWrapper>
          <Title>P</Title>
          <Title>R</Title>
          <Title>O</Title>
          <Title>J</Title>
          <Title>E</Title>
          <Title>C</Title>
          <Title>T</Title>
        </TitleWrapper>
        <Grid>
          <Box>
            <Video autoPlay loop muted>
              <source src={G}></source>
            </Video>
            <PortWrapper>
              <PortWrap1>
                <PortTitle>Shopping App</PortTitle>
                <PortContent>
                  상품을 올리고 결제할 수 있는 "Shopping App" 입니다.
                  <br />
                  Mongodb, Express.js, React.js, Node.js을 사용하여 만든 서비스
                  입니다.
                </PortContent>
              </PortWrap1>
              <PortWrap2>
                <Linked href="https://protected-depths-12640.herokuapp.com/">
                  <Icon src={Code} />
                </Linked>
                <Linked href="https://github.com/choi-yoonhyuk/react-online-shop">
                  <Icon src={Git} />
                </Linked>
              </PortWrap2>
            </PortWrapper>
          </Box>
          <Box>
            <Video autoPlay loop muted>
              <source src={A}></source>
            </Video>
            <PortWrapper>
              <PortWrap1>
                <PortTitle>My Diary</PortTitle>
                <PortContent>
                  오늘의 감정을 5단계로 표현가능한 감정일기장 'My Diary' 입니다.
                  <br />
                  1인 솔로 프로젝트이며 React의 전반적인 지식을 학습하는데 많은
                  도움이 된 프로젝트 입니다.
                  <br />
                  날짜를 정하고 다섯 가지의 감정 중 나의 감정을 골라 내용을
                  작성하는 방식입니다.
                </PortContent>
              </PortWrap1>
              <PortWrap2>
                <Linked href="">
                  <Icon src={Code} />
                </Linked>
                <Linked href="">
                  <Icon src={Git} />
                </Linked>
              </PortWrap2>
            </PortWrapper>
          </Box>
          <Box>
            <Video autoPlay loop muted>
              <source src={B}></source>
            </Video>
            <PortWrapper>
              <PortWrap1>
                <PortTitle>NETFLEX Clone</PortTitle>
                <PortContent>
                  수 많은 영화 정보를 검색해볼 수 있는 'NETFLEX Clone' 입니다.
                  <br />
                  Movie , TV Show 의 정보와 기존 넷플릭스의 각종 애니메이션
                  효과를 적용하였습니다.
                  <br />
                  React Hook , 영화정보를 API로 가져오기 위한 React Query 를
                  연습할 수 있었습니다.
                </PortContent>
              </PortWrap1>
              <PortWrap2>
                <Linked href="">
                  <Icon src={Code} />
                </Linked>
                <Linked href="">
                  <Icon src={Git} />
                </Linked>
              </PortWrap2>
            </PortWrapper>
          </Box>
          <Box>
            <Video autoPlay loop muted>
              <source src={C}></source>
            </Video>
            <PortWrapper>
              <PortWrap1>
                <PortTitle>Coin</PortTitle>
                <PortContent>
                  실시간으로 수많은 코인의 시세를 확인할 수 있는 'Coin' 입니다.
                  <br />
                  수많은 코인 중 Top 100을 선정해 사용자에게 제공합니다.
                  <br />
                  그래프를 통하여 복잡한 데이터를 조금 더 알아보기 쉽게
                  제공합니다.
                  <br />
                  다크모드와 라이트모드를 적용하여 사용자 환경에 맞게 사용할 수
                  있습니다.
                </PortContent>
              </PortWrap1>
              <PortWrap2>
                <Linked href="">
                  <Icon src={Code} />
                </Linked>
                <Linked href="">
                  <Icon src={Git} />
                </Linked>
              </PortWrap2>
            </PortWrapper>
          </Box>
          <Box>
            <Video autoPlay loop muted>
              <source src={D}></source>
            </Video>
            <PortWrapper>
              <PortWrap1>
                <PortTitle>Small Movie</PortTitle>
                <PortContent>
                  실시간 영화 정보를 제공하는 'Small Movie' 입니다.
                  <br />
                  'NETFLEX Clone'을 만들기전 API에 대한 이해와 왜? 리액트로
                  개발하는게 편리한지를 이해할 수 있었습니다.
                </PortContent>
              </PortWrap1>
              <PortWrap2>
                <Linked href="">
                  <Icon src={Code} />
                </Linked>
                <Linked href="">
                  <Icon src={Git} />
                </Linked>
              </PortWrap2>
            </PortWrapper>
          </Box>
          <Box>
            <Video autoPlay loop muted>
              <source src={E}></source>
            </Video>
            <PortWrapper>
              <PortWrap1>
                <PortTitle>Nwitter</PortTitle>
                <PortContent>
                  실시간으로 게시물을 올려 사람들과 공유하는 'Nwitter' 입니다.
                  <br />
                  Firebase 를 사용하여 효율적인 데이터 쿼리와 실시간 동기화 및
                  오프라인 지원을 제공합니다.
                  <br />
                </PortContent>
              </PortWrap1>
              <PortWrap2>
                <Linked href="">
                  <Icon src={Code} />
                </Linked>
                <Linked href="">
                  <Icon src={Git} />
                </Linked>
              </PortWrap2>
            </PortWrapper>
          </Box>
          <Box>
            <Video autoPlay loop muted>
              <source src={F}></source>
            </Video>
            <PortWrapper>
              <PortWrap1>
                <PortTitle>StarBucks Clone</PortTitle>
                <PortContent>
                  오직 HTML,CSS로 만든 'StarBucks Clone' 입니다.
                  <br />
                  처음 공부를 시작할 때 기존 'StarBucks' 페이지를 보고 무작정
                  따라 만들었습니다.
                </PortContent>
              </PortWrap1>
              <PortWrap2>
                <Linked href="">
                  <Icon src={Code} />
                </Linked>
                <Linked href="">
                  <Icon src={Git} />
                </Linked>
              </PortWrap2>
            </PortWrapper>
          </Box>
        </Grid>
      </Inner>
    </Container>
  );
};

export default Project;

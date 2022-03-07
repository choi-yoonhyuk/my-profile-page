import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Test1 from "../static/skill1.jpg";
import Test2 from "../static/skill2.jpg";
import Test3 from "../static/skill3.jpg";

const Container = styled.section`
  padding: 100px 0;
`;

const Inner = styled.div`
  width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: -1;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const List = styled.ul`
  width: 48%;
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 200px;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
    padding-left: 5%;
    gap: 100px;
  }
  @media screen and (max-width: 500px) {
    width: 80%;
    padding-left: 10%;
  }
`;

const Li = styled.li`
  margin-bottom: 30px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ImgWrap = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
`;

const Fix = styled.div`
  position: absolute;
  width: 45%;
  height: 100%;
  right: 0;
  top: 0;
`;

const Text = styled.div`
  position: fixed;
  bottom: 50%;
  transform: translateY(50%);
  animation: fadein 1s ease-in-out;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const Title = styled.h2`
  font-size: 25px;
  font-family: "Montserrat";
`;

const P = styled.p`
  font-size: 20px;
  line-height: 1.2;
  margin: 40px 0;
  letter-spacing: 1px;
  line-height: 1.8;
`;

// 이미지 모션

const ImgWrapMotion = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  opacity: 0.7;
  filter: brightness(90%);
  @media screen and (max-width: 1024px) {
    filter: brightness(100%);
  }
`;

const MotionSpan = styled.span`
  position: absolute;
  display: block;
  width: 100%;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  font-family: "Montserrat";
  text-align: center;
  font-size: 50px;
  font-weight: 600;
  font-style: italic;
  color: black;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

function Skill() {
  const [scrollPos, setScrollPos] = useState(0);
  const updateScroll = () => {
    setScrollPos(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  return (
    <Container>
      <Inner>
        <List>
          <Li>
            {scrollPos > 1800 && scrollPos < 2150 ? (
              <ImgWrapMotion>
                <Img src={Test1} />
                <MotionSpan>Frontend</MotionSpan>
              </ImgWrapMotion>
            ) : (
              <ImgWrap>
                <Img src={Test1} />
              </ImgWrap>
            )}
          </Li>
          <Li>
            {scrollPos > 2150 && scrollPos < 2500 ? (
              <ImgWrapMotion>
                <Img src={Test2} />
                <MotionSpan>Deployment / Version Control</MotionSpan>
              </ImgWrapMotion>
            ) : (
              <ImgWrap>
                <Img src={Test2} />
              </ImgWrap>
            )}
          </Li>
          <Li>
            {scrollPos > 2550 && scrollPos < 3150 ? (
              <ImgWrapMotion>
                <Img src={Test3} />
                <MotionSpan>Certificate</MotionSpan>
              </ImgWrapMotion>
            ) : (
              <ImgWrap>
                <Img src={Test3} />
              </ImgWrap>
            )}
          </Li>
        </List>
        <Fix>
          {scrollPos > 1800 && scrollPos < 3100 && (
            <Text>
              <Title>Skill</Title>
              <P>
                • HTML, CSS, JS, React, Redux
                <br />
                • Git, Mongodb, Firebase
                <br />• 정보처리기사, 컴퓨터 활용능력
              </P>
            </Text>
          )}
        </Fix>
      </Inner>
    </Container>
  );
}

export default Skill;

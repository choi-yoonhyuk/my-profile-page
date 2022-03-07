import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import User from "../static/user.png";
import Age from "../static/age.png";
import Education from "../static/education.png";
import Location from "../static/location.png";
import Call from "../static/call.png";
import Mail from "../static/mail.png";

const Container = styled.div`
  padding: 100px 0;
`;

const Inner = styled.div`
  width: 1400px;
  margin: 0 auto;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 20px;
  font-family: "Montserrat";
  letter-spacing: 1px;
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

const GridWrap = styled.div`
  padding-top: 50px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;
  height: 50vh;
  gap: 150px;
`;

const Box = styled(motion.div)`
  height: 450px;
  background-color: transparent;
  opacity: 0.5;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Grid2 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 2fr);
  width: 90%;
  height: 100%;
  gap: 10px;
  margin: 0 auto;
`;

const Box1 = styled(motion.div)`
  position: relative;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 1;
  border-radius: 15px;
  box-shadow: 0 0px 0px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Box1Wrap = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Box1Title = styled.p`
  display: flex;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 30px;
  font-family: "Montserrat";
  font-size: 20px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;

const Linked = styled.a`
  text-decoration: none;
  color: black;
`;

const Box1Content = styled.p`
  font-size: 17px;
  @media screen and (max-width: 768px) {
    font-size: 13px;
  }
  @media screen and (max-width: 500px) {
    font-size: 10px;
  }
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  @media screen and (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
  @media screen and (max-width: 500px) {
    width: 20px;
    height: 20px;
  }
`;

function Info() {
  const [scrollPos, setScrollPos] = useState(0);
  const updateScroll = () => {
    setScrollPos(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  const boxVariants = {
    start: {
      opacity: 0,
      scale: 0.5,
    },
    end: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.5,
        bounce: 0.1,
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const circleVariants = {
    start: {
      opacity: 0,
      y: 10,
    },
    end: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <>
      <Container>
        <Inner>
          <TitleWrapper>
            <Title>I</Title>
            <Title>n</Title>
            <Title>f</Title>
            <Title>o</Title>
          </TitleWrapper>
          {scrollPos > 270 && scrollPos < 10000 && (
            <GridWrap>
              <Grid>
                <Box variants={boxVariants} initial="start" animate="end">
                  <Grid2>
                    <Box1 variants={circleVariants}>
                      <Box1Wrap>
                        <Image src={User} />
                        <Box1Title>이름</Box1Title>
                        <Box1Content>최윤혁</Box1Content>
                      </Box1Wrap>
                    </Box1>
                    <Box1 variants={circleVariants}>
                      <Image src={Age} />
                      <Box1Title>생년월일</Box1Title>
                      <Box1Content>1995. 2. 13</Box1Content>
                    </Box1>
                    <Box1 variants={circleVariants}>
                      <Image src={Call} />
                      <Box1Title>연락처</Box1Title>
                      <Box1Content>010-3322-4557</Box1Content>
                    </Box1>
                    <Box1 variants={circleVariants}>
                      <Image src={Location} />
                      <Box1Title>거주지</Box1Title>
                      <Box1Content>서울시 성북구</Box1Content>
                    </Box1>
                    <Box1 variants={circleVariants}>
                      <Image src={Mail} />
                      <Box1Title>이메일</Box1Title>
                      <Box1Content>
                        <Linked
                          href="mailto:dbsgur46894689@gmail.com"
                          title="메일 보내기"
                        >
                          dbsgur46894689@gmail.com
                        </Linked>
                      </Box1Content>
                    </Box1>
                    <Box1 variants={circleVariants}>
                      <Image src={Education} />
                      <Box1Title>학력</Box1Title>
                      <Box1Content>수원대학교 (행정학)</Box1Content>
                    </Box1>
                  </Grid2>
                </Box>
              </Grid>
            </GridWrap>
          )}
        </Inner>
      </Container>
    </>
  );
}

export default Info;

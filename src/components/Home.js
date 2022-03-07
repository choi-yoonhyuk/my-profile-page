import React, { useEffect, useState } from "react";
import styled from "styled-components";
import A from "../static/wave.mp4";

const Containter = styled.div`
  background: #fff;
  position: relative;
  z-index: 1;
  margin-bottom: 0px;
`;

const Visual = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const Waves = styled.video`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: absolute;
  left: 0;
  top: 0;
`;

const Title = styled.h2`
  width: 100%;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  text-align: center;
  color: #fff;
  font-size: 50px;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  text-transform: uppercase;
  line-height: 1.5;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 500px) {
    font-size: 30px;
  }
`;

function Home() {
  const txt1 = "프론트엔드 개발자를 꿈꾸고 있는";
  const txt2 = "최윤혁입니다.";
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText1(text1 + txt1[count1]);
      setCount1(count1 + 1);
    }, 150);
    if (count1 === txt1.length) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setText2(text2 + txt2[count2]);
      setCount2(count2 + 1);
    }, 150);
    if (count2 === txt2.length) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });
  return (
    <Containter>
      <Visual>
        <Waves autoPlay loop muted playsInline>
          <source src={A}></source>
        </Waves>
        <Title>
          안녕하세요
          <br /> {text1}
          <br /> {text2}
        </Title>
      </Visual>
    </Containter>
  );
}

export default Home;

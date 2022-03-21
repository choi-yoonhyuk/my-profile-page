import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  position: relative;
  transform: translateY(0%);
  left: 0;
  bottom: 0;
  width: 100%;
  background: #bdc3c7;
  color: #fff;
  padding: 75px 50px;
  box-sizing: border-box;
  @media screen and (max-width: 1024px) {
    height: 330px;
  }
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Montserrat", sans-serif;
  @media screen and (max-width: 1024px) {
    width: 90%;
    flex-wrap: wrap;
  }
`;

const Logo = styled.h1`
  font-size: 50px;
  text-transform: uppercase;
  font-weight: bold;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const Contact = styled.ul`
  width: 30%;
  line-height: 1.6;
  @media screen and (max-width: 1024px) {
    width: 100%;
    margin: 20px 0;
  }
`;
const Sns = styled.ul`
  display: flex;
  margin-top: 10px;
  @media screen and (max-width: 1024px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const SnsLi = styled.li`
  margin: 0 40px;
  font-weight: bold;
  font-size: 17px;
  @media screen and (max-width: 1024px) {
    margin: 0;
  }
`;

function Footer() {
  return (
    <Container>
      <Inner>
        <Logo>Choi</Logo>
        <Contact>
          <li>© 2022. Choi Yoon Hyuk. All rights reserved.</li>
          <li>
            010 3322 4557 |{" "}
            <a href="mailto:dbsgur46894689@gmail.com" title="메일 보내기">
              dbsgur46894689@gmail.com
            </a>
          </li>
        </Contact>
        <Sns>
          <SnsLi>
            <a href="https://www.aedin.com/in/yoonhyuk-choi-5487b520b/">
              LINKEDIN
            </a>
          </SnsLi>
          <SnsLi>
            <a href="https://github.com/choi-yoonhyuk">GITHUB</a>
          </SnsLi>
          <SnsLi>
            <a href="https://www.aedin.com/in/yoonhyuk-choi-5487b520b/">
              NOTION
            </a>
          </SnsLi>
        </Sns>
      </Inner>
    </Container>
  );
}

export default Footer;

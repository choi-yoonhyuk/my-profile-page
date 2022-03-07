import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

const Wrap = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Head = styled.div`
  padding: 20px 0 18px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: #bdc3c7;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
`;

const Inner = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const GnbBtn = styled.a`
  margin-top: 4px;
  transition: all 0.4s;
  z-index: 200;
  display: block;
  float: left;
  width: 32px;
  height: 12px;
  position: relative;
  cursor: pointer;
`;

const SpanA = styled.span`
  background: #fff;
  width: 100%;
  height: 3px;
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  @media screen and (max-width: 500px) {
    width: 70%;
  }
`;

const SpanB = styled.span`
  background: #fff;
  width: 100%;
  height: 3px;
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  @media screen and (max-width: 500px) {
    width: 70%;
  }
`;

const Logo = styled.a`
  display: inline-block;
  letter-spacing: 1px;
  font-size: 22px;
  transition: all 0.4s;
  @media screen and (max-width: 500px) {
    font-size: 15px;
  }
`;

const Contact = styled.div`
  display: block;
  float: right;
  margin-top: 4px;
  transition: all 0.4s;
  @media screen and (max-width: 500px) {
    font-size: 5px;
  }
`;

const Gnb = styled.nav`
  position: absolute;
  left: -1000px;
  top: 0;
  background: #000;
  color: #fff;
  width: 0;
  height: 100vh;
  padding: 95px 50px;
  box-sizing: border-box;
  text-align: left;
  transition: all 0.7s;
  overflow: hidden;
  width: 350px;
  left: 0;
  animation: fadein 1.5s ease-in-out;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @media screen and (max-width: 768px) {
    width: 30%;
  }
`;

const List = styled.ul`
  position: absolute;
  width: 60%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-top: 1px solid #555;
  border-bottom: 1px solid #555;
  padding: 20px 0;
`;

const Li = styled.li`
  text-align: left;
  line-height: 100px;
  font-size: 18px;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;

function Header() {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const [headerPos, setHeaderPos] = useState(0);
  const updateScroll = () => {
    setHeaderPos(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  const onClickHandler = () => {
    showSidebar();
  };

  return (
    <Wrap>
      {/* header 영역 */}
      <Head>
        <Inner>
          <GnbBtn onClick={onClickHandler}>
            <SpanA></SpanA>
            <SpanB></SpanB>
          </GnbBtn>
          <Logo href="/">Choi's Page</Logo>
          <Contact>
            {/* react-scroll 을 이용하여 위치로 이동 */}
            <Link style={{ cursor: "pointer" }} to="5" spy={true} smooth={true}>
              contact
            </Link>
          </Contact>
        </Inner>
        {sidebar ? (
          <Gnb>
            <List>
              <Li>
                <Link
                  style={{ cursor: "pointer" }}
                  to="1"
                  spy={true}
                  smooth={true}
                >
                  Info
                </Link>
              </Li>
              <Li>
                <Link
                  style={{ cursor: "pointer" }}
                  to="2"
                  spy={true}
                  smooth={true}
                >
                  About
                </Link>
              </Li>
              <Li>
                <Link
                  style={{ cursor: "pointer" }}
                  to="3"
                  spy={true}
                  smooth={true}
                >
                  Skill
                </Link>
              </Li>
              <Li>
                <Link
                  style={{ cursor: "pointer" }}
                  to="4"
                  spy={true}
                  smooth={true}
                >
                  Project
                </Link>
              </Li>
            </List>
          </Gnb>
        ) : null}
      </Head>
    </Wrap>
  );
}

export default Header;

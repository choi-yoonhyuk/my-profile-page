import { useEffect, useState } from "react";
import styled from "styled-components";
import Top from "../static/top.png";

const Wrap = styled.div``;

const TopBtn = styled.img`
  opacity: 0;
  z-index: -10;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: opacity 0.3s ease-in;
  &:hover {
    outline: 0 none;
  }
  &:active {
    outline: 0 none;
  }
  &:focus {
    outline: 0 none;
  }
`;

const TopBtnAct = styled.img`
  z-index: 10;
  opacity: 1;
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: opacity 0.3s ease-in;
`;

const ScrollBtn = () => {
  const [ScrollY, setScrollY] = useState(0);
  const [BtnStatus, setBtnStatus] = useState(false); // 버튼 상태

  const handleFollow = () => {
    setScrollY(window.pageYOffset);
    if (ScrollY > 100) {
      // 100 이상이면 버튼이 보이게
      setBtnStatus(true);
    } else {
      // 100 이하면 버튼이 사라지게
      setBtnStatus(false);
    }
  };

  const handleTop = () => {
    // 클릭하면 스크롤이 위로 올라가는 함수
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setScrollY(0); // ScrollY 의 값을 초기화
    setBtnStatus(false); // BtnStatus의 값을 false로 바꿈 => 버튼 숨김
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener("scroll", handleFollow);
    };
  });
  return (
    <Wrap>
      {BtnStatus ? (
        <TopBtnAct src={Top} onClick={handleTop} />
      ) : (
        <TopBtn src={Top} />
      )}
    </Wrap>
  );
};

export default ScrollBtn;

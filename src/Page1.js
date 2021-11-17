import styled from "styled-components";
import pakarang from "./Img/ปาการัง.png";
import chest from "./Img/สมบัติ.png";
import rock from "./Img/หิน+ปะการัง.png";
import bubble from "./Img/ฟอง.png";
import popWater from "./Img/น้ำ.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const MyDiv = styled.div`
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
  position: relative;
  top: 20%;
  /* margin: 0 auto; */

  & h1 {
    font-size: 14.5vh;
    color: #c3183a;
    text-shadow: 10px 2px 15px #fffa82;
  }
  & h3 {
    font-family: "Baskervville", serif;
    font-size: 4.2vh;
    color: #fffa82;
    text-shadow: 2px 2px 8px #000000;
  }
`;
const Pkl = styled.div`
  width: 100vw;

  & .pakarang {
    position: absolute;
    bottom: -1%;
    left: 5%;
    width: 30vw;
  }
  & .pakarang2 {
    position: absolute;
    bottom: -1%;
    right: 10%;
    width: 30vw;
  }
  & .pakarang3 {
    position: absolute;
    bottom: -1%;
    left: -5%;
    width: 30vw;
    transform: scaleX(-1);
  }
  & .pakarang4 {
    position: absolute;
    bottom: -1%;
    right: 0;
    width: 30vw;
    transform: scaleX(-1);
  }
  & .bubble {
    position: absolute;
    top: 80%;
    left: 5%;
    width: 15vw;
    animation: mymove 13s infinite;
  }
`;
const Chest = styled.div`
  width: 100vw;

  & .chest1 {
    position: absolute;
    bottom: -3%;
    right: 10%;
    width: 20vw;
    transform: scaleX(-1);
  }
  & .rock {
    position: absolute;
    bottom: -5%;
    left: 3%;
    width: 25vw;
  }
`;
const Pop = styled.div`
  width: 100%;

  & .pop1 {
    position: absolute;
    top: 390px;
    right: 290px;
    width: 200px;
    animation: mymove 9s infinite;
  }
  & .pop2 {
    position: absolute;
    top: 350px;
    left: 870px;
    width: 110px;
    animation: mymove 8s infinite;
  }
  & .pop3 {
    position: absolute;
    top: 310px;
    right: 490px;
    width: 50px;
    animation: mymove 7s infinite;
  }
  & .pop4 {
    position: absolute;
    top: 320px;
    right: 280px;
    width: 110px;
    animation: mymove 10s infinite;
  }
  @keyframes mymove {
    0% {
      top: 50%;
      opacity: 1;
    }
    80% {
      top: 20%;
      opacity: 1;
    }
    100% {
      top: 20%;
      opacity: 0;
    }
  }
`;

export default function Page1() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <MyDiv>
      <Pkl>
        <img src={pakarang} className="pakarang" />
        <img src={pakarang} className="pakarang2" />
        <img src={pakarang} className="pakarang3" />
        <img src={pakarang} className="pakarang4" />
        <img src={bubble} className="bubble" />
      </Pkl>

      <Chest>
        <img src={chest} className="chest1" />
        <img src={rock} className="rock" />
      </Chest>

      <Pop>
        <img src={popWater} className="pop1" />
        <img src={popWater} className="pop2" />
        <img src={popWater} className="pop3" />
        <img src={popWater} className="pop4" />
      </Pop>

      <Text
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <h1>The Little Mermaid</h1>

        <h3>
          Deep down into the sea,there are special species.Now please know thier
          story
        </h3>
      </Text>
    </MyDiv>
  );
}

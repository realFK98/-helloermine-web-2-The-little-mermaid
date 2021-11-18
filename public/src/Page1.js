import styled from "styled-components";
import pakarang from "./Img/ปาการัง.png";
import chest from "./Img/สมบัติ.png";
import rock from "./Img/หิน+ปะการัง.png";
import bubble from "./Img/ฟอง.png";
import popWater from "./Img/น้ำ.png";
import fish from "./Img/ภาพปลากรอบ.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const MyDiv = styled.div`
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
  /* height: 100%; */
  text-align: center;
  position: relative;
  top: 20vh;

  & h1 {
    font-size: 9vw;
    color: #c3183a;
    text-shadow: 2px 2px 3px #32356c;
  }
  & h3 {
    font-family: "Baskervville", serif;
    font-size: 2vw;
    color: #fffa82;
    text-shadow: 2px 2px 5px #000000;
    font-style: italic;
  }
`;
const Pkl = styled.div`
  width: 100vw;
  & * {
    position: absolute;
  }
  & .pakarang {
    bottom: 5%;
    left: 5%;
    width: 35vw;
  }
  & .pakarang2 {
    bottom: 5%;
    right: 10%;
    width: 35vw;
  }
  & .pakarang3 {
    bottom: 5%;
    left: -5%;
    width: 35vw;
    transform: scaleX(-1);
  }
  & .pakarang4 {
    bottom: 5%;
    right: 0;
    width: 35vw;
    transform: scaleX(-1);
  }
  & .bubble {
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
    bottom: 1%;
    right: 10%;
    width: 20vw;
    transform: scaleX(-1);
  }
  & .rock {
    position: absolute;
    bottom: 1%;
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
      top: 2%;
      opacity: 1;
    }
    100% {
      top: 2%;
      opacity: 0;
    }
  }
`;
const Fish = styled.div`
  width: 100vw;
  & .fish {
    position: absolute;
    bottom: 15%;
    left: 25%;
    width: 10vw;
    transform: scaleX(-1);
    animation: moveFish222 20s infinite;
  }
  width: 100vw;
  & .fish1 {
    position: absolute;
    bottom: 40%;
    left: 5%;
    width: 10vw;
    animation: moveFish111 26s infinite;
  }
  width: 100vw;
  & .fish2 {
    position: absolute;
    bottom: 5%;
    right: 30%;
    width: 10vw;

    animation: moveFish333 25s infinite;
  }
  @keyframes moveFish111 {
    0% {
      transform: translate(1800px);
      opacity: 1;
    }
    90% {
      transform: translate(-1000px);
      opacity: 1;
    }
    100% {
      transform: translate(-1000px);
      opacity: 0;
    }
  }
  @keyframes moveFish222 {
    0% {
      transform: translate(-1500px) scaleX(-1);
      opacity: 1;
    }
    90% {
      transform: translate(1500px) scaleX(-1);
      opacity: 1;
    }
    100% {
      transform: translate(1500px) scaleX(-1);
      opacity: 0;
    }
  }
  @keyframes moveFish333 {
    0% {
      transform: translate(-1500px) scaleX(-1);
      opacity: 1;
    }
    90% {
      transform: translate(1500px) scaleX(-1);
      opacity: 1;
    }
    100% {
      transform: translate(1500px) scaleX(-1);
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
      <Pop>
        <img src={popWater} className="pop1" />
        <img src={popWater} className="pop2" />
        <img src={popWater} className="pop3" />
        <img src={popWater} className="pop4" />
      </Pop>
      <Fish>
        <img src={fish} className="fish" />
        <img src={fish} className="fish1" />
        <img src={fish} className="fish2" />
      </Fish>

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
    </MyDiv>
  );
}

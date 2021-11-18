import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import fish from "./Img/ปลา1ตัว2ชม..png";
import pakarang from "./Img/ปาการัง.png";
import bubble from "./Img/ฟอง.png";
import rock from "./Img/หิน+ปะการัง.png";
import fishyellow from "./Img/ปลาน้อยน้อยอะไร.png";
import { useEffect } from "react";
const MyDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  overflow: hidden;
  margin-top: 13%;

  & p {
    font-size: 2.1vw;
    color: #ffff;
  }
  & .para1 {
    padding-left: 5%;
    width: 50%;
    float: left;
  }
  & .para2 {
    padding-right: 5%;
    margin-top: 45%;
    width: 50%;
    float: right;
    text-align: right;
  }
`;
const Pic = styled.div`
  width: 100vw;

  & .fish1 {
    width: 15vw;
    position: absolute;
    top: 30%;
    left: 55%;
    animation: moveFish8 7s infinite;
  }
  & .pakarang {
    width: 35vw;
    position: absolute;
    top: 7%;
    left: 63%;
  }
  & .bubble {
    width: 13vw;
    position: absolute;
    top: 0%;
    left: 62%;
    animation: popPopMove4 5s infinite;
  }
  & .rock-pakarang {
    width: 43vw;
    position: absolute;
    bottom: 0;
    left: 2%;
  }
  & .y-fish1 {
    width: 10vw;
    position: absolute;
    bottom: 20%;
    left: 30%;

    animation: moveFish10 7s infinite;
  }
  & .y-fish2 {
    width: 13vw;
    position: absolute;
    bottom: 35%;
    left: 6%;
    transform: scaleX(-1);
    animation: moveFish9 9s infinite;
  }
  @keyframes moveFish8 {
    0% {
      transform: translate(-2000px) scaleX(-1);
      opacity: 1;
    }
    90% {
      transform: translate(10px) scaleX(-1) rotate(15deg);
      opacity: 1;
    }
    100% {
      transform: translate(10px) scaleX(-1) rotate(20deg);
      opacity: 0;
    }
  }
  @keyframes moveFish9 {
    0% {
      transform: translate(-500px) scaleX(-1);
      opacity: 1;
    }
    90% {
      transform: translate(10px) scaleX(-1);
      opacity: 1;
    }
    100% {
      transform: translate(10px) scaleX(-1) rotate(20deg);
      opacity: 0;
    }
  }
  @keyframes moveFish10 {
    0% {
      transform: translate(1500px);
      opacity: 1;
    }
    90% {
      transform: translate(10px);
      opacity: 1;
    }
    100% {
      transform: translate(10px);
      opacity: 0;
    }
  }
  @keyframes popPopMove4 {
    0% {
      top: 5%;
    }
    100% {
      top: -5%;
      opacity: 0;
    }
  }
`;
export default function Page2() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <MyDiv>
      <Pic>
        <img src={bubble} className="bubble" />
        <img src={fish} alt="fish" className="fish1" />
        <img src={pakarang} className="pakarang" />
      </Pic>
      <div className="para1" data-aos="zoom-in" data-aos-duration="1000">
        <p>
          When she gained consciousness, she found herself in the arms of her
          prince. She had two legs instead of a tail. The prince took her back
          to the palace. There, she enjoyed herself and dance away the whole
          day, but she could neither speak nor sing. They both were happy.
        </p>
      </div>
      <Pic>
        <img src={rock} className="rock-pakarang" />
        <img src={fishyellow} className="y-fish1" />
        <img src={fishyellow} className="y-fish2" />
      </Pic>
      <div className="para2" data-aos="zoom-out" data-aos-duration="1000">
        <p>
          One day the king ordered the prince to marry the daughter of a
          neighboring king. When the prince saw the prince, he found her to be
          the same girl who had saved him on the beach. The prince fell in love
          with her and then and there decided to marry her.
        </p>
      </div>

      {/* <img src={} /> */}
    </MyDiv>
  );
}

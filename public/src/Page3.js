import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import salai from "./Img/กอสาหร่าย.png";
import fishmumi from "./Img/ภาพปลากรอบ.png";
import pop from "./Img/น้ำ.png";

const MyDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 15%;
  /* border: 1px solid black; */
  overflow: hidden;

  & p {
    font-size: 2.1vw;
    color: #ffff;
  }
  & .para1 {
    padding: 5%;

    width: 55%;
    float: left;
  }
`;
const Pic = styled.div`
  width: 100vw;
  & * {
    position: absolute;
  }
  & .salai {
    width: 45vw;
    bottom: -10%;
    right: 5%;
  }
  & .fish {
    width: 20vw;
    top: 15%;
    right: 12%;
    animation: moveFish6 9s infinite;
  }
  & .pop1 {
    width: 10vw;
    top: 40%;
    right: 38%;
    animation: popPopMove 9s infinite;
  }
  & .pop2 {
    width: 20vw;
    top: 15%;
    right: 0;
    animation: popPopMove 3s infinite;
  }
  @keyframes popPopMove {
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
  @keyframes moveFish6 {
    0% {
      transform: translate(1000px);
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
`;

export default function Page3() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <MyDiv>
      <div className="para1" data-aos="fade-bottom" data-aos-duration="800">
        <p>
          In the evening, there was a celebration on the ship because of the
          sixteenth birthday of the prince. The little mermaid was fascinated by
          the prince. That night a terrible storm blew over the sea. Ariel saw
          the ship sinking. All the sailors drowned, and she quickly dived into
          the sea and saved the prince. The prince was unconscious.
        </p>
      </div>

      <Pic>
        <img src={fishmumi} alt="fishmumi" className="fish" />
        <img src={pop} alt="fishmumi" className="pop1" />
        <img src={pop} alt="fishmumi" className="pop2" />
        <img src={salai} alt="salai" className="salai" />
      </Pic>
    </MyDiv>
  );
}

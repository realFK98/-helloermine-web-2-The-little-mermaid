import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import chest from "./Img/หีบแรก.png";
import pop from "./Img/น้ำ.png";
const MyDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  padding-top: 5em;
  /* border: 1px solid black; */
  overflow: hidden;
  & p {
    font-size: 2.5vw;
    color: #ffff;
  }
  & .para1 {
    margin-top: 10em;
    padding: 4em;
    padding-right: 2em;
    width: 50%;
    float: right;
  }
`;
const Pic = styled.div`
  width: 100vw;
  & * {
    position: absolute;
  }
  & .chest {
    width: 45vw;
    bottom: 0;
    left: 5%;
  }
  & .pop {
    width: 10vw;
    top: 45%;
    left: 5%;
    animation: popPopMove1 7s infinite;
  }
  & .pop1 {
    width: 10vw;
    top: 15%;
    left: 40%;
    animation: popPopMove1 9s infinite;
  }
  & .pop2 {
    width: 20vw;
    bottom: 0;
    right: 0;
    animation: popPopMove1 5s infinite;
  }
  @keyframes popPopMove1 {
    0% {
      top: 70%;
      opacity: 1;
    }
    90% {
      top: 20%;
      opacity: 1;
    }
    100% {
      top: 20%;
      opacity: 0;
    }
  }
`;

export default function Page4() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <MyDiv>
      <Pic>
        <img src={chest} alt="chest" className="chest" />
        <img src={pop} alt="pop" className="pop" />
        <img src={pop} alt="pop" className="pop1" />
        <img src={pop} alt="pop" className="pop2" />
      </Pic>
      <div className="para1" data-aos="flip-right" data-aos-duration="1000">
        <p>
          Ariel carried the prince to the shore and lay him down. She went back
          to the sea because she did not want anybody to see her. Soon a pretty
          girl walking by saw the prince lying there and help him.
        </p>
      </div>
    </MyDiv>
  );
}

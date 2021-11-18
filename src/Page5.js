import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import ursula from "./Img/Ursulaaaa.png";
import ariel from "./Img/รูปนี้เสร็จหลังดังกร๊อบ.png";
import bigrock from "./Img/หินเหล็กไฟ.png";
import salai from "./Img/กร๊อบแกร๊บ.png";
import pop from "./Img/น้ำ.png";
const MyDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  overflow: hidden;

  & p {
    font-size: 2.1vw;
    color: #ffff;
  }
  & .para1 {
    margin-top: 2em;
    padding: 2em;
    padding-right: 8em;
    width: 50%;
    float: left;
  }
  & .para2 {
    padding: 2em;
    margin-top: 35em;
    width: 50%;
    float: right;
    text-align: right;
    left: 50%;
  }
`;
const Character = styled.div`
  width: 100vw;
  & * {
    position: absolute;
  }
  & .ursula {
    width: 35vw;
    top: 0%;
    right: 10%;
  }
  & .ariel {
    width: 40vw;
    bottom: 12%;
    left: 0;
  }
  & .big-rock {
    width: 45vw;
    bottom: 0;
    left: 0;
  }
  & .salai {
    width: 40vw;
    bottom: -10%;
    left: 10%;
  }
`;
const Pop = styled.div`
  width: 100vw;
  & * {
    position: absolute;
  }
  & .pop {
    width: 20vw;
    top: 0;
    right: 0;
    animation: popPopMove3 9s infinite;
  }
  & .pop1 {
    width: 10vw;
    top: 20%;
    right: 30%;
    animation: popPopMove2 9s infinite;
  }
  & .pop2 {
    width: 10vw;
    bottom: 5%;
    left: 0%;
    animation: popPopMove2 6s infinite;
  }
  & .pop3 {
    width: 13vw;
    bottom: 45%;
    left: 5%;
    animation: popPopMove2 7s infinite;
  }
  & .pop4 {
    width: 8vw;
    bottom: 30%;
    left: 30%;
    animation: popPopMove2 8s infinite;
  }
  & .pop5 {
    width: 12vw;
    bottom: 35%;
    left: 38%;
    animation: popPopMove2 5s infinite;
  }
  @keyframes popPopMove2 {
    0% {
      top: 70%;
      opacity: 1;
    }
    90% {
      top: 1%;
      opacity: 1;
    }
    100% {
      top: 1%;
      opacity: 0;
    }
  }
  @keyframes popPopMove3 {
    0% {
      top: 80%;
      opacity: 1;
    }
    90% {
      top: 1%;
      opacity: 1;
    }
    100% {
      top: 1%;
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
      <Pop>
        <img src={pop} alt="pop" className="pop" />
        <img src={pop} alt="pop" className="pop1" />
        <img src={pop} alt="pop" className="pop2" />
        <img src={pop} alt="pop" className="pop3" />
        <img src={pop} alt="pop" className="pop4" />
        <img src={pop} alt="pop" className="pop5" />
      </Pop>
      <Character>
        <img
          data-aos="fade-left"
          data-aos-offset="400"
          data-aos-easing="ease-in-sine"
          data-aos-duration="800"
          src={ursula}
          className="ursula"
        />
        <img src={bigrock} alt="bigrock" className="big-rock" />

        <img
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-duration="800"
          src={ariel}
          className="ariel"
        />
        <img src={salai} alt="salai" className="salai" />
      </Character>
      <div className="para1" data-aos="fade-down" data-aos-duration="1000">
        <p>
          Meanwhile, Ariel kept on thinking about the prince. She tried to look
          for him but failed. Now, she always waited near his palace to see him.
          “ We live longer than humans, but their souls live forever.” Her
          grandmother said, Ariel wanted to have a human soul.
        </p>
      </div>

      <div className="para2" data-aos="fade-up" data-aos-duration="1000">
        <p>
          For this, she went to the sea witch who know the magic. The witch
          said, “I will give you two human legs in exchange for your tail, but
          you have to give me your voice and if the prince loves another, you
          will change into White Sea foam. Then, the witch gave her a magic
          potion to drink. When she drank the bitter portion, she became
          unconscious.
        </p>
      </div>
    </MyDiv>
  );
}

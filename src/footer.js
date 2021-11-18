import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import bg from "./Img/เสร็จแล้วโว้ยยยยยยยยยยย.png";
import pop from "./Img/น้ำ.png";
import poom from "./Img/ภูมิ.png";
import pan from "./Img/แพน.png";
import chay from "./Img/ชาย.png";
import sine from "./Img/ทราย.png";
import fahsai from "./Img/ฟ้าใส.png";
import p from "./Img/พี.png";
const MyDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  /* border: 1px solid black; */
  background: url(${bg});
  background-repeat: no-repeat;
  background-size: 100% 100%;

  & h1 {
    padding-top: 1em;
    text-align: center;
    font-size: 8vw;
    color: #fff;
    text-shadow: 2px 2px 10px #45a3d9;
  }
`;
const Pic = styled.div`
  width: 100vw;
  & * {
    position: absolute;
  }
  & .pop {
    width: 10vw;
    top: 30%;
    right: 37%;
    animation: popPopMove20 6s infinite;
  }
  & .pop1 {
    width: 13vw;
    top: 55%;
    right: 20%;
    animation: popPopMove20 4s infinite;
  }
  & .pop2 {
    width: 13vw;
    top: 40%;
    left: 0;
    animation: popPopMove20 8s infinite;
  }
  & .pop3 {
    width: 10vw;
    bottom: 0;
    right: 0;
    animation: popPopMove20 10s infinite;
  }
  & .pop4 {
    width: 10vw;
    bottom: 0;
    left: 40%;
    animation: popPopMove20 3s infinite;
  }
  & .pop5 {
    width: 10vw;
    bottom: 0;
    left: 15%;
    animation: popPopMove20 4s infinite;
  }
  @keyframes popPopMove20 {
    0% {
      top: 50%;
    }
    100% {
      top: 1%;
      opacity: 0;
    }
  }
`;
const Member = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  box-sizing: border-box;
  position: absolute;
  bottom: 10%;
  padding-top: 2%;
  padding-bottom: 2%;
  & a {
    text-decoration: none;
    transition: transform 0.5s;
  }
  & a:hover {
    transform: translateY(-20px);
    text-decoration: none;
    box-shadow: 1px 1px 10px #fff182;
    border-radius: 1em;
  }
`;
const Person = styled.div`
  width: 220px;
  height: 350px;
  background-color: rgba(48, 73, 130, 0.8);
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & * {
    text-transform: uppercase;
    color: #fff;
    text-shadow: 2px 2px 10px #45a3d9;
    font-weight: bold;
  }

  & img {
    width: 100%;
    object-fit: cover;
  }
`;

export default function Footer() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <MyDiv>
      <Pic>
        <img src={poom} className="pop" />
        <img src={pan} className="pop1" />
        <img src={chay} className="pop2" />
        <img src={sine} className="pop3" />
        <img src={fahsai} className="pop4" />
        <img src={p} className="pop5" />
      </Pic>
      <h1 data-aos="fade-down" data-aos-duration="1000">
        Member
      </h1>
      <Member data-aos="fade-down" data-aos-duration="1000">
        <a href="https://www.instagram.com/zzimuhp.siri/">
          <Person>
            <img src={poom} alt="poom" />
            <h3>Poom</h3>
            <h4>Front-end</h4>
          </Person>
        </a>
        <a href="https://www.instagram.com/_peterpeterpan_/">
          <Person>
            <img src={pan} alt="pan" />
            <h3>Pan</h3>
            <h4>Front-end</h4>
          </Person>
        </a>
        <a href="https://www.instagram.com/stck.ccccc/">
          <Person>
            <img src={chay} alt="chay" />
            <h3>chay</h3>
            <h4>Front-end</h4>
          </Person>
        </a>
        <a href="https://www.instagram.com/tan_xsi/">
          <Person>
            <img src={sine} alt="sine" />
            <h3>sine</h3>
            <h4>Web-design</h4>
          </Person>
        </a>
        <a href="https://www.instagram.com/_thisisadeadbody/">
          <Person>
            <img src={fahsai} alt="fahsai" />
            <h3>fahsai</h3>
            <h4>Web-design</h4>
          </Person>
        </a>
        <a href="https://web.facebook.com/Peerapon2545">
          <Person>
            <img src={p} alt="p" />
            <h3>P</h3>
            <h4>infrastructure</h4>
          </Person>
        </a>
      </Member>
    </MyDiv>
  );
}

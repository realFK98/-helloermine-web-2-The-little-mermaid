import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import chest2 from "./Img/หีบสอง.png";
import rockpkl from "./Img/หินปะการังล่าง.png";
import pop from "./Img/น้ำ.png";
import fishmumi from "./Img/ภาพปลากรอบ.png";

const MyDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  overflow: hidden;

  & p {
    font-size: 2.2vw;
    color: #ffff;
  }
  & .para1 {
    margin-top: 1em;
    padding: 2em;
    width: 50%;
    float: left;
  }
  & .para2 {
    padding: 2em;
    margin-top: 38em;
    width: 50%;
    float: right;
    text-align: right;
  }
`;
const Pic = styled.div`
  width: 100vw;
  & * {
    position: absolute;
  }
  & .chest {
    width: 35vw;
    top: 1%;
    right: 8%;
  }
  & .rockpkl {
    width: 50vw;
    bottom: -15%;
    left: 0;
  }
  & .pop {
    width: 15vw;
    top: 10%;
    right: 37%;
    animation: popPopMove17 5s infinite;
  }
  & .pop1 {
    width: 8vw;
    top: 35%;
    right: 3%;
    animation: popPopMove17 7s infinite;
  }
  & .fish {
    width: 25vw;
    top: 40%;
    right: 37%;
    transform: scaleX(-1) rotate(20deg);
    animation: moveFish13 7s infinite;
  }
  @keyframes popPopMove17 {
    0% {
      top: 30%;
    }
    100% {
      top: 1%;
      opacity: 0;
    }
  }
  @keyframes moveFish13 {
    0% {
      transform: translate(-1000px) scaleX(-1);
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
`;

export default function Page7() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <MyDiv>
      <Pic>
        <img src={chest2} className="chest" />
        <img src={rockpkl} className="rockpkl" />
        <img src={pop} className="pop" />
        <img src={pop} className="pop1" />
        <img src={fishmumi} className="fish" />
      </Pic>

      <div className="para1" data-aos="fade-down" data-aos-duration="1000">
        <p>
          This saddened Ariel . She knew that her time of death was near, and
          she tried to spend, as much time as she could, with her prince. But
          she could not tell him of her love for him as she could not speak. At
          the same time, her sisters come to know about this.
        </p>
      </div>
      <div className="para2" data-aos="fade-up" data-aos-duration="1000">
        <p>
          They brought her a magic knife from the witch. They said, “Little
          sister ! Little sister ! Now you will have to kill the prince in the
          sleep. Only after that can you come back to sea as a mermaid. The
          little mermaid quietly came to the prince’ room at night.
        </p>
      </div>

      {/* <img src={} /> */}
    </MyDiv>
  );
}

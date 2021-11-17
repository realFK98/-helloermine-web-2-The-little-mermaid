import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import ariel1 from "./Img/แอเรียลเปิดปิด.png";
import ariel2 from "./Img/แอเรียลหน้าสอง.png";
import rock from "./Img/หินนิ.png";
import fish from "./Img/ปลา1ตัว2ชม..png";
import rockunder from "./Img/หินปะการังตรงปลา.png";
import fishyellow from "./Img/ปลาน้อยน้อยอะไร.png";
import { useEffect } from "react";

const MyDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  overflow: hidden;
  padding-top: 5%;

  & p {
    font-size: 2vw;
    color: #ffff;
  }
  & .para1 {
    margin-top: 3em;
    padding: 2em;
    width: 50%;
    float: left;
  }
  & .para2 {
    padding: 2em;
    margin-top: 9em;
    width: 60%;
    float: right;
    text-align: right;
  }
`;
const Pic = styled.div`
  width: 100vw;

  @keyframes moveFish {
    0% {
      transform: translate(1500px);
    }
    100% {
      transform: translate(-1100px);
    }
  }

  @keyframes moveFish2 {
    0% {
      transform: translate(-1100px) scaleX(-1);
    }
    100% {
      transform: translate(1100px) scaleX(-1);
    }
  }

  @keyframes moveFish3 {
    0% {
      transform: translate(500px);
      opacity: 1;
    }
    90% {
      transform: translate(20px);
      opacity: 1;
    }
    100% {
      transform: translate(20px);
      opacity: 0;
    }
  }

  & .ariel {
    right: 10%;
    width: 35vw;
    position: absolute;
  }
  & .ariel1 {
    width: 35vw;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  & .rock {
    width: 30vw;
    position: absolute;
    top: 15%;
    left: 20%;
  }
  & .fish1 {
    width: 8vw;
    position: absolute;
    top: 30%;
    left: 20%;

    animation: moveFish 20s ease 0s infinite normal none;
  }
  & .fish2 {
    width: 8vw;
    position: absolute;
    top: 45%;
    left: 40%;

    animation: moveFish2 20s ease 0s infinite normal none;
  }
  & .fish-under {
    width: 10vw;
    position: absolute;
    bottom: 10%;
    right: 23%;
    animation: moveFish3 5s infinite;
  }
  & .rock-under {
    width: 15vw;
    position: absolute;
    bottom: 0;
    right: 10%;
  }
`;

export default function Page2() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <MyDiv>
      <Pic>
        <img
          src={ariel1}
          alt="ariel"
          className="ariel"
          data-aos="fade-left"
          data-aos-offset="400"
          data-aos-easing="ease-in-sine"
          data-aos-duration="800"
        />
        <img src={rock} alt="rock" className="rock" />
        <img src={fish} alt="fish" className="fish1" />
        <img src={fish} alt="fish" className="fish2" />
      </Pic>
      <div className="para1" data-aos="fade-right" data-aos-duration="800">
        <p>
          Under the sea has the sea king’s family lives. All his daughters were
          beautiful but Ariel the youngest daughter was the most beautiful. She
          was not like the others. Her sisters liked to play . But she liked to
          listen to stories.
        </p>
      </div>

      <Pic>
        <img
          src={ariel2}
          alt="arial2"
          className="ariel1"
          data-aos="fade-right"
          data-aos-offset="50"
          data-aos-easing="ease-in-sine"
          data-aos-duration="800"
        />
        <img src={rockunder} alt="rock" className="rock-under" />
        <img src={fishyellow} alt="rock" className="fish-under" />
      </Pic>

      <div className="para2" data-aos="fade-left" data-aos-duration="800">
        <p>
          When she was fifteen years old, her grandmother decorated her hair
          with lilies. Then she ordered eight oysters to attach themselves to
          her tail. She started swimming up to the surface to the sea. As she
          reached the surface, Ariel saw a large ship in which sailors were
          singing and dancing. She quietly continues watching them.
        </p>
      </div>
    </MyDiv>
  );
}

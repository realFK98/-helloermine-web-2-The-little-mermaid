import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import ariel from "./Img/แอเรียลเปิดปิด.png";
import popWater from "./Img/น้ำ.png";
import { useEffect } from "react";
const MyDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  overflow: hidden;
  margin-top: 20%;
  padding-bottom: 15%;

  & p {
    font-size: 2.2vw;
    color: #ffff;
  }
  & .para1 {
    padding: 0 5%;
    width: 50%;
    float: left;
  }
`;
const Pic = styled.div`
  width: 100vw;
  & .ariel {
    width: 50vw;
    position: absolute;
    top: 8%;
    right: 4%;
  }
  & .pop1 {
    width: 12vw;
    position: absolute;
    top: 1%;
    left: 87%;
    animation: popPopMove18 4s infinite;
  }
  & .pop2 {
    width: 10vw;
    position: absolute;
    top: 14%;
    right: 44%;
    animation: popPopMove18 8s infinite;
  }
  & .pop3 {
    width: 8vw;
    position: absolute;
    top: 29%;
    right: 16%;
    animation: popPopMove18 6s infinite;
  }
  @keyframes popPopMove18 {
    0% {
      top: 30%;
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
      <Pic>
        <img
          src={ariel}
          className="ariel"
          data-aos="fade-left"
          data-aos-duration="1500"
        />
        <img src={popWater} className="pop1" />
        <img src={popWater} className="pop2" />
        <img src={popWater} className="pop3" />
      </Pic>
      <div className="para1" data-aos="fade-down" data-aos-duration="1000">
        <p>
          She kissed him but could not stab him with the knife as she truly
          loved him. So, after giving him last one look, she threw herself into
          the sea. She found herself in the sky with the daughters of the sky –
          The twinkling stars . And now she lives happily and joyfully with
          them.
        </p>
      </div>

      {/* <img src={} /> */}
    </MyDiv>
  );
}

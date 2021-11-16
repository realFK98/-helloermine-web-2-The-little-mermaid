import styled from "styled-components";
import pakarang from "./Img/ปาการัง.png";
import chest from "./Img/สมบัติ.png";
import rock from "./Img/หิน+ปะการัง.png";
import bubble from "./Img/ฟอง.png";
import popWater from "./Img/น้ำ.png";

const MyDiv = styled.div`
  width: 100%;
  height: 100vh;
  border: 1px solid black;
`;

const Text = styled.div`
  width: fit-content;
  text-align: center;
  position: absolute;
  top: 30%;
  left: 13%;

  & h1 {
    font-size: 14.5vh;
    color: #c3183a;
    text-shadow: 10px 2px 15px #fffa82;
  }
  & h3 {
    font-size: 4.2vh;
    color: #fffa82;
  }
`;

const Pkl = styled.div`
  width: 100vw;

  & .pakarang {
    position: absolute;
    top: 360px;
    left: 200px;
    width: 350px;
  }
  & .pakarang2 {
    position: absolute;
    top: 360px;
    right: 230px;
    width: 350px;
  }
  & .pakarang3 {
    position: absolute;
    top: 360px;
    left: 320px;
    width: 350px;
    transform: scaleX(-1);
  }
  & .pakarang4 {
    position: absolute;
    top: 360px;
    right: 360px;
    width: 350px;
    transform: scaleX(-1);
  }
  & .bubble {
    position: absolute;
    top: 70px;
    left: 90px;
    width: 300px;
  }
`;
const Chest = styled.div`
  width: 100vw;

  & .chest1 {
    position: absolute;
    top: 450px;
    right: 320px;
    width: 300px;
    transform: scaleX(-1);
  }
  & .rock {
    position: absolute;
    top: 440px;
    left: 280px;
    width: 300px;
  }
`;
const Pop = styled.div`
  width: 100vw;

  & .pop1 {
    position: absolute;
    top: 390px;
    right: 290px;
    width: 200px;
  }
  & .pop2 {
    position: absolute;
    top: 350px;
    left: 870px;
    width: 110px;
  }
  & .pop3 {
    position: absolute;
    top: 310px;
    right: 490px;
    width: 50px;
  }
  & .pop4 {
    position: absolute;
    top: 320px;
    right: 280px;
    width: 110px;
  }
`;

export default function Page1() {
  return (
    <MyDiv>
      <Pkl>
        <img src={bubble} className="bubble" />
        <img src={pakarang} className="pakarang" />
        <img src={pakarang} className="pakarang2" />
        <img src={pakarang} className="pakarang3" />
        <img src={pakarang} className="pakarang4" />
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
      <Text>
        <h1>The Little Mermaid</h1>
        <h3>
          Deep down into the sea,there are special species.Now please know thier
          story
        </h3>
      </Text>
    </MyDiv>
  );
}

import styled from "styled-components";
const MyDiv = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 5em;
  border: 1px solid black;

  & p {
    /* padding-right: 14em; */
    font-size: 1.5vw;
    color: #ffff;
  }
  & .para1 {
    padding: 4em;
    width: 50%;
    float: left;
  }
`;

export default function Page2() {
  return (
    <MyDiv>
      <div className="para1">
        <p>
          In the evening, there was a celebration on the ship because of the
          sixteenth birthday of the prince. The little mermaid was fascinated by
          the prince. That night a terrible storm blew over the sea. Ariel saw
          the ship sinking. All the sailors drowned, and she quickly dived into
          the sea and saved the prince. The prince was unconscious.
        </p>
      </div>

      {/* <img src={} /> */}
    </MyDiv>
  );
}

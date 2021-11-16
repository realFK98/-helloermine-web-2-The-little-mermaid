import styled from "styled-components";
const MyDiv = styled.div`
  width: 100%;
  height: 100vh;

  border: 1px solid black;

  & p {
    /* padding-right: 14em; */
    font-size: 1.5vw;
    color: #ffff;
  }
  & .para1 {
    margin-top: 2em;
    padding: 2em;
    width: 50%;
    float: left;
  }
`;

export default function Page2() {
  return (
    <MyDiv>
      <div className="para1">
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

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
    float: right;
  }
`;

export default function Page2() {
  return (
    <MyDiv>
      <div className="para1">
        <p>
          Ariel carried the prince to the shore and lay him down. She went back
          to the sea because she did not want anybody to see her. Soon a pretty
          girl walking by saw the prince lying there and help him.
        </p>
      </div>

      {/* <img src={} /> */}
    </MyDiv>
  );
}

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
    margin-top: 1em;
    padding: 2em;
    width: 50%;
    float: left;
  }
  & .para2 {
    padding: 2em;
    margin-top: 25em;
    width: 50%;
    float: right;
    text-align: right;
  }
`;

export default function Page2() {
  return (
    <MyDiv>
      <div className="para1">
        <p>
          Under the sea has the sea king’s family lives. All his daughters were
          beautiful but Ariel the youngest daughter was the most beautiful. She
          was not like the others. Her sisters liked to play . But she liked to
          listen to stories.
        </p>
      </div>
      <div className="para2">
        <p>
          When she was fifteen years old, her grandmother decorated her hair
          with lilies. Then she ordered eight oysters to attach themselves to
          her tail. She started swimming up to the surface to the sea. As she
          reached the surface, Ariel saw a large ship in which sailors were
          singing and dancing. She quietly continues watching them.
        </p>
      </div>

      {/* <img src={} /> */}
    </MyDiv>
  );
}

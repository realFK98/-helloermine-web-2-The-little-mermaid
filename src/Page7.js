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
          This saddened Ariel . She knew that her time of death was near, and
          she tried to spend, as much time as she could, with her prince. But
          she could not tell him of her love for him as she could not speak. At
          the same time, her sisters come to know about this.
        </p>
      </div>
      <div className="para2">
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

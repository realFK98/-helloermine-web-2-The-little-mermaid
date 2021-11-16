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
          When she gained consciousness, she found herself in the arms of her
          prince. She had two legs instead of a tail. The prince took her back
          to the palace. There, she enjoyed herself and dance away the whole
          day, but she could neither speak nor sing. They both were happy.
        </p>
      </div>
      <div className="para2">
        <p>
          One day the king ordered the prince to marry the daughter of a
          neighboring king. When the prince saw the prince, he found her to be
          the same girl who had saved him on the beach. The prince fell in love
          with her and then and there decided to marry her.
        </p>
      </div>

      {/* <img src={} /> */}
    </MyDiv>
  );
}

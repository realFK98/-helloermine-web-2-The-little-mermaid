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
          Meanwhile, Ariel kept on thinking about the prince. She tried to look
          for him but failed. Now, she always waited near his palace to see him.
          “ We live longer than humans, but their souls live forever.” Her
          grandmother said, Ariel wanted to have a human soul.
        </p>
      </div>
      <div className="para2">
        <p>
          For this, she went to the sea witch who know the magic. The witch
          said, “I will give you two human legs in exchange for your tail, but
          you have to give me your voice and if the prince loves another, you
          will change into White Sea foam. Then, the witch gave her a magic
          potion to drink. When she drank the bitter portion, she became
          unconscious.
        </p>
      </div>

      {/* <img src={} /> */}
    </MyDiv>
  );
}

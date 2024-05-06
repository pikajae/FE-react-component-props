import "./Button.css";

const Button = (props) => {
  return <button className="btn"
  style={{backgroundColor:props.color}}
  //buttonColor가 default값이었던 0에서 1로 바뀌면 color 변수가 "pink"로 지정
  //style={backgroundColor="pink"} 로 됨.
  onClick={props.onClick}
  // SelectButtons에서 정의한 onClick을 그대로 받아옴
  >
    {props.text}
  </button>;
};

export default Button;
import Button from "../components/Button/Button";
import { useState } from "react";

const SelectButtons = () => {

  const [buttonColor,setButtonColor] = useState(0);
  const setIdx = (idx) => {
    setButtonColor(idx);
  }
  const color=0;

  return <div className="selectBtns">
  <Button
  text="primary"
  onClick={() => setIdx(1)}
  // onClick함수의 기능을 setIdx의 기능과 일치시킴 -> 클릭시 buttonColor가 1로 지정
  color={buttonColor===1 ? "pink" : undefined}
  //color라는 새로운 변수에 삼항연산자를 이용해 pink 아니면 undefined를 담음
  //onClick이용 클릭시 buttonColor가 1이 됨 -> 변수 color가 "pink"로 지정.
  //다른 버튼 클릭시 buttonColor가 2 또는 3으로 바뀜 -> 기존 버튼의 핑크색은 해제
  ></Button>
  <Button
  text="secondary"
  onClick={()=>setIdx(2)}
  color={buttonColor===2 ? "pink" : undefined}
  ></Button>
  <Button
  text="default"
  onClick={()=>setIdx(3)}
  color={buttonColor===3 ? "pink" : undefined}
  ></Button>
  </div>;
};

export default SelectButtons;
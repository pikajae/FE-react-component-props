import "./Box.css";

const Box = ({boxcolor,text}) => {
  return (
    <div
      className="box"
      style={{
        backgroundColor: boxcolor
      }}
    >
      <p>{text}</p>
    </div>
  );
};

export default Box;

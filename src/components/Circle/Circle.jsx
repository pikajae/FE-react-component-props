import "./Circle.css";

const Circle = (props) => {
  return (
    <div
      className="circle"
      style={{
        backgroundColor: props.circlecolor
      }}
    >
      <p></p>
    </div>
  );
};

export default Circle;

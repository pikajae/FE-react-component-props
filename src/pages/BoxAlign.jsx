import Box from "../components/Box/Box";
import Circle from "../components/Circle/Circle";

const BoxAlign = () => {
  const circleColorArr = [
    "pink",
    "red",
    "black",
    "gray",
    "green",
    "blue",
    "orange",
  ];
  const circlelist = circleColorArr.map((circlecolor) => (
    <Circle circlecolor={circlecolor} />
  ));
  return (
    <>
      <div className="container">
        <div>
          <Box boxcolor="red" text="1번공" />
          <Box boxcolor="blue" text="2번공" />
          <Box boxcolor="green" text="3번공" />
          <Box boxcolor="pink" text="4번공" />
        </div>
        <div className="circlecontainer">{circlelist}</div>
      </div>
    </>
  );
};

export default BoxAlign;

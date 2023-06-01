import React from "react";

type PropsType = {
  time: number;
};

function Timer(props: PropsType) {
  const { time } = props;
  return (
    <h4>
      {Math.floor(time / 3600)} h {Math.floor(Math.floor(time / 60) % 60)} min{" "}
      {time % 60} sec
    </h4>
  );
}

export default Timer;

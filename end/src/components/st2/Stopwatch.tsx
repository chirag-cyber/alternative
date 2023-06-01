import React from "react";
import Timer from "./Timer";

type PropsType = {};
type LapsProps = {
  id: number;
  time: number;
};

interface StateProps {
  timerCount: number;
  timerRef: number | undefined;
  laps: LapsProps[];
}

class Stopwatch extends React.Component<PropsType, StateProps> {
  state = {
    timerCount: 0,
    timerRef: undefined,
    laps: [] as LapsProps[]
  };

  start = () => {
    clearInterval(this.state.timerRef);
    let ref: number = window.setInterval(() => {
      this.setState({
        ...this.state,
        timerCount: this.state.timerCount + 1
      });
    }, 1000);
    this.setState({
      ...this.state,
      timerRef: ref
    });
  };
  stop = () => {
    clearInterval(this.state.timerRef);
    this.setState({
      timerRef: undefined
    });
  };

  reset = () => {
    clearInterval(this.state.timerRef);

    this.setState({
      timerRef: undefined,
      timerCount: 0
    });
  };

  lap = () => {
    this.setState({
      ...this.state,
      laps: [
        ...this.state.laps,
        { id: Date.now(), time: this.state.timerCount }
      ]
    });
  };

  render() {
    return (
      <>
        <h1>Stopwatch</h1>
        <Timer time={this.state.timerCount} />
        {this.state.timerRef ? (
          <button onClick={this.stop}>Stop</button>
        ) : (
          <button onClick={this.start}>Start</button>
        )}
        <button onClick={this.reset}>Reset</button>
        <button onClick={this.lap}>Lap</button>

        <ul>
          {this.state.laps &&
            this.state.laps.map((item) => {
              return <Timer time={item.time} />;
            })}
        </ul>
      </>
    );
  }
}

export default Stopwatch;

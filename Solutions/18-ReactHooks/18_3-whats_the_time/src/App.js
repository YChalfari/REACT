import React, { useState } from "react";
import Input from "./Input";

const App = () => {
  const [time, setTime] = useState({
    seconds: 0,
    minutes: 0,
    hours: 0,
  });
  const onChange = (type, value) => {
    const newTime = calcTime(type, value);
    setTime({ ...newTime });
  };
  const calcTime = (type, value) => {
    switch (type) {
      case "seconds":
        return {
          seconds: value,
          minutes: value / 60,
          hour: value / 3600,
        };

      case "minutes":
        return {
          seconds: value * 60,
          minutes: value,
          hour: value / 60,
        };

      case "hours":
        return {
          seconds: value * 360,
          minutes: value * 60,
          hour: value,
        };
    }
  };
  const renderInputs = () => {
    return Object.entries(time).map((measurement) => (
      <Input
        key={measurement[0]}
        onChange={onChange}
        type={measurement[0]}
        value={measurement[1]}
      />
    ));
  };
  return <div>{renderInputs()}</div>;
};

export default App;

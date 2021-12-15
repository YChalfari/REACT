import React from "react";

const Confirm = (props) => {
  const printData = (data) => {
    return Object.entries(data).map((entry, i) => {
      return <h3 key={i}>{entry.join(": ")}</h3>;
    });
  };
  function handleButtonClick(e) {
    props.onButtonClick(e.target.name);
  }
  return (
    <div className="confirmation-page">
      <h2>Are you sure you want to send the survey?</h2>
      <p>
        Double check your info and click send to confirm or back to make changes
      </p>
      {printData(props.data)}
      <button name="back" className="btn" onClick={handleButtonClick}>
        Back
      </button>
      <button name="send" className="btn" onClick={handleButtonClick}>
        Send
      </button>
    </div>
  );
};
export default Confirm;

import React from "react";
import "./App.css";
import Form from "./modules/Form";
import Confirm from "./modules/Confirm";
import SurveySent from "./modules/SurveySent";
class App extends React.Component {
  state = {
    shouldShow: {
      confirm: false,
      sent: false,
    },
  };
  handleOnSubmit = (page, data) => {
    page === "form" && this.setState({ data: data });
    const whatToShow = (page) => {};
    this.setState((state) => {
      return {
        shouldShow:
          page === "form"
            ? { confirm: !state.shouldShow.confirm, sent: true }
            : page === "back"
            ? { confirm: false, sent: false }
            : { confirm: false, sent: true },
      };
    });
  };
  render() {
    return (
      <div className="App">
        {this.state.shouldShow.confirm ? (
          <Confirm
            page={"confirm"}
            data={this.state.data}
            onButtonClick={this.handleOnSubmit}
          />
        ) : this.state.shouldShow.sent ? (
          <SurveySent page={"survey"} />
        ) : (
          <Form
            page="form"
            onFormSubmit={this.handleOnSubmit}
            data={this.state.data}
          />
        )}
      </div>
    );
  }
}

export default App;

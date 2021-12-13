const root = document.querySelector("#root");
const data = ["Hello", "world"];
const number1 = 5;
const number2 = 6;
const string = "I love React!";
class App extends React.Component {
  render() {
    return (
      <div>
        {data.join(" ")}
        <br />
        {`${number1} + ${number2} = ${number2 + number1}`}
        <br />
        {`The string's length is ${string.length}`}
      </div>
    );
  }
}
ReactDOM.render(<App />, root);

import "./App.css";
import Card from "./modules/Card.js";
import CardContent from "./modules/CardContent";
import CardIMG from "./modules/CardIMG";
import CardTitle from "./modules/CardTitle";
import CardDesc from "./modules/CardDesc";
import CardLinks from "./modules/CardLinks";
import Link from "./modules/Link";
function App() {
  return (
    <div className="App">
      <Card>
        <CardIMG source="https://picsum.photos/300/200?random=1" />
        <CardContent>
          <CardTitle text="Random Title 1" />
          <CardDesc text="Random Desc 1" />
        </CardContent>
        <CardLinks>
          <Link text="SHARE" />
          <Link text="EXPLORE" />
        </CardLinks>
      </Card>
      <Card>
        <CardIMG source="https://picsum.photos/300/200?random=2" />
        <CardContent>
          <CardTitle text="Random Title 2" />
          <CardDesc text="Random Desc 2" />
        </CardContent>
        <CardLinks>
          <Link text="SHARE" />
          <Link text="EXPLORE" />
        </CardLinks>
      </Card>
      <Card>
        <CardIMG source="https://picsum.photos/300/200?random=3" />
        <CardContent>
          <CardTitle text="Random Title 3" />
          <CardDesc text="Random Desc 3" />
        </CardContent>
        <CardLinks>
          <Link text="SHARE" />
          <Link text="EXPLORE" />
        </CardLinks>
      </Card>
    </div>
  );
}

export default App;

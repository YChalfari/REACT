import React from "react";
import store from "../store";
import { Link } from "react-router-dom";
import ProductDetails from "../components/ProductDetails";
class Products extends React.Component {
  state = { store };
  componentDidMount() {
    this.setState({ store });
  }
  renderProducts = () => {
    return store.map((product) => (
      <Link
        key={product.id}
        to={`${this.props.location.pathname}/${product.id}`}
      >
        <div className="product-display">
          <h3>{product.title}</h3>
          <img src={product.imageUrl} alt="" />
        </div>
      </Link>
    ));
  };
  render() {
    return (
      <div>
        <h2>Products</h2>
        <div className="content"></div>
        {this.renderProducts()}
      </div>
    );
  }
}

export default Products;

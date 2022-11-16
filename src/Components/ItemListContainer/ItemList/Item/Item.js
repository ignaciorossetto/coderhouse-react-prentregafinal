import React from "react";
import Card from "react-bootstrap/Card";
import ItemCounter from "../../../ItemCounter/ItemCounter";
import { Link } from "react-router-dom";
import './Item.css'

const Item = ({ product }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card style={{ width: "18rem", border: "none" }}>
        <Link to={`/product/${product.product_id}`}>
          <Card.Img
            className="cardImg"
            variant="top"
            src={product.image}
            style={{
              border: "solid 1px white",
              boxShadow: "-1px 1px 39px 1px rgb(0 0 0 / 84%)",
              WebkitBoxShadow: "-1px 1px 10px 1px rgb(219 219 219 / 84%)",
              MozBoxShadow: "-1px 1px 39px 1px rgba(0, 0, 0, 0.84)",
            }}
          />
        </Link>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>PRECIO: ${product.price.toLocaleString()}</Card.Text>
          <ItemCounter stock={product.stock} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;

import React from "react";
import Card from "react-bootstrap/Card";
import ItemCounter from "../../ItemCounter/ItemCounter";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link } from "react-router-dom";

const ItemDetail = ({ singleProduct }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Link to={`/products/category/${singleProduct.category}`}>
        <KeyboardBackspaceIcon fontSize="large" />
      </Link>
      <Card
        style={{
          flexDirection: "row",
          width: "25rem",
          border: "none",
          margin: "0px 15px",
        }}
      >
        <Card.Img
          variant="top"
          src={singleProduct.image}
          style={{
            border: "solid 1px white",
            boxShadow: "-1px 1px 39px 1px rgb(0 0 0 / 84%)",
            WebkitBoxShadow: "-1px 1px 10px 1px rgb(219 219 219 / 84%)",
            MozBoxShadow: "-1px 1px 39px 1px rgba(0, 0, 0, 0.84)",
          }}
        />
        <Card.Body>
          <Card.Title as="h1">{singleProduct.name}</Card.Title>
          <Card.Text>PRECIO: ${singleProduct.price.toLocaleString()}</Card.Text>
          <Card.Text>{singleProduct.size}</Card.Text>
          <ItemCounter stock={singleProduct.stock} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetail;

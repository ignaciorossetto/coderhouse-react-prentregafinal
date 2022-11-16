import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const ItemCounter = ({stock}) => {
  let [number, setNumber] = useState(1);
  const [isDisable, setIsDisable] = useState(false);

    

  const onAdd = () => {

    setNumber(number = number + 1);
  };
  const onSub = () => {

    setNumber(number = number - 1);
  };

  const handleAddToCart = () => {
    setNumber(1)
  }



  return (
    <div className="d-flex justify-content-center align-items-center">
      <Button variant="primary" onClick={onAdd} disabled={stock===0 ? true : number === stock   ? true : false} >
        +
      </Button>
      <Card.Text style={{ margin: "7px", marginBottom: "0px" } }>
        {stock === 0 ? 0 : number}
      </Card.Text>
      <Button variant="primary" onClick={onSub} disabled={stock===0 ? true : number === 1 ? true : false}
      style={{margin:'0px', marginRight:'10px'}}>-</Button>
      {stock === 0 ? 
      <p className="text-center" style={{margin:'0px'}}>Sin stock!</p> 
      : <ShoppingBasketIcon onClick={handleAddToCart} style={{cursor:"pointer"}}/>
    }
    </div>
  );
};

export default ItemCounter;

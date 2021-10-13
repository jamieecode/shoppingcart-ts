import React from "react";
import styled from "styled-components";
import { CartItemType } from "../App";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  button {
    background: white;
    width: 1rem;
    height: 1rem;
  }
`;

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
  <Container>
    <h4>{item.title}</h4>
    <p>Price: ${item.price}</p>
    <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
    <div>
      <button onClick={() => removeFromCart(item.id)}>-</button>
      <p>{item.amount}</p>
      <button onClick={() => addToCart(item)}>+</button>
    </div>
    <img src={item.image} alt={item.title} style={{ width: "5rem" }} />
  </Container>
);

export default CartItem;

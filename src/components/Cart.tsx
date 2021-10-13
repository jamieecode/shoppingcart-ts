import React from "react";
import CartItem from "./CartItem";
import styled from "styled-components";
import { CartItemType } from "../App";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((acc: number, item) => acc + item.amount * item.price, 0);
  return (
    <Container>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in Cart</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
    </Container>
  );
};

export default Cart;

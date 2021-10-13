import { useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import Item from "./components/Item";
import Navbar from "./components/Navbar";

//styles
const Container = styled.section`
  width: 80%;
  margin: 1em auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const StyledItem = styled.div`
  padding: 1em 0;
`;

//Types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);

  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );
  console.log(data);

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((acc, item) => acc + item.amount, 0);
  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems((prev) => {
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);
      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.reduce((acc, item) => {
        if (item.id === id) {
          if (item.amount === 1) return acc;
          return [...acc, { ...item, amount: item.amount - 1 }];
        } else {
          return [...acc, item];
        }
      }, [] as CartItemType[])
    );
  };

  if (isLoading) return <div>loading...</div>;
  if (error) return <div>Something went wrong...</div>;

  return (
    <>
      <Navbar
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        getTotalItems={getTotalItems}
        cartItems={cartItems}
        handleAddToCart={handleAddToCart}
        handleRemoveFromCart={handleRemoveFromCart}
      />
      <Container>
        {data?.map((item) => (
          <StyledItem key={item.id}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </StyledItem>
        ))}
      </Container>
    </>
  );
};

export default App;

import { useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import Item from "./components/Item";
import Navbar from "./components/Navbar";

//styles
const Container = styled.section`
  width: 80%;
  margin: 0 auto;
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

  const getTotalItems = (items: CartItemType[]) => null;
  const handleAddToCart = (clickedItem: CartItemType) => null;
  const handleRemoveFromCart = () => null;

  if (isLoading) return <div>loading...</div>;
  if (error) return <div>Something went wrong...</div>;

  return (
    <>
      <Navbar
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        getTotalItems={getTotalItems}
        cartItems={cartItems}
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

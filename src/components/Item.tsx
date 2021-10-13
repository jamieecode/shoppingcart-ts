import styled from "styled-components";
import { CartItemType } from "../App";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 15rem;
  img {
    width: 10rem;
    height: 12rem;
    display: block;
    margin: 0 auto;
  }

  button {
    background-color: #001219;
    padding: 0.8em;
    font-size: 1.1rem;
    font-weight: 500;
    color: white;
    margin: 1em 0;
  }

  button:hover {
    background-color: #1d3557;
    transition: 0.5s;
  }

  h3 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* 라인수 */
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    line-height: 1.5em;
    height: 3em;
    margin: 0.5em;
  }
`;

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Container>
    <img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <h4>${item.price}</h4>
    </div>
    <button onClick={() => handleAddToCart(item)}>Add to cart</button>
  </Container>
);

export default Item;

import styled from "styled-components";
import { IoCartOutline, IoCloseOutline } from "react-icons/io5";

export const StyledNav = styled.nav`
  display: flex;
  background-color: #001219;
  justify-content: space-between;
  align-items: center;
  padding: 0.6em;
  color: white;
`;

export const CartContainer = styled.div`
  position: relative;
  width: 2.2rem;
  cursor: pointer;
`;

export const Sidebar = styled.div`
  position: fixed;
  height: 100%;
  width: 200px;
  background-color: #001219;
  z-index: 2;
  top: 0;
  right: 0;
  transition: 0.5s;
  div {
    display: flex;
    justify-content: flex-end;
    padding: 1em;
  }
`;

export const StyledCartIcon = styled(IoCartOutline)`
  font-size: 1.5rem;
  color: white;
`;

export const StyledCloseIcon = styled(IoCloseOutline)`
  font-size: 1.1rem;
  cursor: pointer;
`;

export const NumberOfItems = styled.span`
  width: 1rem;
  height: 1rem;
  background-color: blue;
  border-radius: 50%;
  position: absolute;
  top: -5px;
  right: 0;
`;

const Navbar = ({ cartOpen, setCartOpen, getTotalItems, cartItems }) => {
  return (
    <StyledNav>
      <h1>SHopping Cart</h1>
      <div>
        <CartContainer>
          <StyledCartIcon onClick={() => setCartOpen(true)} />
          <NumberOfItems>{getTotalItems(cartItems)}</NumberOfItems>
        </CartContainer>
        {cartOpen && (
          <Sidebar>
            <div>
              <StyledCloseIcon onClick={() => setCartOpen(false)} />
            </div>
          </Sidebar>
        )}
      </div>
    </StyledNav>
  );
};

export default Navbar;

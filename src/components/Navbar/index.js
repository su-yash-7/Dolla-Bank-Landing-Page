import {
  Nav,
  NavbarContainer,
  Navlogo,
  MobileIcons,
  NavMenu,
  NavItems,
  NavLink,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import { FaBars } from 'react-icons/fa';
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <Navlogo to="/">dolla</Navlogo>
          <MobileIcons>
            <FaBars />
          </MobileIcons>
          <NavMenu>
            <NavItems>
              <NavLink to="about">About</NavLink>
            </NavItems>
            <NavItems>
              <NavLink to="discover">Discover</NavLink>
            </NavItems>
            <NavItems>
              <NavLink to="Services">Services</NavLink>
            </NavItems>
            <NavItems>
              <NavLink to="signup">Sign Up</NavLink>
            </NavItems>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;

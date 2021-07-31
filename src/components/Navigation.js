import React from "react";
import { Navbar, NavbarBrand, Container } from "reactstrap";

const Navigation = (props) => {
  return (
    <div>
      <Navbar className="mb-5 py-2 shadow-sm" expand="sm">
        <Container>
          <NavbarBrand href="/">
            <span style={{ color: "#62CD11" }}>Fitness</span>
            <span style={{ color: "#26BEFF" }}>Helpr</span>
          </NavbarBrand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;

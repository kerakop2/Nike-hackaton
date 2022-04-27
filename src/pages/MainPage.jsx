import { Container } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import FiltersBlock from "../components/FiltersBlock";

import ProductCard from "../components/ProductCard";
import { clientContext } from "../context/ClientContext";

const MainPage = () => {
  const data = useContext(clientContext);
  const { getProducts, products, handlePagination } = data;

  console.log(products);
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Container>
        <div>
          <FiltersBlock getProducts={getProducts} />
        </div>
        <InfiniteScroll
          dataLength={products.length}
          next={handlePagination}
          hasMore={true}
          loader={<h3>Loading...</h3>}
        >
          <div className="products-list">
            {products.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </InfiniteScroll>
        {/* <MyPagination /> */}{" "}
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
};

export default MainPage;

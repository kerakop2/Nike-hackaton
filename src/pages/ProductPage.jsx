import { ShoppingCart } from "@mui/icons-material";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect } from "react";
import { Badge, Nav, Navbar, NavDropdown } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import FiltersBlock from "../components/FiltersBlock";

import ProductCard from "../components/ProductCard";
import { clientContext } from "../context/ClientContext";

const ProductPage = () => {
  const data = useContext(clientContext);
  const { getProducts, products, handlePagination } = data;

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Container>
        <div className="navbar">
          <FiltersBlock getProducts={getProducts} />
          <Link to="/cart" style={{ marginRight: 10 }}></Link>
        </div>
        <InfiniteScroll
          dataLength={products.length}
          next={handlePagination}
          hasMore={true}
        >
          <div className="products-list">
            {products.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </InfiniteScroll>
      </Container>
    </div>
  );
};

export default ProductPage;

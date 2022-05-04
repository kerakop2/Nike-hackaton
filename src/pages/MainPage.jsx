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

const MainPage = () => {
  const data = useContext(clientContext);
  const { getProducts, products, handlePagination } = data;

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Container>
        <div className="main">
          <Link to="/products">
            <img
              width={1500}
              src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/6506b584-d4db-4d65-b5e8-cc92dcc9719a/nike-just-do-it.jpg"
              alt=""
            />
          </Link>
        </div>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <Link to="/products">
              <div className="carousel-item active">
                <img
                  src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-mens-shoes-5QFp5Z.png"
                  className=" d-block w-100 img"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/wzitsrb4oucx9jukxsmc/air-max-90-mens-shoes-6n3vKB.png"
                  className="d-block w-100 img"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0e9157d7-d70c-4f23-874a-9f996a7f9a6b/air-jordan-xxxvi-basketball-shoes-1D0pp7.png"
                  className="d-block w-100 img"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a6b731d5-387c-49d3-a365-c13c2cc67fb5/air-jordan-xxxvi-basketball-shoes-wrPl4w.png"
                  className="d-block w-100 img"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/52c3b515-b43a-4d62-b11c-d6392fe1b81a/air-jordan-1-acclimate-womens-shoes-hf6lp2.png"
                  className="d-block w-100 img"
                  alt="..."
                />
              </div>
            </Link>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div>
          <h1 style={{ marginTop: 50 }}>The Future's In the Air</h1>

          <div className="image">
            <Link to="/products">
              <img
                style={{ width: 700 }}
                src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_706,c_limit/3c686ad2-698c-410d-833e-8b37bf9b1a70/nike-just-do-it.jpg"
                alt=""
              />
            </Link>
            <Link to="/products">
              <img
                style={{ width: 700 }}
                src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_706,c_limit/57c2a6f5-1b10-43cb-be0d-ee32927cbbf9/nike-just-do-it.jpg"
                alt=""
              />
            </Link>
          </div>
        </div>

        <div className="footer">
          <div className="footer-word">
            <ul>
              <li>GIFT CARDS</li>
              <li>PROMOTIONS</li>
              <li>FIND A STORE</li>
              <li>SIGN UP FOR EMAIL</li>
              <li>BECOME A MEMBER</li>
              <li>NIKE JOURNAL</li>
              <li>SEND US FEEDBACK</li>
            </ul>
            <ul>
              <li>GET HELP</li>
              <li>Order Status</li>
              <li>Shipping and Delivery</li>
              <li>Returns</li>
              <li>Payment Options</li>
              <li>Gift Card Balance</li>
              <li>Contact Us</li>
            </ul>
            <ul>
              <li>ABOUT NIKE</li>
              <li>News</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Purpose</li>
              <li>Sustainability</li>
            </ul>
          </div>
        </div>

        <InfiniteScroll
          dataLength={products.length}
          next={handlePagination}
          hasMore={true}
          // loader={<h3>Loading...</h3>}
        >
          {/* <div className="products-list">
            {products.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div> */}
        </InfiniteScroll>
      </Container>
    </div>
  );
};

export default MainPage;

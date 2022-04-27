import axios from "axios";
import React, { useReducer, useState } from "react";
import { API } from "../helpers/const";

export const clientContext = React.createContext();

const initState = {
  products: [],
  cartCount: JSON.parse(localStorage.getItem("cart"))
    ? JSON.parse(localStorage.getItem("cart")).products.length
    : 0,
  myCart: null,
  productDetails: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "ADD_PRODUCT_TO_CART":
      return { ...state, cartCount: action.payload };
    case "DELETE_PRODUCT_IN_CART":
      return { ...state, cartCount: action.payload };
    case "GET_PRODUCTS_FROM_CART":
      return { ...state, myCart: action.payload };
    case "GET_PRODUCT_DETAILS":
      return { ...state, productDetails: action.payload };
    default:
      return state;
  }
};

const ClientContext = (props) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const getProducts = async () => {
    const response = await axios(`${API}${window.location.search}`);
    const action = {
      type: "GET_PRODUCTS",
      payload: response.data,
    };
    dispatch(action);
  };

  const productsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastproduct = currentPage * productsPerPage;
  // const indexOfFirstproduct = indexOfLastproduct - productsPerPage;
  const indexOfFirstproduct = 0;
  const products = state.products.slice(
    indexOfFirstproduct,
    indexOfLastproduct
  );
  const totalCount = state.products.length;

  const handlePagination = (page) => {
    // setCurrentPage(page);
    setCurrentPage(currentPage + 1);
  };

  const addProductToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    const newProduct = {
      product: product,
      count: 1,
      subPrice: 0,
    };
    newProduct.subPrice = product.price * newProduct.count;
    cart.products.push(newProduct);
    cart.totalPrice = cart.products.reduce((prev, next) => {
      return prev + next.subPrice;
    }, 0);
    localStorage.setItem("cart", JSON.stringify(cart));

    const action = {
      type: "ADD_PRODUCT_TO_CART",
      payload: cart.products.length,
    };
    dispatch(action);
  };

  const checkProductInCart = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      return false;
    }
    let prod = cart.products.find((item) => {
      return item.product.id === id;
    });
    if (prod) {
      return true;
    } else {
      return false;
    }
  };

  const deleteProductInCart = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    let newProducts = cart.products.filter((item) => {
      return item.product.id !== id;
    });
    cart.products = newProducts;
    cart.totalPrice = cart.products.reduce((prev, next) => {
      return prev + next.subPrice;
    }, 0);
    localStorage.setItem("cart", JSON.stringify(cart));
    const action = {
      type: "DELETE_PRODUCT_IN_CART",
      payload: cart.products.length,
    };
    dispatch(action);
  };

  const getProductsFromCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || { products: [] };
    const action = {
      type: "GET_PRODUCTS_FROM_CART",
      payload: cart,
    };
    dispatch(action);
  };

  const changeCountProductInCart = (id, count) => {
    if (count < 1) {
      return;
    }
    const cart = JSON.parse(localStorage.getItem("cart"));
    cart.products = cart.products.map((item) => {
      if (item.product.id === id) {
        item.count = count;
        item.subPrice = item.count * item.product.price;
      }
      return item;
    });
    cart.totalPrice = cart.products.reduce((prev, next) => {
      return prev + next.subPrice;
    }, 0);
    localStorage.setItem("cart", JSON.stringify(cart));
    getProductsFromCart();
  };

  const getProductDetails = async (id) => {
    const response = await axios(`${API}/${id}`);
    const action = {
      type: "GET_PRODUCT_DETAILS",
      payload: response.data,
    };
    dispatch(action);
  };

  return (
    <clientContext.Provider
      value={{
        getProducts: getProducts,
        handlePagination: handlePagination,
        getProductDetails: getProductDetails,
        addProductToCart: addProductToCart,
        checkProductInCart: checkProductInCart,
        deleteProductInCart: deleteProductInCart,
        getProductsFromCart: getProductsFromCart,
        changeCountProductInCart: changeCountProductInCart,
        products: state.products,
        cartCount: state.cartCount,
        productDetails: state.productDetails,
      }}
    >
      {props.children}
    </clientContext.Provider>
  );
};

export default ClientContext;
//vladilen

//! this - это контекст
//! контекст - это где мы пишем. Если мы в глобал., это контекст window
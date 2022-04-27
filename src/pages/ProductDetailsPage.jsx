import { Button, Container, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { clientContext } from "../context/ClientContext";

const ProductDetalisPage = () => {
  const data = useContext(clientContext);
  const { getProductDetails, productDetails, addFeedback } = data;

  //params нужен чтобы получить id с адресной строки
  const params = useParams();
  const [feedbackValue, setFeedbackValue] = useState();
  const [feedbackUser, setfeedbackUser] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFeedback = {
      title: feedbackValue.trim(),
      user: feedbackUser.trim(),
    };
    for (let key in newFeedback) {
      if (!newFeedback[key]) {
        alert("Заполните поля!");
        return;
      }
    }
    addFeedback(newFeedback, productDetails);
    setFeedbackValue("");
    setfeedbackUser("");
  };

  useEffect(() => {
    getProductDetails(params.id);
  }, []);
  if (!productDetails) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <Container>
        <div className="product-details">
          <img src={productDetails.image} alt="" />
          <div>
            <h2>{productDetails.name}</h2>
            <ul>
              <li>
                <strong>Цена: </strong>
                {productDetails.price}
              </li>
              <li>
                <strong>Цвет: </strong>
                {productDetails.color}
              </li>
              <li>
                <strong>Размер: </strong>
                {productDetails.size}
              </li>
              <li>
                <strong>Описание: </strong>
                {productDetails.description}
              </li>
            </ul>
          </div>
        </div>
        <div className="product-details-feedback">
          <h3>Отзывы:</h3>
          <form onSubmit={handleSubmit}>
            <TextField
              value={feedbackUser}
              onChange={(e) => setfeedbackUser(e.target.value)}
              type="text"
              label="Введите ваше имя"
              variant="standard"
              style={{ marginBottom: 15 }}
            />
            <TextField
              style={{ marginBottom: 15 }}
              value={feedbackValue}
              onChange={(e) => setFeedbackValue(e.target.value)}
              type="text"
              label="Введите ваш отзыв"
              multiline
              minRows={3}
              maxRows={5}
            />
            <Button type="submit" variant="outlined">
              Оставить отзыв
            </Button>
          </form>
          <div>
            {productDetails.feedBacks?.map((item, index) => (
              <div key={index} className="feedback">
                <h5>{item.user}</h5>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetalisPage;

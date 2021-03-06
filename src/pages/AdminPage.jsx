import React, { useEffect } from "react";
import { Container } from "@mui/material";
import AdminTable from "../components/AdminTable";
import { adminContext } from "../context/AdminContext";

const AdminPage = () => {
  const data = React.useContext(adminContext);
  const { getProducts, products } = data;

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <div>
        <h1>Админ панель</h1>
        <AdminTable products={products} />
      </div>
    </Container>
  );
};

export default AdminPage;

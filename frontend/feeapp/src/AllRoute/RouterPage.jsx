import React from "react";
import { Route, Routes } from "react-router-dom";
import AddnewStudent from "./AddnewStudent";
import Done from "./Done";
import Home from "./Home";
import PaymentPage from "./PaymentPage";
import Reciept from "./Reciept";

const RouterPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addnew" element={<AddnewStudent />} />
      <Route path="/payment/:id" element={<PaymentPage />} />
      <Route path="/receipt/:id" element={<Reciept />} />
      <Route path="/done/:id" element={<Done />} />
    </Routes>
  );
};

export default RouterPage;

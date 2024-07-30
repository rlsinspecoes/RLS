import React from "react";
import "./index.css";
import {Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./Pages/Home";
import Servicos from "./Pages/Servicos";
import Portfolio from "./Pages/Portfolio";
import Historia from "./Pages/Historia";
import Contatos from "./Pages/Contatos";

function App() {
  return (

      <Routes baseline = "/RLS">
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/serviços" element={<Layout><Servicos /></Layout>} />
        <Route path="/historia" element={<Layout><Historia /></Layout>} />
        <Route path="/portfolio" element={<Layout><Portfolio /></Layout>} />
        <Route path="/contatos" element={<Layout><Contatos /></Layout>} />
      </Routes>

  );
}

export default App;

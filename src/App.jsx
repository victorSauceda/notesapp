import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import LoginButton from "./components/LoginButton";

function App() {
  return (
    <>
      <Header />
      <LoginButton />
      <Content />
      <Footer />
    </>
  );
}

export default App;

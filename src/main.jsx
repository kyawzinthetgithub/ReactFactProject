import { createRoot } from "react-dom/client";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/MainContent";

const root = createRoot(document.getElementById("root"));

root.render(
  <>
    <Header />
    <Main />
    <Footer />
  </>
);

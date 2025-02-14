import { createRoot } from "react-dom/client";
import "./App.css";

const root = createRoot(document.getElementById("root"));

function Header() {
  return (
    <div>
      <img src="/react-logo.png" alt="react-logo" width="40px" />
    </div>
  );
}

function Footer(){
    return (
        <footer>&copy; abo development. All rights reversed.</footer>
    );
}

root.render(
  <div>
    <Header />
  <main>
    <h1>Reason I'm excited to learn React</h1>
    <ol>
        <li>React is popular</li>
        <li>React is cool</li>
    </ol>
  </main>
  <Footer/>
  </div>
);
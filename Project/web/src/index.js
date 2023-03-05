import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./Guest/GuestRoute";
import 'bootstrap/dist/css/bootstrap.css';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
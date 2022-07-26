import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TopBar from "./components/TopBar.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Policy from "./components/Policy.js";
import NavBar from "./components/NavBar.js";
import Home from "./main/Home.js";
import CartScreen from "./main/CartScreen.js";
import Register from "./main/Register.js";
import Login from "./main/Login.js";
import OrderScreen from "./main/OrderScreen.js";
import AdminScreen from "./main/AdminScreen.js";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <NavBar />
      <Switch>
        <Route path="/admin" component={AdminScreen}  />
        <Route path="/orders" component={OrderScreen} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/cart" component={CartScreen} exact />
        <Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/policy" component={Policy} exact />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

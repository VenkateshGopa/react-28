import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from "./components/pages/404Page";
import BlankPage from "./components/pages/BlankPage";
import ForgotPassword from "./components/pages/ForgotPassword";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import { Route, Switch, Redirect } from "react-router-dom";
import Colors from "./components/utilities/Colors";
import Border from "./components/utilities/Border";
import Animations from "./components/utilities/Animations";
import Other from "./components/utilities/Other";
import Nav from "./components/Nav";
import Button from "./components/comp/Button";
import Cards from "./components/comp/Cards";
import Charts from "./components/Charts/Charts";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Nav>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/dashboard" />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/Register">
          <Register />
        </Route>
        <Route path="/forgotpassword">
          <ForgotPassword />
        </Route>
        <Route path="/notfound">
          <NotFound />
        </Route>
        <Route path="/blankpage">
          <BlankPage />
        </Route>
        <Route path="/Colors">
          <Colors />
        </Route>
        <Route path="/Borders">
          <Border />
        </Route>
        <Route path="/Animations">
          <Animations />
        </Route>
        <Route path="/Other">
          <Other />
        </Route>
        <Route path="/Button">
          <Button />
        </Route>
        <Route path="/Cards">
          <Cards />
        </Route>
        <Route path="/Charts">
          <Charts />
        </Route>
        <Route path="/Dashboard">
          <Dashboard />
        </Route>
        <Route path="*">
          <Redirect to='/Dashboard'/>
        </Route>
      </Switch>
    </Nav>
  );
}

export default App;

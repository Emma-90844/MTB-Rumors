import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Signup from "./pages/signup/Signup";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

// ROUTER dom imports
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import Ads from "./components/Ads/Ads";

function App() {
  const { user } = useContext(Context);
  // const user = false;
  return (
    <Router>
      <Topbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/signup">{user ? <Home /> : <Signup />}</Route>

        <Route path="/login">{user ? <Home /> : <Login />}</Route>

        <Route path="/settings">{user ? <Settings /> : <Signup />}</Route>

        <Route path="/write">{user ? <Write /> : <Write />}</Route>
        
        <Route path="/post/:postId">{user ? <Single /> : <Single />}</Route>
      </Switch>
     
    </Router>
  );
}

export default App;

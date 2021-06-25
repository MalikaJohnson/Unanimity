import "./App.css";
import Layout from "./Components/Layout";
import Login from "./Screens/Login/Login.jsx";
import Signup from "./Screens/Signup/Signup.jsx";
import Landing from "./Screens/Landing/Landing";
import MainContainer from "./Containers/MainContainer";
import { Switch, Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  loginUser,
  signUpUser,
  verifyUser,
  removeToken,
} from "./Services/auth";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push("/home");
  };

  const handleSignUp = async (formData) => {
    const userData = await signUpUser(formData);
    setCurrentUser(userData);
    history.push("/home");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
          <Route path="/login">
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path="/sign-up">
            <Signup handleSignUp={handleSignUp} />
          </Route>
          <Layout currentUser={currentUser} handleLogout={handleLogout}>
          <Route path="/">
            <MainContainer />
          </Route>
        </Layout>
      </Switch>
    </div>
  );
}

export default App;

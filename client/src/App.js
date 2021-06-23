import "./App.css";
import Layout from "./Layout/Layout";
import Login from "./Screens/Login/Login.jsx";
import Signup from "./Screens/Signup/Signup.jsx";
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
    history.push("/");
  };

  const handleSignUp = async (formData) => {
    const userData = await signUpUser(formData);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
  };

  return (
    <div className="App">
      <Layout currenUser={currentUser} handleLogout={handleLogout}>
        <Switch>

          <Route path="/login">
            <Login handleLogin={handleLogin} />
          </Route>

          <Route path="/signup">
            <Signup handleSignUp={handleSignUp} />
          </Route>

          {/* <Route path="/">
            <MainContainer />
          </Route> */}

        </Switch>
      </Layout>
    </div>
  );
}

export default App;

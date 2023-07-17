import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import firebase from "../firebase";

const Login = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  //! for getting the user email and password value
  const handleOnChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setUserCredentials((prev) => ({ ...prev, [fieldName]: fieldValue }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    //! clearing error state on submit
    setError("");

    //! setting loading to true in order to show the loadin state
    setIsLoading(true);
    console.log("submit clicked");

    try {
      const { email, password } = userCredentials;
      await firebase.auth().signInWithEmailAndPassword(email, password);

      const currentUser = firebase.auth().currentUser;

      console.log("currentUser", currentUser);
    } catch (err) {
      //! getting the error message from firebase and setting it in the state to show
      setError(err?.message || "Something went wrong!");

      console.log("error", err);
    }

    //! setting the  loading to false at the end of our submit execution
    setIsLoading(false);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={onSubmit} className="form">
        <input
          required
          type="email"
          name="email"
          placeholder="Email"
          value={userCredentials.email}
          onChange={handleOnChange}
        />
        <input
          required
          type="password"
          name="password"
          placeholder="Password"
          value={userCredentials.password}
          onChange={handleOnChange}
        />

        {/* for navigating to signup page */}
        <p className="navigate-text">
          Need an account?{" "}
          <span onClick={() => navigate("/signup")}>Sign Up</span>{" "}
        </p>

        {/* Error message if there is any error */}
        {error && <p className="error-text">{error}</p>}

        {/* disabling the button if there is any loading means a request is in process */}
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : " Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;

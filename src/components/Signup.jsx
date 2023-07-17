import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import firebase from "../firebase";

const Signup = () => {
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
      await firebase.auth().createUserWithEmailAndPassword(email, password);

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
      <h1>Signup</h1>
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

        <p className="navigate-text">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Log In</span>{" "}
        </p>

        {error && <p className="error-text">{error}</p>}

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : " Signup"}
        </button>
      </form>
    </div>
  );
};

export default Signup;

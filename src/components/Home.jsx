import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";

import { AuthContext } from "../contexts/authContext";
import firebase from "../firebase";

const Home = () => {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const signOut = async () => {
    await firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("user signed out");
      })
      .catch((err) => {
        console.log("err user signOut ", err);
      });
  };

  return (
    <>
      <div className="home">
        <div className="nav-link">
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
        </div>

        {user ? (
          <button onClick={signOut}>Sign out</button>
        ) : (
          <button onClick={() => navigate("/login")}>Login</button>
        )}
      </div>

      <h1>Home! Not Protected</h1>
    </>
  );
};

export default Home;

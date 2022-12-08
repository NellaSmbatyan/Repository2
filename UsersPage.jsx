import { useState } from "react";
import React from "react";
import { useEffect } from "react";
import { Route, Routes } from "react-router";
import Posts from "./Posts";

export default function Request() {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");
  const [loggedInUser, setLoggedInUser] = useState({});

  function getData() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((result) => setData(result));
  }
  useEffect(() => {
    getData();
  }, []);

  function onClickButton() {
    let user = data.filter((el) => el.email === email);

    setLoggedInUser(user.length ? user[0] : {});
 
  }

  return (
    <>
      <div className="divOne">
        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button value={loggedInUser} onClick={onClickButton}>
          Login
        </button>
       
        {loggedInUser.id && (
          <ul key={loggedInUser.id}>
            <li>Name: {loggedInUser.name}</li>
            <li>Username: {loggedInUser.username}</li>
            <li>Website: {loggedInUser.website}</li>
            <li>Phone: {loggedInUser.phone}</li>
          </ul>
        )}
      </div>
      <br />
      <div className="divTwo">
        <Routes>
          <Route path="/" element={<Posts val={loggedInUser} />} />
        </Routes>
      </div>
    </>
  );
}

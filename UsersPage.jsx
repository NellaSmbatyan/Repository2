import { useState } from "react";
import React from "react";
import { useEffect } from "react";
import { Route, Routes } from "react-router";
import ShowPosts from "./Posts";


export default function Request() {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");
  const [result, setResult] = useState([]);
 

  function getData() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((result) => setData(result));
  }
  useEffect(() => {
    getData();
  }, []);




  return (
    <>
      <div className="divOne">
        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          value={data}
          onClick={() =>
            setResult(
              data
                .filter((el) => el.email === email)
                .map((item) => (
                  <ul key={item.id}>
                    <li>Name:{item.name}</li>
                    <li>Username:{item.username}</li>
                    <li>Website:{item.website}</li>
                    <li>Phone:{item.phone}</li>
                  </ul>
                ))
            )
          }
        >
          Login
        </button>

        <h1>{result}</h1>
      </div>
      <div>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
      <div className="divTwo">
          <Routes>
        <Route path="/" element={<ShowPosts value={data}/>} />
      </Routes>
      </div>
    
    </>
  );
}

import { useEffect, useState } from "react";
import React from "react";
export default function ShowPosts(data) {
  const [post, setPost] = useState([]);
  const [item, setItem] = useState([]);

  function getPosts() {
    let url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then((res) => res.json())
      .then((result) => setPost(result));
  }
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <button
        onClick={() =>
          setItem(
            post
              .map((el) => {
                return <ul key={el.id}>
                  <li>{el.title}</li></ul>;
              })
              .slice(0, 10)
          )
        }
      >
        {" "}
        Post
      </button>
      <p>{item}</p>
    </div>
  );
}

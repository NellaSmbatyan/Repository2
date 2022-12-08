import { useEffect, useState } from "react";
import React from "react";
export default function Posts({val}) {

  const [post, setPost] = useState([]);
  const [item, setItem] = useState([]);


 useEffect(  function getPost(){
 let url = "https://jsonplaceholder.typicode.com/posts";
   fetch(url)
      .then((res) => res.json())
      .then((result) =>setPost(result.filter(el => el.userId === val.id)) );
   
    }, [val.id]);



  return (
    <div>
      <button
        onClick={() =>
          setItem(
            post
              .map((el) => {
                return <ul key={el.id}>
                  <li>{el.title}</li>
                  </ul>;
              })
       
          )
        }
      >
    
        Post
      </button>
     {item}
    </div>
  );
}

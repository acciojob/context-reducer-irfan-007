import React, { useContext, useState } from "react";
import { myContext } from "./App";

function Signin() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");
  const [userV, setUserV] = useState(false);
  const user = useContext(myContext);
  console.log(user);
  return (
    <div id="main">
      <div id="current-user">
        {userV
          ? `Current user:${user}, isAuthenticated: Yes`
          : `Current user:${user}, isAuthenticated: No`}
      </div>
      <button id="login-btn" onClick={() => setUserV(true)}>
        Login
      </button>
      <button id="signout" onClick={() => setUserV(false)}>
        Signout
      </button>
      <div>
        <input
          type="text"
          id="shopping-input"
          onChange={(e) => setItem(e.target.value)}
        />
        <button onClick={() => setList([...list, item])}>Add</button>
      </div>
      <button id="clear-list" onClick={() => setList([])}>
        Clear
      </button>
      <ul>
        {list.map((el, i) => (
          <li key={i}>
            <span id={`item-${el}`}>{el}</span>{" "}
            <button
              onClick={() => setList(list.filter((k) => k != el))}
              style={{ color: "red" }}
              id={`remove-${el}`}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Signin;

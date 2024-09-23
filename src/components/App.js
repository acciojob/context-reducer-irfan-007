import React, { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [user, setUser] = useState(false);
  const [item, setItem] = useState("");
  return (
    <div>
      <div id="current-user">
        {user
          ? "Current user:rohan, isAuthenticated: Yes"
          : "Current user:, isAuthenticated: No"}
      </div>
      <button id="login-btn" onClick={() => setUser(true)}>
        Login
      </button>
      <button id="signout" onClick={() => setUser(false)}>
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

export default App;

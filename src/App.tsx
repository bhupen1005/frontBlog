import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {Br} from 'react-router-v6'
import {BrowserRouter} from 'react-router-v7'


function App() {
  const [count, setCount] = useState(0);

  // simple api call

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  // api call with headers

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/2", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
        "x-api-key": "123456",
        "z-api-key": "234567",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  // api call with post method

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "empty",
      },
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  useEffect(() => {
    const MockCookies = {
      set: (name, value, days) => {
        const expires = days
          ? `; expires=${new Date(Date.now() + days * 864e5).toUTCString()}`
          : "";
        document.cookie = `${name}=${value}${expires}; path=/`;
      },
      get: (name) => {
        return (
          document.cookie
            .split("; ")
            .find((row) => row.startsWith(name + "="))
            ?.split("=")[1] || null
        );
      },
      remove: (name) => {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
      },
    };

    // Usage
    MockCookies.set("theme", "dark", 7);
    console.log(MockCookies.get("theme")); // "dark"
    MockCookies.remove("theme");
  }, []);

  useEffect(() => {
    const MockCookies = {
      set: (name, value, minutes) => {
        const expires = minutes
          ? `; expires=${new Date(
              Date.now() + minutes * 60 * 1000
            ).toUTCString()}`
          : "";
        document.cookie = `${name}=${value}${expires}; path=/`;
      },
      get: (name) => {
        return (
          document.cookie
            .split("; ")
            .find((row) => row.startsWith(name + "="))
            ?.split("=")[1] || null
        );
      },
      remove: (name) => {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
      },
    };

    // Usage Example:
    MockCookies.set("sessionToken", "abc123", 1); // Expires in 1 minute

    setTimeout(() => {
      console.log("Cookie after 1 minute:", MockCookies.get("sessionToken")); // Should be null
    }, 60 * 1000);
  }, []);



  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Kite and React logos to learn more
      </p>
    </>
  );
}

export default App;

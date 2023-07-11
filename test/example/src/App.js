import { useState, useEffect } from "react";
import { Toast as httpStatusToast } from "../../../src/components/Toast";

function App() {
  const [data, setData] = useState([]);
  const makeRequest = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(async (response) => {
        const todos = await response.json();
        setData(todos);
        httpStatusToast({
          status: 500,
          lang: "pt",
          duration: 90000,
          // position: "left"
        });
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    makeRequest();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {data.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>

        <div id="oi"></div>
      </header>
    </div>
  );
}

export default App;

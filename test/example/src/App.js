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
          status: 200,
          lang: "pt",
        });
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    makeRequest();
  }, []);

  console.log(data);

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

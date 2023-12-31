import { useState, useEffect } from "react";
import { Toast as httpStatusToast } from "../../../src/components/Toast";
import { AiFillAlert } from "react-icons/ai";

function App() {
  const [data, setData] = useState([]);
  const makeRequest = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(async (response) => {
        const todos = await response.json();
        setData(todos);
        httpStatusToast({
          status: 500,
          lang: "en",
          duration: 5000,
          // position: "left"
        });
      })
      .catch((error) =>
        httpStatusToast({
          status: error.status,
          lang: "pt",
          duration: 5000,
          // customHeader: (
          //   <h2>
          //     ss <AiFillAlert />
          //   </h2>
          // ),
          // position: "left"
        })
      );
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

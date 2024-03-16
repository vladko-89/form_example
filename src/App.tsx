import { useState, useCallback } from "react";

import { FirstPage } from "./pages/FirstPage";
import { SecondPage } from "./pages/SecondPage";
import { ThirdPage } from "./pages/ThirdPage";
import { Routes, Route } from "react-router-dom";
import "./styles.css";

export default function App() {
  const [data, setData] = useState({});

  const changeData = useCallback((value) => {

    setData((previousInfo) => {
      return {
        ...previousInfo,
        ...value,
      };
    });
  }, []);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(data);
  }
  return (
    <div className="App">
      <h1>Form</h1>
      
        <form onSubmit={handleSubmitForm}>
          <Routes>
            <Route
              path="/"
              element={<FirstPage data={data} onChange={changeData} />}
            />
            <Route
              path="/second"
              element={<SecondPage data={data} onChange={changeData} />}
            />
            <Route
              path="/third"
              element={<ThirdPage />}
            />
          </Routes>
        </form>
    </div>
  );
}

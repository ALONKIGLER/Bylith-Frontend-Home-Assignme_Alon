import React, { useEffect } from "react";
import MyRouter from "./routers/index.js";
import "./App.css";
import { getAllProducts } from "./app/action/index";
import { useDispatch } from "react-redux";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const dispatch = useDispatch();

  // const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div className="App">
      <div className="bg-white text-base dark:bg-slate-900 text-slate-900 dark:text-slate-200">
        <MyRouter />
      </div>
    </div>
  );
}

export default App;

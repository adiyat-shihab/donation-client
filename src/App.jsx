import "./App.css";
import { Outlet, useLoaderData } from "react-router-dom";
import { NavBar } from "./Component/NavBar/NavBar.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;

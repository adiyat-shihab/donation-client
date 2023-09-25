import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainSection } from "./Component/Main Section/MainSection.jsx";
import { DonationSelect } from "./Component/Donation/DonationSelect.jsx";
import { DonationPie } from "./Component/DonationChart/DonationPie.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <MainSection />,
        loader: () => fetch("https://api.npoint.io/0931045fb969c3cee2ba"),
      },
      {
        path: "/donation",
        element: <DonationSelect />,
      },
      {
        path: "/statistics",
        element: <DonationPie />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

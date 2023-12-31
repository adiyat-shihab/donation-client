import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainSection } from "./Component/Main Section/MainSection.jsx";
import { DonationSelect } from "./Component/Donation/DonationSelect.jsx";
import { DonationPie } from "./Component/DonationChart/DonationPie.jsx";
import { ErrorElement } from "./Component/Error/ErrorElement.jsx";
import { DonationDetails } from "./Component/DonationDetalis/DonationDetails.jsx";
import { AuthProvider } from "./Page/AuthProvider.jsx";
import { Register } from "./Page/Register.jsx";
import { Login } from "./Page/Login.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorElement />,

    children: [
      {
        path: "/",
        element: <MainSection />,
        loader: () => fetch("https://api.npoint.io/50c3ffe59c3b86aedfd4"),
      },
      {
        path: "/donation",
        element: <DonationSelect />,
      },
      {
        path: "/statistics",
        element: <DonationPie />,
        loader: () => fetch("https://api.npoint.io/0931045fb969c3cee2ba"),
      },
      {
        path: "/donation/details/:serializedData",
        element: <DonationDetails />,
        loader: () => fetch("https://api.npoint.io/50c3ffe59c3b86aedfd4"),
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);

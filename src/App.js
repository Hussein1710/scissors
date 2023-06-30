import React from "react";
import "./App.css";
import HomePage from "./HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginForm from "./Pages/Login";
import SignupForm from "./Pages/Signup";
import Footer from './components/Footer';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/Login",
    element: <LoginForm />,
  },
  {
    path: "/Signup",
    element: <SignupForm />,
  },
  {
    path: "/Footer",
    element: <Footer />,
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

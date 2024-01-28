import './App.css'
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from './assets/pages/Homepage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage></Homepage>
  },
]);

function App() {

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default App

import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
import Page1 from "./Page1";
import Page2 from "./Page2";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="page1" element={<Page1 />} />
      <Route path="page2" element={<Page2 />} />
    </Route>
  )
);

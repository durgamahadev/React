import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { userApi } from "./redux/features/api/userApi.ts";

createRoot(document.getElementById("root")!).render(
  <ApiProvider api={userApi}>
    <App />
  </ApiProvider>,
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { ExpenseProvider } from "./Context/ExpenseContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ExpenseProvider>
        <App />
      </ExpenseProvider>
    </BrowserRouter>
  </StrictMode>
);

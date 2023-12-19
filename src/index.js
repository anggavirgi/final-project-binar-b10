import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./redux/store/store";

const clientID = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_SERVER}>
        <QueryClientProvider client={clientID}>
          <App />
        </QueryClientProvider>
        <ToastContainer />
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>
);

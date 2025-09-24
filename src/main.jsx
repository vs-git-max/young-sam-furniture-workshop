import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import MyAppProvider from "./context/Provider.jsx";
import { Provider } from "react-redux";
import store from "./store/store";
import { Toaster } from "./components/ui/sonner";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MyAppProvider>
      <Provider store={store}>
        <Toaster />
        <App />
      </Provider>
    </MyAppProvider>
  </BrowserRouter>
);

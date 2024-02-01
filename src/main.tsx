import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Ask from "./Ask";
import "./index.css";
import "./assets/ProximaNova-Bold.ttf";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  ChakraProvider,
  LTheme,
  ModalsWrapper,
  VStack,
} from "@cauri/ui";
import Fonts from "./Fonts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/ask",
    element: <Ask />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={LTheme}>
      <Fonts />
      <ModalsWrapper>
        <VStack bg="#F2F4F8" minHeight="100vh">
          <RouterProvider router={router} />
        </VStack>
      </ModalsWrapper>
    </ChakraProvider>
  </React.StrictMode>
);

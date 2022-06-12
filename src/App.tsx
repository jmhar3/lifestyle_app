import * as React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ChakraProvider, theme, extendTheme } from "@chakra-ui/react";

import { Home } from "./pages/Home";
import { Account } from "./pages/Account";

const light = "#fcf1f3";
const lightMid = "#ffe9ef";
const mid = "#fde3e7";
const strong = "#fac6ce";
const bold = "#d40819";
const dark = "#130001";

const customTheme = extendTheme({
  colors: {
    brand: {
      light: "#fcf1f3",
      lightMid: "#ffe9ef",
      mid: "#fde3e7",
      strong: "#fac6ce",
      bold: "#d40819",
      dark: "#130001",
    },
  },
  components: {
    Button: {
      baseStyle: {
        color: "brand.bold",
        bg: "brand.lightMid",
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: 'brand.light',
        color: 'brand.dark',
      },
    },
  },
});

export const App = () => (
  <ChakraProvider theme={customTheme}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  </ChakraProvider>
);

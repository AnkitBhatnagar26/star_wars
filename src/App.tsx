//import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//import { BrowserRouter as Router, Routes, Route, createBrowserRouter, Outlet } from "react-router-dom";

import { ThemeProvider } from "./context/ThemeContext";
import { FavouritesProvider } from "./context/FavoritesContext";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
  }, []);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <ThemeProvider>
          <FavouritesProvider>
            <Navbar />
            <Outlet />
          </FavouritesProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
};


export default App;




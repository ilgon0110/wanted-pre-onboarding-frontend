import React, { useCallback, useEffect, useState } from "react";
import { redirect, useMatch, useNavigate, Outlet } from "react-router-dom";
import { ToDoProvider } from "./contexts/todoContext";

function App() {
  const match = useMatch("/");
  const navigation = useNavigate();
  const token = localStorage.getItem("access_token");

  useEffect(() => {
    console.log("App.js useEffect", token);
    if (token) navigation("/todo");
    if (!token) navigation("/signin");
  }, [token]);
  return (
    <ToDoProvider>
      <>
        <Outlet />
      </>
    </ToDoProvider>
  );
}

export default App;

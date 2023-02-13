import React, { useCallback, useEffect, useState } from "react";
import { redirect, useMatch, useNavigate, Outlet } from "react-router-dom";

function App() {
  const match = useMatch("/");
  const navigation = useNavigate();
  const token = localStorage.getItem("access_token");

  useEffect(() => {
    if (token) navigation("/todo");
    if (!token) navigation("/signin");
    if (match) navigation("/signup");
  }, [match, navigation, token]);
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;

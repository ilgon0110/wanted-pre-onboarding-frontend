import React, { useEffect } from "react";
import { useMatch, useNavigate, Outlet } from "react-router-dom";

function App() {
  const match = useMatch("/");
  const navigation = useNavigate();

  useEffect(() => {
    if (match) {
      navigation("/signup");
    }
  }, [match, navigation]);
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;

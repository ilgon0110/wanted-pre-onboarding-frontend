import { useEffect } from "react";
import { useMatch, useNavigate, Outlet } from "react-router-dom";
import { AuthProvider } from "@contexts/authContext";
import { ToDoProvider } from "@contexts/todoContext";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;
function App() {
  const match = useMatch("/");
  const signUpmatch = useMatch("/signup");
  const navigation = useNavigate();
  const token = localStorage.getItem("access_token");

  useEffect(() => {
    if (match) navigation("/signup");
  }, []);

  useEffect(() => {
    if (token) navigation("/todo");
    if (!token && !signUpmatch) navigation("/signin");
  }, [token]);

  return (
    <AuthProvider>
      <ToDoProvider>
        <>
          <GlobalStyle />
          <Outlet />
        </>
      </ToDoProvider>
    </AuthProvider>
  );
}

export default App;

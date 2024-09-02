import AppRouter from "./router/AppRouter";
import AuthContextProvider from "./context/AuthContext";
import ThemeContextProvider from "./context/ThemeContext";

function App() {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <AppRouter />
      </ThemeContextProvider>
    </AuthContextProvider>
  );
}

export default App;

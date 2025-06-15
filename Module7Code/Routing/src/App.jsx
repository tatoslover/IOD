import { UserProvider } from "./context/UserProvider";
import { MyThemeProvider } from "./context/MyThemeProvider";
import NavBar from "./components/NavBar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <UserProvider>
      <MyThemeProvider>
        <NavBar />
        <AppRoutes />
        <Footer />
      </MyThemeProvider>
    </UserProvider>
  );
}

export default App;

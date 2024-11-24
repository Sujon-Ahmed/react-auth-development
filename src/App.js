import { Container } from "react-bootstrap";
import SignUpComponent from "./components/SignUpComponent";
import SignInComponent from "./components/SignInComponent";
import { AuthProvider } from "./contexts/AuthContext";
import Dashboard from "./components/Dashboard";
import { Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";

function App() {
  return (
    <AuthProvider>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/signin" element={<SignInComponent />} />
            <Route path="/signup" element={<SignUpComponent />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </Container>
    </AuthProvider>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Box } from "@mui/material";

import FileUploadPage from "./pages/FileUploadPage";
import AuthPage from "./pages/AuthPage";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

const App: React.FC = () => {
  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <Router>
        <Box
          sx={{
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#FBF6E9",
          }}
        >
          <Navbar />
          <Box
            sx={{
              flex: 1,
              overflow: "auto",
              height: "100%",
            }}
          >
            <Routes>
              <Route path="/sign-in" element={<AuthPage />} />
              <Route
                path="/files"
                element={
                  <ProtectedRoute>
                    <FileUploadPage />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </Box>
        </Box>
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;

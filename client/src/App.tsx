import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GoogleAuth from "./components/GoogleAuth";
import FileUploadPage from "./pages/FileUploadPage";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import { Box } from "@mui/material";

const App: React.FC = () => {
  return (
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
            <Route path="/sign-in" element={<GoogleAuth />} />
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
  );
};

export default App;

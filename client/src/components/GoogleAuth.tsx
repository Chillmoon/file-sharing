import { useState } from "react";
import {
  Box,
  Typography,
  Link,
  Alert,
  Modal,
  Paper,
  Button,
} from "@mui/material";

import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const GoogleAuth = () => {
  const [error, setError] = useState<string | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const navigate = useNavigate();

  const handleLoginSuccess = (response: any) => {
    console.log("Login success:", response);

    const token = response.credential;
    localStorage.setItem("google_token", token);

    setError(null);

    navigate("/files");
  };

  const handleLoginFailure = () => {
    console.error("Login failed");
    setError("Failed to login. Please try again.");
  };

  const handleModalOpen = () => setOpenModal(true);
  const handleModalClose = () => setOpenModal(false);

  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "primary.light",
            padding: "2em",
            borderRadius: "1em",
          }}
        >
          <Typography variant="h4" gutterBottom>
            VrealSoft File Storage
          </Typography>
          <Typography variant="h6" gutterBottom>
            Test Task by Chillmoon
          </Typography>
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={handleLoginFailure}
          />
          {error && (
            <Alert severity="error" sx={{ marginTop: "1em", width: "100%" }}>
              {error}
            </Alert>
          )}
          <Link
            href="#"
            underline="hover"
            sx={{ marginTop: "1em" }}
            onClick={handleModalOpen}
          >
            Need help?
          </Link>
        </Box>
      </Box>

      {/* Modal for Help Info */}
      <Modal open={openModal} onClose={handleModalClose}>
        <Paper
          sx={{
            width: "400px",
            margin: "auto",
            mt: "20vh",
            padding: "2em",
            outline: "none",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Help Information
          </Typography>
          <Typography variant="body1" gutterBottom>
            To access the system, please log in using your Google account. Click
            the "Sign in with Google" button above and follow the instructions.
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            If you encounter issues, please ensure that you have an active
            Google account and that your browser allows pop-ups.
          </Typography>
          <Box textAlign="center" mt={2}>
            <Button variant="contained" onClick={handleModalClose}>
              Close
            </Button>
          </Box>
        </Paper>
      </Modal>
    </GoogleOAuthProvider>
  );
};

export default GoogleAuth;

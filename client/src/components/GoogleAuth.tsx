import { useEffect } from "react";
import { googleLogin } from "../services/api";
import { useNavigate } from "react-router-dom";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";

interface GoogleAuthProps {
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const GoogleAuth = ({ setError, setLoading }: GoogleAuthProps) => {
  const navigate = useNavigate();

  const handleLoginSuccess = async (credentialResponse: CredentialResponse) => {
    const token = credentialResponse.credential;
    if (!token) {
      setError("Invalid token received.");
      return;
    }

    localStorage.setItem("google_token", token);
    setError(null);
    setLoading(true);

    try {
      await googleLogin(token);
      navigate("/files");
    } catch (err: any) {
      console.error("Server error:", err);
      setError(err.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleLoginFailure = () => {
    console.error("Login failed");
    setError("Failed to login. Please try again.");
  };

  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  useEffect(() => {
    if (!clientId) {
      setError("Google client ID is not configured.");
    }
  }, [clientId, setError]);

  return (
    <GoogleLogin onSuccess={handleLoginSuccess} onError={handleLoginFailure} />
  );
};

export default GoogleAuth;

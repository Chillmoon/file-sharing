import { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const GoogleAuth = () => {
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLoginSuccess = (response: any) => {
    console.log("Login success:", response);

    const token = response.credential;
    localStorage.setItem("google_token", token);

    setIsAuthenticated(true);
    setError(null);

    navigate("/files");
  };

  const handleLoginFailure = () => {
    console.error("Login failed");
    setError("Failed to login. Please try again.");
  };

  const handleLogout = () => {
    localStorage.removeItem("google_token");
    setIsAuthenticated(false);
  };

  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div>
        <h2>Google Login</h2>

        {isAuthenticated ? (
          <div>
            <p>Logged in successfully!</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <GoogleLogin
              onSuccess={handleLoginSuccess}
              onError={handleLoginFailure}
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
        )}
      </div>
    </GoogleOAuthProvider>
  );
};

export default GoogleAuth;

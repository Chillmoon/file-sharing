import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GoogleAuth from "./components/GoogleAuth";
import FileUploadPage from "./pages/FileUploadPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GoogleAuth />} />
        <Route path="/files" element={<FileUploadPage />} />
      </Routes>
    </Router>
  );
};

export default App;

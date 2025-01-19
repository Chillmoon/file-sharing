import FileList from "../components/FileList";
import FileUpload from "../components/FileUpload";
import FolderStructure from "../components/FolderStructure";

const FileUploadPage = () => {
  return (
    <div>
      <h1>File Storage Service</h1>
      <FileUpload />
      <FolderStructure />
      <FileList />
    </div>
  );
};

export default FileUploadPage;

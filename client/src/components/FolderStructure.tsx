import React, { useState } from "react";
import { createFolder } from "../services/api";

const FolderStructure: React.FC = () => {
  const [folderName, setFolderName] = useState<string>("");

  const handleCreateFolder = async () => {
    if (folderName) {
      try {
        await createFolder(folderName);
        alert("Folder created successfully");
      } catch (error) {
        alert("Folder creation failed");
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        value={folderName}
        onChange={(e) => setFolderName(e.target.value)}
        placeholder="Enter folder name"
      />
      <button onClick={handleCreateFolder}>Create Folder</button>
    </div>
  );
};

export default FolderStructure;

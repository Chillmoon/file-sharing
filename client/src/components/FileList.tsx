import React, { useEffect, useState } from "react";
import { getFiles } from "../services/api";
import { File } from "../types/types";

const FileList: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchFiles = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getFiles();
        setFiles(data);
      } catch (error: unknown) {
        setError("Error fetching files. Please try again.");
        console.error("Error fetching files:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, []);

  return (
    <div>
      <h3>File List</h3>
      {loading && <p>Loading files...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {files.map((file, index) => (
          <li key={index}>
            <a href={file.url} target="_blank" rel="noopener noreferrer">
              {file.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;

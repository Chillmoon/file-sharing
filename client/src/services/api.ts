import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const uploadFile = async (formData: FormData) => {
  try {
    const response = await api.post("/files/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
};

export const getFiles = async () => {
  try {
    const response = await api.get("/files");
    return response.data;
  } catch (error) {
    console.error("Error fetching files:", error);
    throw error;
  }
};

export const createFolder = async (folderName: string) => {
  try {
    const response = await api.post("/folders", { name: folderName });
    return response.data;
  } catch (error) {
    console.error("Error creating folder:", error);
    throw error;
  }
};

export const getFolders = async () => {
  try {
    const response = await api.get("/folders");
    return response.data;
  } catch (error) {
    console.error("Error fetching folders:", error);
    throw error;
  }
};

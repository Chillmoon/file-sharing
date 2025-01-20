import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

const handleRequest = async <T>(request: Promise<T>) => {
  try {
    const response = await request;
    return response;
  } catch (error: unknown) {
    console.error("API Request error:", error);

    if (error instanceof axios.AxiosError) {
      throw new Error(error.response?.data?.message || "Something went wrong");
    } else {
      throw new Error("Something went wrong");
    }
  }
};

export const uploadFile = (formData: FormData) => {
  return handleRequest(
    api.post("/files/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  ).then((response) => response.data);
};

export const getFiles = () => {
  return handleRequest(api.get("/files")).then((response) => response.data);
};

export const createFolder = (folderName: string) => {
  return handleRequest(api.post("/folders", { name: folderName })).then(
    (response) => response.data
  );
};

export const getFolders = () => {
  return handleRequest(api.get("/folders")).then((response) => response.data);
};

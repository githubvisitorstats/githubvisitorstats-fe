import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  maxBodyLength: Infinity,
});

export const generateRequest = async (githubUsername) => {
  const dataPayload = {
    githubUsername: githubUsername,
  };

  try {
    const response = await apiClient.post("generate/", dataPayload);
    return response.data;
  } catch (error) {
    throw error;
  }
};

import { api } from "./axios.config";

export const getPosts = async () => {
  try {
    const response = await api.get("posts/");
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getPost = async (id) => {
  try {
    const response = await api.get(`posts/${id}`);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

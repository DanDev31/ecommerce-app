import { axiosInstance } from "../axios";

export const apiFetch = async (method, endPoint, object = null) => {
  let methodType = method.toLowerCase();
  try {
    if (methodType === "get") {
      const response = axiosInstance.get(endPoint);
      return response.data;
    }
    if (methodType === "post") {
      axiosInstance.post(endPoint, object);
    }
  } catch (error) {
    console.log(error);
  }
};

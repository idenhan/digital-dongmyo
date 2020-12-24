import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://172.30.1.25:9000/api",
});

export default apiClient;

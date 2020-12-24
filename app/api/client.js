import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://172.30.1.25:9000/api",
});

apiClient.get("/listings").then((response) => {
  if (!response.ok) {
    response.problem;
  }
});

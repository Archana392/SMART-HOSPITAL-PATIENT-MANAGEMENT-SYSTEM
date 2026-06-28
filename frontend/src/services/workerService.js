import api from "./api";

export const getWorkers = async () => {
  const response = await api.get("/workers");
  return response.data;
};

export const getWorkerById = async (id) => {
  const response = await api.get(`/workers/${id}`);
  return response.data;
};

export const createWorker = async (worker) => {
  const response = await api.post("/workers", worker);
  return response.data;
};

export const updateWorker = async (id, worker) => {
  const response = await api.put(`/workers/${id}`, worker);
  return response.data;
};

export const deleteWorker = async (id) => {
  await api.delete(`/workers/${id}`);
};
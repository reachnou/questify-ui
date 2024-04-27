import axiosInstance from "../axios";

export default function apiService(endpoint) {

    this.getAll = () => {
        return axiosInstance.get(endpoint);
    }

    this.getById = (id) => {
        return axiosInstance.get(`${endpoint}/${id}`);
    }

    this.add = (data) => {
        return axiosInstance.post(endpoint, data);
    }

    this.update = (id, data) => {
        return axiosInstance.put(`${endpoint}/${id}`, data);
    }

    this.remove = (id) => {
        return axiosInstance.delete(`${endpoint}/${id}`);
    }
}
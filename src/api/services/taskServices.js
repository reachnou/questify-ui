import { ENDPOINTS } from "../../constants/endpoints";
import { userDetails } from "../auth";
import axiosInstance from "../axios";
import { header } from "../header";
import apiService from "./apiServices";

let taskServices = new apiService(ENDPOINTS.TASK);

// Additional functions here
const getAllTasksByUserId = (userId) => {
    return axiosInstance.get(ENDPOINTS.TASK + `/user?userId=${userId}`, {headers: header()})
}

const createTask = (data) => {
    return axiosInstance.post(ENDPOINTS.TASK + `?userId=${userDetails.id}`, data)
}

taskServices = {...taskServices, getAllTasksByUserId, createTask};

export default taskServices;
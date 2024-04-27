import { ENDPOINTS } from "../../constants/endpoints";
import axiosInstance from "../axios";
import apiService from "./apiServices";

let challengeServices = new apiService(ENDPOINTS.CHALLENGE);

const getAllChallengsByUserId = (userId) => {
    return axiosInstance.get(ENDPOINTS.CHALLENGE + `/user/${userId}`)
}

challengeServices = {...challengeServices, getAllChallengsByUserId};

export default challengeServices;
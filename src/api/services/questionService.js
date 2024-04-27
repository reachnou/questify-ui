import { ENDPOINTS } from "../../constants/endpoints";
import axiosInstance from "../axios";
import apiService from "./apiServices";

let questionServices = new apiService(ENDPOINTS.QUESTION);

const getRandomQuestionByTopicId = (topicId) => {
    return axiosInstance.get(ENDPOINTS.QUESTION + `/topic/${topicId}`)
}

questionServices = {...questionServices, getRandomQuestionByTopicId};

export default questionServices;
import { ENDPOINTS } from "../../constants/endpoints";
import apiService from "./apiServices";

let answerServices = new apiService(ENDPOINTS.ANSWER);

answerServices = {...answerServices};

export default answerServices;
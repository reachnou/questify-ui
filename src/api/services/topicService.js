import { ENDPOINTS } from "../../constants/endpoints";
import apiService from "./apiServices";

let topicServices = new apiService(ENDPOINTS.TOPIC);

topicServices = {...topicServices};

export default topicServices;
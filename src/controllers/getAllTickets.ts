import axios from "axios";
import { baseURL } from "../data/baseURL";

const getAllTickets = async () => {
    try {
        const response = await axios.get(baseURL)
        return response;

    } catch (error) {
        console.error(error)
    }

}

export default getAllTickets;
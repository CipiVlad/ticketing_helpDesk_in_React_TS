import { useNavigate } from "react-router-dom";
import { Ticket } from "../models/ticket.model";
import axios from "axios";
import { baseURL } from "../data/baseURL";

export default async function handleDelteTicket(id: Ticket) {
    const response = await axios.delete(`${baseURL}/${id}`)
    return response
}
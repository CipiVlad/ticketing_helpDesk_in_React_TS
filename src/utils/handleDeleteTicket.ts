import { Ticket } from "../models/ticket.model";
import axios from "axios";
import { baseURL } from "../data/baseURL";

export default async function handleDelteTicket(id: string) {
    try {
        const response = await axios.delete(`${baseURL}/${id}`)
        return response
    } catch (error) {
        console.log(error)
    }
}
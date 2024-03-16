import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL } from "../data/baseURL";
import { Ticket } from "../models/ticket.model";
import TicketCard from "../components/cards/TicketCard";

const TicketList = () => {
    const [tickets, setTickets] = useState<Ticket[]>([])

    useEffect(() => {
        async function getAllTickets() {
            const response = await axios.get(baseURL);
            setTickets(response.data);
        }
        getAllTickets()
    }, [])

    return (
        <div className="ticketList_container">
            {tickets.map((ticket, index) => (
                <TicketCard key={index} ticket={ticket} />
            ))}
        </div>
    )
}
export default TicketList;
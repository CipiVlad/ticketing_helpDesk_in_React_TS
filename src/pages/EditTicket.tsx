import { useState } from "react"
import { useParams } from "react-router-dom"
import { Ticket } from "../models/ticket.model"
import { baseURL } from "../data/baseURL"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import EditCard from "../components/cards/EditCard"

import FormCard from "../components/cards/CreateNewTicketForm"
// type EditTicketProps = {
//     ticket: Ticket
// }
const EditTicket = () => {
    return (
        <div>
            <EditCard />
        </div>
    )
}

export default EditTicket
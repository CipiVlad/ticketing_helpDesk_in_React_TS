import { useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import { Ticket } from "../models/ticket.model"
import { baseURL } from "../data/baseURL"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import EditCard from "../components/cards/EditCard"

const EditTicket = () => {
    let { state } = useLocation()
    return (
        <div>
            <EditCard ticketState={state} />
        </div>
    )
}

export default EditTicket
import { useState } from "react"
import { useParams } from "react-router-dom"
import { Ticket } from "../models/ticket.model"
import FormCard from "../components/cards/FormCard"
type Props = {
    ticket: Ticket
}
const EditTicket = ({ ticket }: Props) => {
    const { ticketId } = useParams()
    const [editTicket, setEditTicket] = useState<Ticket>({})
    console.log(ticketId)
    return (
        <div>
            <FormCard editTicket={editTicket} setEditTicket={setEditTicket} ticketId={ticketId} />
        </div>
    )
}

export default EditTicket
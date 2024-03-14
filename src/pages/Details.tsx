import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { baseURL } from "../data/baseURL"
import { Ticket } from "../models/ticket.model"
import DetailCard from "../components/cards/DetailCard"


const Details = (): JSX.Element => {
    const [detail, setDetail] = useState<Ticket>({});
    const { ticketId } = useParams()

    useEffect(() => {
        const getTicketById = async () => {
            await axios.get(`${baseURL}/${ticketId}`)
                .then((response) => {
                    setDetail(response.data)
                })
                .catch((error) => console.log(error))
        }
        getTicketById()
    }, [ticketId])


    return <DetailCard detail={detail} ticketId={ticketId} />
}
export default Details
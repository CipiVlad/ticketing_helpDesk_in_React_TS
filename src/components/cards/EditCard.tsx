import axios from "axios"
import { baseURL } from "../../data/baseURL"
import { Ticket } from "../../models/ticket.model"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


const EditCard = () => {
    const { ticketId } = useParams()
    const [editFields, setEditFields] = useState<Ticket>({})
    const navigate = useNavigate()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const editedTicket: Ticket = {
            id: ticketId,
            title: editFields.title,
            description: editFields.description
        }
        const editTicket = async () => {
            try {
                const response = await axios.put(`${baseURL}/${ticketId}`, editedTicket)
                navigate('/details/' + ticketId)
                return response
            } catch (error) {
                console.log(error)
            }
        }
        editTicket()
    }



    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name
        const value = event.target.value
        setEditFields(prevState => ({ ...prevState, [name]: value }))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title: </label>
            <input type="text" name="title" value={editFields.title || ''} onChange={handleChange} />
            <label htmlFor="description">Description: </label>
            <input type="text" name="description" value={editFields.description || ''} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    )
}
export default EditCard
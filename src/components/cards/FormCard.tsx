import { useState } from "react"
import { Ticket } from "../../models/ticket.model"
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import { baseURL } from "../../data/baseURL";
import { useNavigate } from "react-router-dom";


const FormCard = () => {

    const navigate = useNavigate()
    const [inputs, setInputs] = useState<Ticket>({})

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const newTicket: Ticket = {
            id: uuidv4().slice(0, 8),
            title: inputs.title,
            description: inputs.description
        }

        const createTicket = async () => {
            try {
                const response = await axios.post(`${baseURL}`, newTicket)
                navigate('/')
                return response
            } catch (error) {
                console.log(error)
            }
        }
        createTicket()

    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name
        const value = event.target.value
        setInputs(prevState => ({ ...prevState, [name]: value }))
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input type="text" name="title" onChange={handleChange} value={inputs.title} />
                <label htmlFor="description">Description:</label>
                <input type="text" name="description" onChange={handleChange} value={inputs.description} />
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default FormCard
import { useState } from "react"
import { Ticket } from "../../models/ticket.model"
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import { baseURL } from "../../data/baseURL";
import { useNavigate } from "react-router-dom";
import Form from "../../utils/Form";


const CreateNewTicketForm = () => {

    const navigate = useNavigate()
    const [inputs, setInputs] = useState<Ticket>({})

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const newTicket: Ticket = {
            id: uuidv4().slice(0, 8),
            title: inputs.title,
            description: inputs.description,
            hardware: inputs.hardware ? "yes" : "no",
            software: inputs.software ? "yes" : "no",
            solvingStatus: inputs.solvingStatus ? "undone" : "done",
            priorityStatus: inputs.priorityStatus === "low" ? "low" : undefined
                || inputs.priorityStatus === "mid" ? "mid" : undefined
                    || inputs.priorityStatus === "high" ? "high" : undefined

        }
        console.log(newTicket);


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
        console.log(newTicket);
    }


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setInputs(prevState => ({ ...prevState, [name]: value }))
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Form inputs={inputs} handleChange={handleChange} handleSubmit={handleSubmit} />
            </form>
        </>
    )
}

export default CreateNewTicketForm
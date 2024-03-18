import { TextField } from "@mui/material"
import Button from '@mui/material/Button';

// import { useState } from "react"
import { Ticket } from "../models/ticket.model"

import { Radio, Checkbox } from '@mui/joy';

const Form = <T extends Ticket>({ handleChange, inputs }: { inputs: T, handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void }) => {
    return (
        <>
            <TextField id="outlined-basic" label="Title" variant="outlined" onChange={handleChange} name="title" value={inputs.title} required />
            <TextField id="outlined-basic" label="Description" variant="outlined" onChange={handleChange} name="description" value={inputs.description} required />

            <label htmlFor="problem">Type Of Problem: </label>

            <Checkbox label="Hardware" name="hardware" value="yes" onChange={handleChange} />
            <Checkbox label="Software" name="software" value="yes" onChange={handleChange} />

            <label htmlFor="progress">Progress: <em>done / undone</em> </label>

            <Checkbox name="solvingStatus" value="{ inputs.solvingStatus }" onChange={handleChange} />

            <label htmlFor="priority">Priority: </label>
            <Radio label="high" name="priority" value="high" checked={inputs.priorityStatus === "high"} onChange={handleChange} />


            <Radio label="mid" name="priority" value="mid" checked={inputs.priorityStatus === "mid"} onChange={handleChange} />


            <Radio label="low" name="priority" value="low" checked={inputs.priorityStatus === "low"} onChange={handleChange} />

            <Button variant="contained" type="submit">
                Submit
            </Button>
        </>
    )
}
export default Form
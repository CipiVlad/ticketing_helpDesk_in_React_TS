import React from 'react'
import { Ticket } from '../../models/ticket.model'
import { NavLink } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

type TicketCardProps = {
    ticket: Ticket
}

const TicketCard = ({ ticket }: TicketCardProps) => {
    const card = (
        <>
            <CardContent className='renderTicketCardContainer'>
                <Typography variant='h6'>
                    <NavLink to={`/details/${ticket.id}`}>{ticket.title}</NavLink>
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Ticket-No.: {ticket.id}
                </Typography>
            </CardContent>
        </>
    )

    return (
        <Box>
            <Card
                sx={{ backgroundColor: "#c74040", margin: "2px" }}
                elevation={24}
            >
                {card}
            </Card>
        </Box>
    )
}

export default TicketCard
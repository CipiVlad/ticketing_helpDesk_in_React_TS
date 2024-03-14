import React from 'react'

// mui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { DeleteForeverOutlined } from '@mui/icons-material';

//import util
import handleDelteTicket from '../../utils/handleDelete';

//import type
import { Ticket } from '../../models/ticket.model';

type DetailCardProps = {
    detail: Ticket;
}


//component
const DetailCard = ({ detail }: DetailCardProps): JSX.Element => {
    const card = (
        <>
            <CardContent className='detailCardContent ' >
                <Typography variant='h6' >
                    <em>Incident: </em> {detail.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <em>Ticket-No.: </em> {detail.id}
                </Typography>
                <Typography><em>Description:</em> {detail.description}</Typography>
                <Typography><em>Type Of Problem:</em> Hardware? {detail.hardware} | Software? {detail.software} </Typography>
                <Typography><em>Progress Status:</em> {detail.solvingStatus}</Typography>
                <Typography><em>Priority:</em> {detail.priorityStatus}</Typography>
            </CardContent>
            <CardActions>
                <Button>
                    <EditIcon />
                </Button>
                <Button sx={{ color: "red" }} onClick={() => handleDelteTicket(window.location.pathname)}>
                    <DeleteForeverOutlined />
                </Button>
            </CardActions>
        </>
    )

    return (
        <Box>
            <Card
                sx={{ backgroundColor: detail.solvingStatus === "undone" ? "#c74240" : "#58ec1e", margin: "2px" }}
                elevation={24}
            >
                {card}
            </Card>
        </Box>
    )
}

export default DetailCard
import React from 'react'

// mui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { DeleteForeverOutlined } from '@mui/icons-material'


//import util
import handleDelteTicket from '../../utils/handleDeleteTicket';

//import type
import { Ticket } from '../../models/ticket.model';
import { NavLink, useNavigate } from 'react-router-dom';

//props for detail card component
type DetailCardProps = {
    detail: Ticket;
    ticketId: string
}


//component
const DetailCard = ({ detail, ticketId }: DetailCardProps): JSX.Element => {

    //open and close MUI dialog
    const [open, setOpen] = React.useState(false);

    //delete ticket
    const handleConfirmDelete = () => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            handleDelteTicket(ticketId)
            navigate('/')
        }
    };
    //navigate back to ticket list
    const navigate = useNavigate()

    //card content for detail card component 
    const card = (
        <>
            <CardContent className='detailCardContent ' >
                <Typography variant='h6' >
                    <em>Incident: </em> {detail.title}
                </Typography>
                <Typography sx={{ mb: 1.5, }} color="text">
                    <em>Ticket-No.: </em> <b>{detail.id}</b>
                </Typography>
                <Typography><em>Description:</em> <b>{detail.description}</b></Typography>
                <Typography><em>Type Of Problem:</em> Hardware? <b>{detail.hardware}</b> | Software? <b>{detail.software}</b> </Typography>
                <Typography><em>Solving Status:</em> <b>{detail.solvingStatus}</b></Typography>
                <Typography><em>Priority:</em> <b>{detail.priorityStatus}</b></Typography>
            </CardContent>
            <CardActions>
                <Button>
                    <NavLink to={`/edit-ticket/${ticketId}`} style={{ color: "white" }} state={detail}>
                        <EditIcon sx={{ color: "white" }} />
                    </NavLink>
                </Button>

                <Button sx={{ color: "red" }} onClick={handleConfirmDelete}>
                    <DeleteForeverOutlined sx={{ color: "white" }} />
                </Button>
            </CardActions>
        </>
    )

    return (
        <Box className='detailCardContainer'>
            <Card
                sx={{ backgroundColor: detail.solvingStatus === "done" ? "#58ec1e" : "#c74240", margin: "2px" }}
                elevation={24}
            >
                {card}
            </Card>
        </Box>
    )
}

export default DetailCard
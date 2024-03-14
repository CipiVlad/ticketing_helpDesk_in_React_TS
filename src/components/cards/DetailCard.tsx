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
import { useNavigate } from 'react-router-dom';

type DetailCardProps = {
    detail: Ticket;
    ticketId: string
}


//component
const DetailCard = ({ detail, ticketId }: DetailCardProps): JSX.Element => {

    //open and close MUI dialog
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const navigate = useNavigate()

    const card = (
        <>
            <CardContent className='detailCardContent ' >
                <Typography variant='h6' >
                    <em>Incident: </em> {detail.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <em>Ticket-No.: </em> <b>{detail.id}</b>
                </Typography>
                <Typography><em>Description:</em> <b>{detail.description}</b></Typography>
                <Typography><em>Type Of Problem:</em> Hardware? <b>{detail.hardware}</b> | Software? <b>{detail.software}</b> </Typography>
                <Typography><em>Solving Status:</em> <b>{detail.solvingStatus}</b></Typography>
                <Typography><em>Priority:</em> <b>{detail.priorityStatus}</b></Typography>
            </CardContent>
            <CardActions>
                <Button>
                    <EditIcon />
                </Button>

                <Button sx={{ color: "red" }} onClick={() => handleDelteTicket(ticketId).then(() => navigate("/"))}>
                    <DeleteForeverOutlined sx={{ color: "lightcoral" }} />
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
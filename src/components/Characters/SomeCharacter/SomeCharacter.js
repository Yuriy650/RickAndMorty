import React from 'react';
import './SomeCharacter.scss';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog"

const useStyles = makeStyles({
    root: {
        maxWidth: 350,
        opacity: 0.9,
    },
    media: {
        height: 250,
    },
    image: {
        marginLeft: "40px",
        marginRight: "20px",
        height: "350px",
        width: "350px"
    },
    dialog: {
        width: "440px",
    },
    ul_list: {
        listStyleType: "none",

    }
});
const SomeCharacter = (props) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const classes = useStyles();
        return (
            <div className='someCharacter-content'>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia onClick={handleClickOpen}
                        className={classes.media}
                        image={props.image}
                        title={props.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.name}
                        </Typography>
                        <Typography variant="body2" color="textPrimary" component="p">
                            <ul className='character-info'>
                                <li>species: {props.species}</li>
                                <li>status: {props.status}</li>
                                <li>gender: {props.gender}</li>
                            </ul>
                        </Typography>
                    </CardContent>
                </CardActionArea>

            </Card>
                <Dialog open={open} onClose={handleClose} aria-labelledby="customized-dialog-title">
                    <DialogTitle id="customized-dialog-title">{props.name}</DialogTitle>
                    <form>
                        <DialogContent className={classes.dialog}>
                            <img className={classes.image} src={props.image} alt={props.name}/>
                            <ul className={classes.ul_list}>
                                <li>Name: {props.name}</li>
                                <li>Species: {props.species}</li>
                                <li>Status: {props.status}</li>
                                <li>Gender: {props.gender}</li>
                                <li>Type: {props.type}</li>
                                <li>Origin: {props.origin}</li>
                                <li>Location: {props.location}</li>
                            </ul>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">Cancel</Button>
                        </DialogActions>
                    </form>
                </Dialog>
            </div>
        )
}
export default SomeCharacter;
import React from "react";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        background: "white",
        border: "solid 1px red",
        borderBottom: "solid 3px red",
        boxShadow: "inset 0 0 0 1px #939393",
        color: "red",
        textShadow: "0 1px 0 #2f2f2f"
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
const CharacterCardAction = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <CardActions>
                <Button size="small" color="primary" variant="outlined" onClick={handleClickOpen}
                        className={classes.root}>
                    More
                </Button>
            </CardActions>
            <Dialog open={open} onClose={handleClose} aria-labelledby="customized-dialog-title">
                <DialogTitle id="customized-dialog-title">{props.name}</DialogTitle>
                <form>
                    <DialogContent className={classes.dialog}>
                        <img className={classes.image} src={props.image} alt={props.name}/>
                        <ul className={classes.ul_list}>
                            <li>Species: {props.species}</li>
                            <li>Gender: {props.gender}</li>
                            <li>Type: {props.type}</li>
                            <li>Status: {props.status}</li>
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
export default CharacterCardAction;
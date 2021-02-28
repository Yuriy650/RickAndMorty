import React from 'react';
import './SomeCharacter.scss';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CharacterCardAction from "./CharacterCardAction/CharacterCardAction";

const useStyles = makeStyles({
    root: {
        maxWidth: 350,
        opacity: 0.9,

    },
    media: {
        height: 250,
    },
});
const SomeCharacter = (props) => {
    const classes = useStyles();
        return (
            <div className='someCharacter-content'>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
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
                <CharacterCardAction id={props.id}
                                     name={props.name}
                                     species={props.species}
                                     status={props.status}
                                     gender={props.gender}
                                     image={props.image}
                                     origin={props.origin}
                                     type={props.type}
                                     location={props.location}
                />
            </Card>
            </div>

        )

}
export default SomeCharacter;
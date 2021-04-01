import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Truncate from 'react-truncate';

const useStyles = makeStyles({
    projectCard: {
        position: 'relative',
        height: 378,
        color: '#fff',
        backgroundRepeat: 'no-repeat',
        cursor: 'pointer',
        transition: '0.5s',
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
        "&:hover" : { 
            boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px'
        }
    },
    projectCardImg: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        filter: 'brightness(50%)',
    },
    projectCardTitle: {
        position: 'absolute',
        textAlign: 'center',
        maxWidth: 250,
        color: '#fff',
        fontSize: 20,
        fontWeight: 600,
        top: '50%',
        height: 30,
        marginTop: -30,
        left: 0,
        right: 0,
        marginRight: 'auto',
        marginLeft: 'auto',
    }
})

export default function ProjectCard({data}) {
    
    const classes = useStyles();
    const {
        title,
        image
    } = data;


    return (
        <div className={classes.projectCard}>
            <img className={classes.projectCardImg} src={image} alt={`${title} - project`}/>
            <Typography className={classes.projectCardTitle}>
                <Truncate lines={2} ellipsis={'...'}>
                    {title}
                </Truncate>
            </Typography>
        </div>
    )
}

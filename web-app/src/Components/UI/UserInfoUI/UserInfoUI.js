import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import classStyle from './UserInfoUI.css';

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

const MediaCard = props => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.avatar}
          title='Contemplative Reptile'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {props.data.Username}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='div'>
            {props.rows.map((item, i) => {
              return (
                <div key={item.field} className={classStyle.info}>
                  <div className={classStyle.header}>{item.name}:</div>{' '}
                  <div>{props.data[item.field]}</div>
                </div>
              );
            })}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary' onClick={props.update}>
          Update Info
        </Button>
        <Button size='small' color='primary' onClick={props.changed}>
          Change Password
        </Button>
      </CardActions>
    </Card>
  );
};

export default MediaCard;

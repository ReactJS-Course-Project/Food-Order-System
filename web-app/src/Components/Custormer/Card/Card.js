import React from 'react';

import classes from './Card.css';

const card = props => (
  <article className={classes.Post} onClick={props.clicked}>
    <h1>{props.userName}</h1>
    <div className={classes.Info}>
      <div className={classes.Author}>{props.location}</div>
    </div>
  </article>
);

export default card;

import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import classes from './FoodInfo.css';

export default function PopoverPopupState(props) {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {popupState => (
        <div className={classes.mid}>
          <Button {...bindTrigger(popupState)}>{props.myFood}</Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}
          >
            <Box p={3}>
              <Typography>
                Hot Chip (French Fries)
                <br />
                10,300 KHR
                <br />
                <button>Add to card</button>
                <button>Back to menu</button>
              </Typography>
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}

import React from 'react';
import classStyle from './ToolbarItem.css';
import Dropbox from '../../../Navigations/Dropbox/Dropbox';

const ToolbarItem = props => {
  return (
    <div className={classStyle.ToolbarItem} onClick={props.toggleDropBox}>
      {props.showDropbox ? (
        <Dropbox
          title={props.title}
          items={props.items}
          func={() => {
            console.log('it works');
          }}
        />
      ) : (
        <div>{props.title}</div>
      )}
    </div>
  );
};

export default ToolbarItem;

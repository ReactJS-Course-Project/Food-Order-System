import React from 'react';
import ToolbarItem from '../ToolbarItem/ToolbarItem';

const food = props => {
  return (
    <ToolbarItem
      title={props.name}
      showDropbox={props.items.dropbox}
      items={props.items.itemsList}
    />
  );
};

export default food;

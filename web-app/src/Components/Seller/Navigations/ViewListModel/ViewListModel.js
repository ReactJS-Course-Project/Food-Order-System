import React from 'react';
import classStyle from './ViewListModel.css';

const viewListModel = props => (
  <div className={classStyle.viewList}>{props.children}</div>
);

export default viewListModel;

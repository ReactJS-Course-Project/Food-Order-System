import React, { Component } from 'react';
import classStyle from './Toolbar.css';
import MenuLogo from '../../../../Assets/Icons/menu.png';
import ToolbarItem from './ToolbarItem/ToolbarItem';
import Seller from './SellerInfo/SellerInfo';

class Toolbar extends Component {
  render() {
    const data = [
      {
        name: 'Seller',
        id: 's01',
        dropbox: true,
        itemList: [
          { id: 'se01', itemName: 'About' },
          { id: 'se02', itemName: 'Changed Password' },
          { id: 'se03', itemName: 'Changed Username' },
          { id: 'se04', itemName: 'Settings' }
        ]
      },
      {
        name: 'Food',
        id: 's02',
        dropbox: true,
        itemList: [
          { id: 'f01', itemName: 'View Foods' },
          { id: 'f02', itemName: 'Add Food' },
          { id: 'f03', itemName: 'Update Food' },
          { id: 'f04', itemName: 'Delete Food' }
        ]
      },
      { name: 'Orders', id: 's03', dropbox: false, itemList: [] },
      { name: 'Log Out', id: 's04', dropbox: false, itemList: [] }
    ];

    const sellerItem = {
      itemsList: [
        { id: 's01', itemName: 'About' },
        { id: 's02', itemName: 'Changed Password' },
        { id: 's03', itemName: 'Changed Username' },
        { id: 's04', itemName: 'Settings' }
      ],
      dropbox: true
    };

    return (
      <div className={classStyle.Toolbar}>
        <img src={MenuLogo} alt='Menu Logo' />
        <Seller items={sellerItem} name='Seller' />
      </div>
    );
  }
}

export default Toolbar;

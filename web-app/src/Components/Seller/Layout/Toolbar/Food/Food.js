import React from 'react';
import axios from '../../../../Axios/axiosFoodApi';
import ViewListModel from '../../../Navigations/ViewListModel/ViewListModel';
import TableUI from '../../../../UI/TableUI/TableUI';
import LayOut from '../../Layout';

class Food extends React.Component {
  state = {
    foods: [],
    content: null
  };

  componentDidMount() {
    let SellerId = localStorage.getItem('sCurId');
    axios
      .get(`/${SellerId}`)
      .then(response => {
        console.log(response);
        const foodlist = response.data.map(item => {
          return {
            id: item.Id,
            name: item.name,
            price: item.price,
            category: item.category.name
          };
        });

        const columns = [
          { title: 'Food name', field: 'name' },
          { title: 'Price', field: 'price', type: 'numeric' },
          {
            title: 'Category',
            field: 'category'
            // lookup: { 1: '', 63: 'Şanlıurfa' }
          }
        ];
        this.setState({
          foods: foodlist,
          content: (
            <ViewListModel>
              <TableUI
                columns={columns}
                data={foodlist}
                title='Foods'
                delete={this.onDeleteHandler}
              />
            </ViewListModel>
          )
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  onDeleteHandler = id => {
    axios
      .delete(`/${id}`)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  onAddHandler = () => {};

  render() {
    return <LayOut>{this.state.content}</LayOut>;
  }
}

export default Food;

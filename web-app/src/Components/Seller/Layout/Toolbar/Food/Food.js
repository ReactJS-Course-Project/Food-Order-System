import React from 'react';
import axios from '../../../../Axios/axiosFoodApi';
import axiosCategory from '../../../../Axios/axiosCategoryApi';
import ViewListModel from '../../../Navigations/ViewListModel/ViewListModel';
import TableUI from '../../../../UI/TableUI/TableUI';
import LayOut from '../../Layout';

class Food extends React.Component {
  state = {
    foods: [],
    categories: {},
    content: null
  };

  componentDidMount() {
    axiosCategory.get('/GetAll').then(response => {
      const categories = response.data.map(item => {
        return {
          id: item.id,
          name: item.name
        };
      });
      this.setState({
        categories: categories
          .map(item => ({ [item.id]: item.name }))
          .reduce(function(result, item) {
            var key = Object.keys(item)[0]; //first property: a, b, c
            result[key] = item[key];
            return result;
          }, {})
      });
    });
    let SellerId = localStorage.getItem('sCurId');
    axios
      .get(`/${SellerId}`)
      .then(response => {
        const foodlist = response.data.map(item => {
          return {
            id: item.Id,
            name: item.name,
            price: item.price,
            category: item.category.Id
          };
        });

        const columns = [
          { title: 'Food name', field: 'name' },
          { title: 'Price', field: 'price', type: 'numeric' },
          {
            title: 'Category',
            field: 'category',
            lookup: this.state.categories
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
                add={this.onAddHandler}
                update={this.onUpdateHandler}
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

  onAddHandler = newFood => {
    let SellerId = localStorage.getItem('sCurId');
    axios
      .post('import', {
        name: newFood.name,
        price: parseFloat(newFood.price),
        SellerId: parseInt(SellerId),
        CategoryId: parseInt(newFood.category)
      })
      .then(response => {
        console.log(response);
      });
  };

  onUpdateHandler = newFood => {
    console.log(newFood);
    axios
      .put(`Update/${newFood.id}`, {
        CategoryId: parseInt(newFood.category),
        name: newFood.name,
        price: parseFloat(newFood.price)
      })
      .then(response => {
        console.log(response);
      });
  };
  render() {
    return <LayOut>{this.state.content}</LayOut>;
  }
}

export default Food;

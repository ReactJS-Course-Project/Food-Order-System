import React, { Component } from 'react';
import axios from 'axios';

import Toolbar from '../../Components/Custormer/Toolbar/Toolbar';
import Post from '../../Components/Custormer/Card/Card';

import classes from './FoodOrder.css';
import Description from '../../Components/Custormer/Description/Description';
import Select from '../../Components/Custormer/Select/Cuisine/Select';
import SelectPopular from '../../Components/Custormer/Select/MostPopular/Select';

import { Link } from 'react-router-dom';

const tokenStr =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxIiwidW5pcXVlX25hbWUiOiJjaGV0aGEiLCJuYmYiOjE1NzU0NTkxOTIsImV4cCI6MTU3NjA2Mzk5MiwiaWF0IjoxNTc1NDU5MTkyfQ.hYQtiDufdLxsnB67FVFgGmfbun5DeOlg3jwijXE7DqY';
export default class Landing extends Component {
  state = {
    posts: [],
    selectedId: null
  };
  componentDidMount() {
    axios
      .get('http://localhost:4000/sellers/getall', {
        headers: { Authorization: `Bearer ${tokenStr}` }
      })
      .then(response => {
        const posts = response.data;
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            location: 'Phnom Penh'
          };
        });
        this.setState({ posts: updatedPosts });
      });
  }

  postSelectedHandler = id => {
    this.setState({ selectedId: id });
  };

  render() {
    const style = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center'
    };
    const posts = this.state.posts.map(post => {
      return (
        <Link
          to={'/' + post.id}
          key={post.id}
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <Post
            userName={post.lastName}
            location={post.location}
            clicked={() => this.postSelectedHandler(post.id)}
          />
        </Link>
      );
    });

    return (
      <div>
        <Toolbar />
        <Description />
        <div style={{ ...style }}>
          <Select />
          <SelectPopular />
        </div>
        <div>
          <section className={classes.Posts}>{posts}</section>
        </div>
      </div>
    );
  }
}

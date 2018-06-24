import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

import { setSuggestionList, setCategoryList } from './actions';

// Containers (Smart Components)
import Home from './containers/home';
import Movie from './containers/movie';

import SuggestionList from './containers/suggestion-list';
import CategoryList from './containers/category-list';
import Player from './containers/player';

// Components (Dumb components)
import Header from './components/header';

class Root extends Component {
  componentDidMount() {
    this.props.setCategoryList();
    this.props.setSuggestionList();
  }
  render() {
    if (this.props.movie) {
      return <Movie />
    }
    return (
      <Home>
        <Header />
        <Text>Seeker</Text>
        <Text>Categories</Text>
        <Player />
        <CategoryList/>
        <SuggestionList/>
      </Home>
    );
  }
}
const mapStateToProps = ({ movie }) => ({ movie });

export default connect(mapStateToProps, { setSuggestionList, setCategoryList })(Root);

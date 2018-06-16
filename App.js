import React from 'react';
import { Text, View } from 'react-native';

// Containers (Smart Components)
import Home from './containers/home';
import SuggestionList from './containers/suggestion-list';

// Components (Dumb components)
import Header from './components/header';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header />
        <Home>
          <Text>Something...</Text>
        </Home>
        <SuggestionList />
      </View>
    );
  }
}

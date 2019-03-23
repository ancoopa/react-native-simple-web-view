import React from 'react';
import { WebView, StyleSheet } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
        <WebView
            source={{uri: 'https://telechart.herokuapp.com/'}}
            style={{marginTop: 20}}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

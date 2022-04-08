import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {WebView} from 'react-native-webview';

class WebViewScreen extends Component {
  render() {
    return <WebView source={{uri: 'https://gadget-kart.herokuapp.com/'}} />;
  }
}

export default WebViewScreen;

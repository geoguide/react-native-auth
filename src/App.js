import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {

  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBTjXDsj9GpsIGnDLvpThlK0n6wdm3Swjc',
      authDomain: 'auth-5df60.firebaseapp.com',
      databaseURL: 'https://auth-5df60.firebaseio.com',
      projectId: 'auth-5df60',
      storageBucket: 'auth-5df60.appspot.com',
      messagingSenderId: '228057218215'
    });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>
                Log Out
              </Button>
            </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <CardSection><Spinner size="large" /></CardSection>;
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;

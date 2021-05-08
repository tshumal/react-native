import React from 'react';
import AppNavigator from "./src/navigation";
import { createAppContainer } from 'react-navigation';

//const AppContainer = createAppContainer(AppNavigation);

export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}



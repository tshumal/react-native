import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import EventList from '../screens/EventList';
import EventForm from '../screens/EventForm';

const AppNavigator = createStackNavigator (
    {
      list: { 
          screen: EventList,
          navigationOptions: () => ({
              title: 'Your Events'
          }), 
        },
      form: { 
          screen: EventForm,
          navigationOptions: () => ({
            title: 'Your Events'
            }),
        },  
    },
    {
      initialRouteName: 'list',
      //headerMode: 'none',
    }
  );

  export default createAppContainer(AppNavigator);
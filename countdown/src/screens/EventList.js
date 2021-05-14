import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native'
import ActionButton from 'react-native-action-button';
import { getEvents } from '../util/api';

import EventCard from './EventCard';

class EventList extends Component {

    state = {
        events: []
    }

    handleAddEvent = () => {
        this.props.navigation.navigate('form');
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
              events: this.state.events.map(evt => ({
                ...evt,
                timer: Date.now(),
              })),
            });
          }, 1000);

          this.props.navigation.addListener(
            'didFocus',
            () => {
              getEvents().then(events => this.setState({ events }));
            }
          );
    }

    render() {
        return[
            <FlatList
                key="flatlist"
                style={ styles.list }
                data={this.state.events }
                renderItem={({item}) => <EventCard event={item} />}
                keyExtractor={ item => item.id }
            
            />,
            <ActionButton
                key="fab"
                buttonColor="rgba(231,76,60,1)"
                onPress={this.handleAddEvent}
            />,
        ];
    }

}

const styles = StyleSheet.create({
    list: {
      flex: 1,
      paddingTop: 20,
      backgroundColor: '#F3F3F3'
    },
  });

export default EventList;

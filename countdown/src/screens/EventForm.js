import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'

class EventForm extends Component {

    handlePress = () => {
        this.props.navigation.navigate('list');

    }

    render() {
        return (
            <View>
                <TouchableHighlight
                onPress={this.handlePress}
                >
                    <Text>Add</Text>

                </TouchableHighlight>
            </View>

        );
    }

}

export default EventForm;
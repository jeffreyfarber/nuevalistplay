import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

export default class LogDisplay extends Component {
  constructor(props) {
    super(props);
    this.messages = []; // Not using a state variable since addMessage() is being called very rapidly and setState() causes race conditions to overwrite previous messages
  }

  addMessage(message) {
    this.messages.push({time: Date.now(), text: message, messageNum: this.messages.length});
    this.forceUpdate();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logMessages}>
          {this.messages.map(message => {
            return <View style={styles.logMessage} key={message.time + message.text + message.messageNum}><Text>{message.text}</Text></View>;
          })}
        </View>
        <Button
          onPress={() => {
            this.messages = [];
            this.forceUpdate();
          }}
          title="Clear Log"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 20,
  },
  logMessages: {
    borderColor: 'black',
    width: '100%',
    height: 400,
    borderWidth: 2,
    padding: 10,
  },
  logMessage: {
    margin: 3,
  },
});



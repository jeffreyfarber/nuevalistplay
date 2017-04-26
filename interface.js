import React, { Component } from 'react';
import {View, StyleSheet, Button} from 'react-native';
import LogDisplay from './logDisplay.js';

export default class Interface extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myArray: [],
      myStates: [],
    };
  }

  logMessage(message) {
    this.logdisplay.addMessage(message);
  }

  logMyArray() {
    this.logdisplay.addMessage(this.state.myArray.join(', '));
  }

  handleButtonInitialize() {
    this.setState({
      myArray: [1, 2, 3],
      myStates: [
        {name: 'California', population: 38.80},
        {name: 'Texas', population: 26.95},
        {name: 'Florida', population: 19.89},
      ],
    });
  }

  handleButton1() {
    let newArray = this.state.myArray.slice();
    newArray.reverse();
    newArray.push(newArray.filter(function (element) {
      return element % 2 !== 0;
    }).length);
    this.setState({myArray: newArray});
  }

  handleButton2() {
    let newArray = this.state.myArray.slice();
    newArray.sort();
    this.logMessage(newArray.pop());
    this.setState({myArray: newArray});
  }

  handleButton3() {
    let newArray = this.state.myArray.slice();
    var i = 0;
    this.state.myStates.forEach(function (state) {
      newArray[i] = state.population;
      i += 1;
    });
    newArray = newArray.concat(this.state.myArray);
    this.setState({myArray: newArray});

    var resultAndAmbiguousVariableName = newArray.every(function (value) {
      return value > 0;
    });
    this.logMessage(resultAndAmbiguousVariableName ? 'yes' : 'no');
  }

  render() {
    return (
      <View style={styles.container}>
        <LogDisplay
          ref={(d) => {
            this.logdisplay = d;
          }}
        />

        <View style={styles.horizontalRow}>
          <Button
            onPress={this.handleButtonInitialize.bind(this)}
            title="Init"
            style={styles.horizontalItem}
          />
        </View>

        <View style={styles.horizontalRow}>
          <Button
            onPress={this.handleButton1.bind(this)}
            title="Button 1"
          />
        </View>

        <View style={styles.horizontalRow}>
          <Button
            onPress={this.handleButton2.bind(this)}
            title="Button 2"
          />
        </View>

        <View style={styles.horizontalRow}>
          <Button
            onPress={this.handleButton3.bind(this)}
            title="Button 3"
          />
        </View>

        <View style={styles.horizontalRow}>
          <Button
            onPress={this.logMyArray.bind(this)}
            title="Log this.state.myArray"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  horizontalRow: {
    flex: 1,
    flexDirection: 'row',
  },
  horizontalItem: {
    flex: 1,
  },
});

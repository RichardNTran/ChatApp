import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { connect} from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { loadChat } from '../actions';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }
  onNextPress(){
    console.log('on next press');
    this.props.loadChat({name: this.state.name});
  }
  render() {
    return (
      <View>
        <Text style={styles.title}>
          Enter your name:
        </Text>
        <TextInput
          style={styles.nameInput}
          placeholder='Nguyen Van A'
          onChangeText={(text) => {
            this.setState({
              name: text
            })
          }}
          value={this.state.name}
        />
        <TouchableOpacity onPress={this.onNextPress.bind(this)}
          style={styles.buttonContainer}
        >
          <Text style={styles.buttonText}> Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  title: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20
  },
  nameInput: {
    height: 40,
    borderWidth: 2,
    borderRadius: 1,
    borderColor: 'black',
    margin: 20,
    padding: 5,
    fontSize: 18
  },
  buttonContainer: {
    margin: 20,
    borderColor: 'blue',
    borderWidth: 2,
    borderRadius: 5,
    alignSelf: 'center'

  },
  buttonText: {
    fontSize: 20,
    padding: 5
  }
}

export default connect(null, { loadChat })(Home);

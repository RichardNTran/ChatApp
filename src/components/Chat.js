import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import Backend from '../Backend';

class Chat extends Component {

  state = {
    messages: []
  };
  onSend( message) {
    Backend.sendMessage(message)
  }

  componentWillMount(){
    
  }

  componentDidMount(){
    Backend.loadMessages((message) => {
      this.setState((previouseState) => {
        return {
          messages: GiftedChat.append(previouseState.messages, message),
        };
      });
    });
  }

  componentWillUnmount(){
    Backend.closeChat();
  }

  render() {
    return (
      <GiftedChat
      messages={this.state.messages}
      onSend={message => this.onSend(message)}
      user={{
        _id: Backend.getUid(),
        name: this.props.name
      }}
    />
      
    );
  }
}

Chat.defaultProps = {
  name: 'John',
};

Chat.propTypes = {
  name: PropTypes.string
}

const mapStateToProps = (state) => {
  const { name } = state.chatData;

  return { name };
}

// export default Chat;
export default connect(mapStateToProps, {})(Chat);

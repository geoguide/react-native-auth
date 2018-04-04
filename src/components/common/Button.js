import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

class Button extends React.Component {
  render() {
    const { buttonStyle, textStyle } = styles;
    const { onPress, children } = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <Text style={textStyle}>
          {children}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
};

export { Button };

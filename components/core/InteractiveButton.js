import React from "react";
import { TouchableHighlight, StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
const InteractiveButton = (props) => {
  return (
    <TouchableHighlight onPress={props.onPress} style={styles.button}>
      <React.Fragment>
      <Text style={styles.buttonText}>{props.title}</Text>
        <Icon style={styles.iconText} name="arrow-right" size={20} color="#fff" />
        </React.Fragment>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: '#007bff', 
        paddingHorizontal: 20,
        paddingVertical: 10, 
        borderRadius: 5, 
        width: '100%',
        
      },
      buttonText: {
        color: 'white',
      },

      iconText: {
        paddingLeft: 15
      }
});

export default InteractiveButton;

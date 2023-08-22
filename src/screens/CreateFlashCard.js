import { Text, View ,SafeAreaView, StyleSheet, TextInput,TouchableOpacity} from "react-native";
import React, { Component } from 'react';

class CreateFlashCard extends Component {

    state = {
        title: '',
        content: ''
     }
     handleTitle = (text) => {
        this.setState({ title: text })
     }
     handleContent= (text) => {
        this.setState({ content: text })
     }
     createCard = (title, content) => {
        alert('title: ' + title + ' content: ' + content);
     }
render(){
return(
    <SafeAreaView>
        <View>
        <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Title"
               onChangeText = {this.handleTitle}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Content"
               onChangeText = {this.handleContent}/>

        <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.createCard(this.state.title, this.state.content)
               }>
               <Text style = {styles.submitButtonText}> Add Card </Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
      );
   }
}

export default  CreateFlashCard;

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 4
    },
    submitButton: {
        padding: 10,
        margin: 15,
        height: 40,
        alignItems: 'center',
     },
     submitButtonText:{
        color: '#00bfff',
        fontWeight: 'bold',
        fontSize: 15,
     }
  });
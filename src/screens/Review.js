import { View ,SafeAreaView, StyleSheet, TouchableOpacity, Button} from "react-native";
import { Text, Card, Icon } from '@rneui/themed';
import React, {useState} from 'react';

const Review = () =>{

    const [cardText, setButtonText] = useState('People who have type 1 diabetes may also have nausea, vomiting, or stomach pains. Type 1 diabetes symptoms can develop in just a few weeks or months and can be severe. Type 1 diabetes usually starts when you’re a child, teen, or young adult but can happen at any age.');
    const [showButtonRow, setShowButtons] = useState(false);

    const handleButtonClick = () => {
        setButtonText('If you have type 1 diabetes, your pancreas doesn’t make insulin or makes very little insulin. Insulin helps blood sugar enter the cells in your body for use as energy. Without insulin, blood sugar can’t get into cells and builds up in the bloodstream. High blood sugar is damaging to the body and causes many of the symptoms and complications of diabetes. Type 1 diabetes was once called insulin-dependent or juvenile diabetes. It usually develops in children, teens, and young adults, but it can happen at any age. Type 1 diabetes is less common than type 2—about 5-10% of people with diabetes have type 1. Currently, no one knows how to prevent type 1 diabetes, but it can be treated successfully by:');
        setShowButtons(!showButtonRow);
      };

    const ButtonRow = () => {
        return (
          <View style={styles.buttonRow}>
           <TouchableOpacity style={styles.againStyle}><Text style={styles.metricsTextStyle}>Again</Text></TouchableOpacity>
           <TouchableOpacity style={styles.hardStyle}><Text style={styles.metricsTextStyle}>Hard</Text></TouchableOpacity>
           <TouchableOpacity style={styles.goodStyle}><Text style={styles.metricsTextStyle}>Good</Text></TouchableOpacity>
           <TouchableOpacity style={styles.easyStyle}><Text style={styles.metricsTextStyle}>Easy</Text></TouchableOpacity>
          </View>
        );
      };

    const CardHeader = () => {
        return (
          <View style={styles.cardHeaderStyle}>
            <Text style={styles.cardTitleTextStle}>Card Metrics Here</Text>
          </View>
        );
      };

    return(
        <View >
        <Card>
          <Card.Title><CardHeader/></Card.Title>
          <Card.Divider />
                <Text>{cardText}</Text>
        {!showButtonRow ?  <TouchableOpacity
               style = {styles.showButton}
               onPress = {handleButtonClick}>
               <Text style = {styles.showButtonText}> Show </Text>
            </TouchableOpacity> : null}
            {showButtonRow ? (<ButtonRow/> ) : null}
        </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    cardHeaderStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },

    cardTitleTextStle:{
        fontWeight: 'bold',
        fontSize: 15,
    },
    
    buttonRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        marginTop:20
      },

      metricsTextStyle:{
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
      },
      againStyle:{
        borderRadius:8,
        backgroundColor:'#ff0000',
        elevation: 8,
        marginRight:10,
        paddingVertical: 10,
        paddingHorizontal: 12,
      },
      hardStyle:{
        borderRadius:8,
        backgroundColor:'#ff8c00',
        marginRight:10,
        elevation: 8,
        paddingVertical: 10,
        paddingHorizontal: 12,
      },
      goodStyle:{
        borderRadius:8,
        backgroundColor:'#008000',
        elevation: 8,
        marginRight:10,
        paddingVertical: 10,
        paddingHorizontal: 12,
      },
      easyStyle:{
        borderRadius:8,
        backgroundColor:'#0000cd',
        elevation: 8,
        paddingVertical: 10,
        paddingHorizontal: 12,
      },
    showButton: {
        padding: 10,
        margin: 15,
        height: 40,
        alignItems: 'center',
     },
     showButtonText:{
        color: '#00bfff',
        fontWeight: 'bold',
        fontSize: 15,
     }
  });
export default Review;
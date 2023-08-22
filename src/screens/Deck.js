/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const HomeScreen = ()  => {

  const data = [
    { id: '1', name: 'Deck 1', due: 3 },
    { id: '2', name: 'Deck 2', due: 5 },
    { id: '3', name: 'Deck 3', due: 1 },
    { id: '4', name: 'Deck 4', due: 5 },
    { id: '5', name: 'Deck 5', due: 6 },
    { id: '6', name: 'Deck 6', due: 9 },
  ];

  const navigation = useNavigation();

const ActionColumn = () => {
  return (
    <View style={styles.iconContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('CreateFlashCard')}>
      <Image style={styles.image} 
        source={require('../images/open.png')}/>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Review')}>
      <Image style={styles.image}
        source={require('../images/edit.png')}
      />
      </TouchableOpacity>
    </View>
  );
};


const RowItem = ({ item }) => {
  return (
    <View style={styles.rowContainer}>
      <Text style={styles.nameColumn}>{item.name}</Text>
      <Text style={styles.dueColumn}>{item.due}</Text>
      <ActionColumn />
    </View>
  );
};

const HeaderRow = () => {
  return (
    <View style={styles.rowHeaderContainer}>
      <Text style={styles.header}>Name</Text>
      <Text style={styles.header}>Due</Text>
      <Text style={styles.header}>Action</Text>
    </View>
  );
};


const renderHeader = () => <HeaderRow />;


  return (
    <FlatList
      data={data}
      renderItem={RowItem}
      ListHeaderComponent={renderHeader}
      keyExtractor={item => item.id}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 50,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  rowHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 35,
    paddingHorizontal: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nameColumn: {
    flex: 2,
    fontSize: 14,
  },
  dueColumn: {
    flex: 1,
    fontSize: 14,
    marginRight: 45,
    fontWeight: 'bold',
    color:'#900'
  },
  actionColumn: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  image: {
    width: 20,
    height: 20,
  },
});

export default HomeScreen;

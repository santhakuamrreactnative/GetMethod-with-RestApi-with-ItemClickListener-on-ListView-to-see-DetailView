import React from 'react';
import { View, Text , Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function SecondScreen({route, navigation}) {

    const {image, firstname, lastname, email} = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={{uri: image}}
       style={{width: 400, height: 400}} />
      <Text>Customer Name : {firstname}</Text>
      <Text>Nick Name : {lastname}</Text>
      <Text>E-mail : {email}</Text>
    </View>
  );
}

export default SecondScreen;
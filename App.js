/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */

import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ScreenContainer} from 'react-native-screens';

const Stack = createStackNavigator();
const HomeStack = createStackNavigator();
const SettingStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const NotifStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} />
    <HomeStack.Screen name="Details" component={DetailScreen} />
  </HomeStack.Navigator>
);

const SettingStackScreen = () => (
  <SettingStack.Navigator>
    <SettingStack.Screen name="Settings" component={SettingScreen} />
  </SettingStack.Navigator>
);

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={ProfileScreen} />
  </ProfileStack.Navigator>
);

const HomeScreen = ({navigation}) => (
  <ScreenContainer>
    <View style={(styles.container, styles.button)}>
      <Text>Home Screen</Text>
      <Button title="See Details" onPress={() => navigation.push('Details')} />
    </View>
  </ScreenContainer>
);

const DetailScreen = ({navigation}) => (
  <ScreenContainer>
    <View style={(styles.container, styles.button)}>
      <Text>Details Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.push('Home')} />
    </View>
  </ScreenContainer>
);

const SettingScreen = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Settings!</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Your Profile</Text>
  </View>
);

const NotifScreen = ({navigation}) => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Notifications!</Text>
    <Button title="Drawer" onPress={() => navigation.toggleDrawer()} />
  </View>
);

const NotifStackScreen = () => (
  <NotifStack.Navigator>
    <NotifStack.Screen name="Notifications" component={NotifScreen} />
  </NotifStack.Navigator>
);

const Tabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeStackScreen} />
    <Tab.Screen name="Profile" component={ProfileStackScreen} />
    <Tab.Screen name="Settings" component={SettingStackScreen} />
  </Tab.Navigator>
);

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Tabs} />
        <Drawer.Screen name="Notifications" component={NotifStackScreen} />
      </Drawer.Navigator>
      {
        // <Stack.Navigator initialRouteName="Home">
        //   <Stack.Screen
        //     options={{title: 'Home Screen'}}
        //     name="Home"
        //     component={HomeScreen}
        //   />
        //   <Stack.Screen name="Details" component={DetailScreen} />
        // </Stack.Navigator>
      }
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default App;

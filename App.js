import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from './src/screens/HomeScreen';
import MyPageScreen from './src/screens/MyPageScreen';
import SearchScreen from './src/screens/SearchScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
      <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
              tabBarStyle: {
                  position: 'absolute',
                  backgroundColor: "rgb(32,32,35)",
              },
              tabBarShowLabel: false,
              tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.4)',
              tabBarActiveTintColor: 'white',
          }}>
        <Tab.Screen
            name="Search"
            component={SearchScreen}
            options={{
              title: '검색',
              tabBarIcon: ({color, size}) => (
                  <Icon name="search" color={color} size={size} />
              ),
            }}/>
        <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
                title: '홈',
                tabBarIcon: ({color, size}) => (
                    <Icon name="home" color={color} size={size} />
                ),
            }}/>
        <Tab.Screen
            name="myPage"
            component={MyPageScreen}
            options={{
                title: '마이페이지',
                tabBarIcon: ({color, size}) => (
                    <Icon name="person" color={color} size={size} />
            ),
        }}/>
      </Tab.Navigator>
  );
}

export default function App() {
  return (
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
  );
}

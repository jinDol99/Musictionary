import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

// [23.10.30] Tab Navigation 동작 확인용 코드
function HomeScreen() {
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
  );
}

function SettingsScreen() {
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
  );
}

function SearchScreen() {
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Search Screen!</Text>
      </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
      <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
              tabBarActiveBackgroundColor: "#5e5e5e",
              tabBarActiveTintColor: "#ffffff",
              tabBarShowLabel: false,
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
            name="Settings"
            component={SettingsScreen}
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
// [23.10.30] Tab Navigation 동작 확인용 코드 끝

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

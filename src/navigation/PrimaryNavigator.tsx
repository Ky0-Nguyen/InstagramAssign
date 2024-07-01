/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {HomeScreen, SearchScreen} from 'modules';
import {ROUTE_KEY} from 'core/constants';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const PrimaryNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        lazy: true,
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName = 'home';
          if (route.name === ROUTE_KEY.HOME) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === ROUTE_KEY.SEARCH) {
            iconName = focused ? 'search' : 'search-outline';
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name={ROUTE_KEY.HOME} component={HomeScreen} />
      <Tab.Screen name={ROUTE_KEY.SEARCH} component={SearchScreen} />
    </Tab.Navigator>
  );
};

export default PrimaryNavigator;

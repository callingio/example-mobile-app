import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/MaterialIcons';

import { DialerView } from "../../views/DialerView/DialerView";
import { PhoneRouter } from "../PhoneRouter/PhoneRouter";
import { HomeView, CallHistoryView, SettingsView } from "../../views/HomeView/HomeView";
import { IncomingView } from "../../views/IncomingView/IncomingView";
import {IncallView} from "../../views/IncallView/IncallView";

const Tab = createBottomTabNavigator();

export default function MainRouter() {
  return (
      <Tab.Navigator
          screenOptions={({ route }) =>({
              tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
                  if (route.name === 'Home') {
                      iconName = 'home';
                  } else if (route.name === 'Dialpad') {
                      iconName = 'phone';
                  } else if (route.name === 'CallHistory') {
                      iconName = 'history';
                  } else {
                      iconName = 'settings';
                  }
                  const iconColor = focused ? 'tomato' : 'gray';
                  return <Icon name={iconName} size={size} color={color} />
              },
          })}
          tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray'
          }}
      >
        <Tab.Screen name="Home" component={HomeView} />
        <Tab.Screen name="Dialpad" component={PhoneRouter} />
        <Tab.Screen name="CallHistory" component={CallHistoryView} />
        <Tab.Screen name="Settings" component={SettingsView} />
      </Tab.Navigator>
  );
}

// const ShowWebview = () => {
//   return (
//     <WebView
//       source={{ uri: "https://callingio-homepage-api.vercel.app/" }}
//       style={{ marginTop: 20 }}
//     />
//   );
// };

const styles = StyleSheet.create({});

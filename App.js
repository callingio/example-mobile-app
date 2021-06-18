import * as React from 'react';
import {
  RTCPeerConnection,
  RTCIceCandidate,
  RTCSessionDescription,
  RTCView,
  MediaStream,
  MediaStreamTrack,
  mediaDevices,
  registerGlobals,
} from "react-native-webrtc";
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { Divider, Button, ThemeProvider } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import MainRouter from "./src/routers/MainRouter/MainRouter";
import { CiophoneProvider, SipUaProvider } from "./src/providers";

const Stack = createStackNavigator();


export default function App() {

  registerGlobals();

  return (
      <Provider store={store} >
        <PersistGate loading={null} persistor={persistor} >
          <NavigationContainer>
            <CiophoneProvider>
              <SipUaProvider />
              <ThemeProvider>
                <Stack.Navigator initialRouteName={"MainRouter"}>
                  <Stack.Screen
                    name="MainRouter"
                    component={MainRouter}
                    options={{ headerShown: false }}
                  />
                </Stack.Navigator>
              </ThemeProvider>
            </CiophoneProvider>
          </NavigationContainer>
        </PersistGate>
      </Provider>

  );
}


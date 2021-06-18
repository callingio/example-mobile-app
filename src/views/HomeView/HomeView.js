import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";

const DummyView = (props) => {
    return (
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <Text>{props.name}</Text>
        </View>
    );
};

const HomeView = (props) => {
    return (
        <DummyView name={'HOME'} />
    );
};
const CallHistoryView = (props) => {
    return (
        <DummyView name={'CALL HISTORY'} />
    );
};
const SettingsView = (props) => {
    return (
        <DummyView name={'SETTINGS'} />
    );
};

export { HomeView, CallHistoryView, SettingsView };

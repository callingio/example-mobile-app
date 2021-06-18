import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Dimensions, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const IncomingParty = (props) => {
  return (
      <>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image style={styles.profileImg}
                 source={require('../../../assets/contact2.jpg')} />
        </View>
        <View style={{paddingVertical: 20}}>
          <View style={styles.centerText}>
            <Text style={styles.title}>{props.name}</Text>
          </View>
          <View style={styles.centerText}>
            <Text style={styles.para}>{props.number}</Text>
          </View>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Icon name={'phone-ring-outline'} size={38} color={'#49c39e'} />
        </View>
      </>
  );
};

const IncomingView = (props) => {
    const { call } = props;
    const onReject = () => {
      // reject the call
      call.reject();
    };
    const onAccept = () => {
      console.log('On Accept call');
      // accept the call
      props.onAnswer(call);
    };

    return (

      <View style={styles.container}>
          <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
            <View style={styles.remoteElem}>
                <IncomingParty name={'Stefani Johannason'} number={'sip:steffi@calling.io'} imgId={'contact1.jpg'}/>
            </View>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
            <View style={styles.bottomContainer} >
              <View style={{flexDirection:'row',marginBottom: '20%'}}>
                <View style={{ width: '50%', justifyContent: 'center', alignItems: 'center'}}>
                  <TouchableOpacity
                      style={styles.endButton}
                      onPress={() =>{
                        onReject();
                      }}
                  >
                      <Icon name={"phone-hangup-outline"}
                        size={36}
                        color="#fff"
                      />
                  </TouchableOpacity>
                </View>
                <View style={{ width: '50%', justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity
                        style={styles.acceptButton}
                        onPress={() =>{
                            onAccept();
                        }}
                    >
                        <Icon name={"phone-outline"}
                              size={36}
                              color="#fff"
                        />
                    </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
      </View>
    );
};

const actionButton = {
      marginTop: 16,
      borderWidth:1,
      alignItems:'center',
      justifyContent:'center',
      width:80,
      height:80,
      borderRadius: 40,
};

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      paddingBottom: 60,
      backgroundColor: 'rgb(10,15,20)',
    },
    remoteElem: {
      flex: 0,
      marginTop: 10,
      height: 'auto',
      padding: 20,
      borderRadius: 10,
    },
    bottomContainer: {
      position: 'absolute',
      bottom: 0,
    },
    actButtonContainer: {
      borderWidth: 0,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 0,
      width: '33%',
      height: 80,
    },
    actRow: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 40,
    },
    centerText: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    actText: {
      paddingTop: 6,
      color: 'rgb(180,210,222)',
    },
    endButton: {
      ...actionButton,
      borderColor: '#e01e5a',
      backgroundColor:'#e01e5a',
    },
    acceptButton: {
      ...actionButton,
      borderColor: 'rgb(44,190,150)',
      backgroundColor:'rgb(44,190,150)',
    },
    profileImg: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  title: {
    color: '#fff',
    fontSize: 24,
  },
  para: {
    color: '#bebebe',
    fontSize: 20
  },
  centerText: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export { IncomingView };

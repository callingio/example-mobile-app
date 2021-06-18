import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Dimensions, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IonIcon from "react-native-vector-icons/Ionicons";
import {useCiophoneContext} from "../../providers/SipUaProvider/store";


const RemoteParty = (props) => {

  return (
      <>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image style={styles.profileImg}
                 source={require('../../../assets/contact2.jpg')} />
        </View>
        <View style={{ paddingVertical: 20 }}>
          <View style={styles.centerText}>
            <Text style={styles.title}>{props.name}</Text>
          </View>
          <View style={styles.centerText}>
            <Text style={styles.para}>{props.number}</Text>
          </View>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
            {/*<Icon name={'phone-in-talk'} size={38} color={'#49c39e'} />*/}
        </View>
      </>
  );
};

const IncallView = (props) => {
    const [state, dispatcher] = useCiophoneContext();
    const {
      calls
    } = state;

    const onHangup = () => {
      console.log("On Hangup");
      calls.forEach((call) => {
        call.hangup();
      });
    };

    return (
      <View style={styles.container}>
          <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
            <View style={styles.remoteElem}>
                <RemoteParty name={'Steffani Johanasson'} number={'sip:steffi@calling.io'} imgId={'contact2.jpg'}/>
            </View>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
            <View style={styles.bottomContainer} >
              <View style={styles.actRow}>
                  <View style={styles.actButtonContainer}>
                      <TouchableOpacity>
                          <IonIcon name={'mic-off-outline'} color={'rgba(180,210,222,0.9)'} size={40}/>
                          <View style={styles.centerText}>
                              <Text style={styles.actText}>MUTE</Text>
                          </View>
                      </TouchableOpacity>
                  </View>
                  <View style={styles.actButtonContainer}>
                      <TouchableOpacity>
                          <Icon name={'pause-circle-outline'} color={'rgba(180,210,222,0.9)'} size={40}/>
                          <View style={styles.centerText}>
                              <Text style={styles.actText}>HOLD</Text>
                          </View>
                      </TouchableOpacity>
                  </View>
                  <View style={styles.actButtonContainer}>
                      <TouchableOpacity>
                          <Icon name={'phone-forward-outline'} color={'rgba(180,210,222,0.9)'} size={40}/>
                          <View style={styles.centerText}>
                              <Text style={styles.actText}>TFR</Text>
                          </View>
                      </TouchableOpacity>
                  </View>
              </View>
              <View style={styles.actRow}>
                  <View style={styles.actButtonContainer}>
                     <TouchableOpacity>
                         <Icon name={'record-circle-outline'} color={'rgba(180,210,222,0.9)'} size={40}/>
                         <View style={styles.centerText}>
                             <Text style={styles.actText}>REC</Text>
                         </View>
                     </TouchableOpacity>
                  </View>
                  <View style={styles.actButtonContainer}>
                      <TouchableOpacity>
                          <Icon name={'video-outline'} color={'rgba(180,210,222,0.9)'} size={40}/>
                          <View style={styles.centerText}>
                              <Text style={styles.actText}>VIDEO</Text>
                          </View>
                      </TouchableOpacity>
                  </View>
                  <View style={styles.actButtonContainer}>
                      <TouchableOpacity>
                          <Icon name={'dialpad'} color={'rgba(180,210,222,0.9)'} size={40}/>
                          <View style={styles.centerText}>
                              <Text style={styles.actText}>DIAL</Text>
                          </View>
                      </TouchableOpacity>
                  </View>
              </View>
               <View style={{flexDirection:'row',justifyContent: 'center', alignItems: 'center', marginBottom: 0}}>
                  <TouchableOpacity
                    style={styles.endButton}
                    onPress={() =>{
                      onHangup();
                    }}
                  >
                    <Icon name={"phone-hangup-outline"}
                      size={36}
                      color="#fff"
                    />
                  </TouchableOpacity>
                </View>
            </View>
          </View>
      </View>
    );
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
      borderWidth: 0,
      // borderColor: 'rgb(180,210,222)',
      // backgroundColor: 'rgba(255,255,255,0.05)',
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
      fontSize: 11
    },
    endButton: {
      marginTop: 16,
      borderWidth:1,
      alignItems:'center',
      justifyContent:'center',
      width:72,
      height:72,
      borderColor: '#e01e5a',
      backgroundColor:'#e01e5a',
      borderRadius: 36,
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
});

export { IncallView };

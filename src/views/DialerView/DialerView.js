import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Dimensions, Image } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SipUaProvider, CiophoneProvider } from '../../providers'
import _ from "lodash";

const ContactItem = (props) => {
  const imgUri = 'https://s2.coinmarketcap.com/static/img/coins/64x64/' + props.imgId;
  return (
      <>
        <View style={{width:'20%', alignItems: 'flex-start', justifyContent: 'center'}}>
          <Image style={styles.profileImg}
                 source={require('../../../assets/contact2.jpg')} />
        </View>
        <View style={{width:'75%'}}>
          <View>
            <Text style={styles.title}>{props.name}</Text>
          </View>
          <View>
            <Text style={styles.para}>{props.number}</Text>
          </View>
        </View>
      </>
  );
}

const DialerView = (props) => {
  const [inputText, setInputText] = useState('');
  const nums = [1,2,3,4,5,6,7,8,9,'*',0,'#'];
  const alphs = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQR', 'STU', 'VWX', 'YZ', '', '+', ''];

  const onPressNum = (num) => {
    setInputText(`${inputText}${num}`);
  };
  const onDial = () => {
    console.log("On dial pressed");
    const target = inputText;
    props.onDial(target, false);
  };
  const onBackspace = () => {
    setInputText(inputText.slice(0, inputText.length - 1));
  };

  return (

      <View style={styles.container}>
          <View style={{flex: 1}}>
            {inputText !== '' &&
              <View style={styles.contactElem}>
                <ContactItem name={'Steffani Johanasson'} number={'sip:steffi@calling.io'}/>
              </View>
            }
          </View>
          <View style={styles.dialContainer}>
              <View style={styles.numberContainer}>
                <Text style={styles.numberText}>{inputText}</Text>
                  { inputText !== '' &&
                      <TouchableOpacity
                        style={{position: 'absolute', right: '8%',}}
                        onPress={() => {
                          onBackspace();
                        }}
                      >
                          <Icon name={"backspace"} color={'#777'} size={24}/>
                      </TouchableOpacity>
                  }
              </View>
            {_.times(4, (i) => (
              <View style={styles.digitsRow} key={i}>
                {_.times(3, (j) => (
                    <TouchableOpacity
                        style={styles.digitButton}
                        key={j}
                        onPress={() => {
                          onPressNum(nums[(i*3)+(j)])
                        }}
                    >
                      <Text
                          adjustsFontSizeToFit
                          style={styles.digit}>{nums[(i*3)+(j)]}</Text>
                      <Text style={styles.alph}>{alphs[(i*3)+(j)]}</Text>
                    </TouchableOpacity>
                ))}
              </View>
            ))}

              <View style={{flexDirection:'row',justifyContent: 'space-between', alignItems: 'center', marginBottom: 20}}>
                <TouchableOpacity style={styles.digitButton}>
                  <Icon name={"video-outline"} color={"#fff"} size={24} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.actionButton}
                  onPress={() =>{
                    onDial();
                  }}
                >
                  <Icon name={"phone"}
                    size={24}
                    color="#fff"
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.digitButton}>
                  <Icon name={"dialpad"} color={"#fff"} size={24} />
                </TouchableOpacity>
              </View>
          </View>
     </View>
  );
}

const { width, fontScale } = Dimensions.get('window');
const digitButton = {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 0,
    width: '33%',
    height: 80,
    borderColor: 'rgb(44,190,150)',
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
  contactElem: {
    flex: 0,
    flexDirection: 'row',
    marginTop: 10,
    height: 'auto',
    backgroundColor: 'rgba(252,252,252,0.05)',
    padding: 20,
    borderRadius: 10,
  },
  profileImg: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  title: {
    color: '#fff',
    fontSize: 20,
  },
  para: {
    color: '#bebebe',
    fontSize: 18
  },
  dialContainer: {
    position: 'absolute',
    bottom: 0,
  },
  numberContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  numberText: {
    color: '#f39c12',
    fontSize: 36/fontScale,
    letterSpacing: 3,
  },
  digitsRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  digit: {
    color: "rgb(180,210,222)",
    fontSize: 32 / fontScale
  },
  alph: {
    color: "rgb(180,210,222)",
    fontSize: 12 / fontScale
  },
  digitButton,
  digitSideButton: {
    ...digitButton,
  },
  digitCentreButton: {
    ...digitButton,
  },
  actionButton: {
    marginTop: 16,
    borderWidth:1,
    alignItems:'center',
    justifyContent:'center',
    width:72,
    height:72,
    borderColor: 'rgb(44,190,150)',
    backgroundColor:'rgb(44,190,150)',
    borderRadius: 55,
  },
});

export { DialerView };

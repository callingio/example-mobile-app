import React,{ useEffect, useState } from 'react';
import { SipProvider } from '@callingio/react-native-sip';
import { Dispatcher } from "./store";

const SipUaProvider = (props) => {
    const [config, setConfig] = useState(null);

    useEffect(() => {
      const config = {
        socket: 'wss://xyz.kazoo:7443',
        realm: 'xyz.kazoo.com',
        user: '10001',
        password: 'test123',
      };
      setConfig(config);
    }, []);

    const getSetting = (key, opts, defaultValueFunc) => {
      return defaultValueFunc();
    };

    console.log("Before SipProvider Init");
    return (
      <SipProvider
        autoRegister={true} // true by default, see jssip.UA option register
        autoAnswer={false} // automatically answer incoming calls; false by default
        iceRestart={false} // force ICE session to restart on every WebRTC call; false by default
        sessionTimersExpires={120} // value for Session-Expires header; 120 by default
        maxAllowedCalls={4}
        extraHeaders={
          {
            // // optional sip headers to send
            // register: ['X-Foo: foo', 'X-Bar: bar'],
            // invite: ['X-Foo: foo2', 'X-Bar: bar2'],
          }
        }
        iceServers={
          [
            // // optional
            // { urls: ['stun:stun.l.google.com:19302', 'stun:stun1.l.google.com:19302'] },
            // { urls: 'turn:example.com', username: 'foo', credential: '1234' },
          ]
        }
        debug={false} // whether to output events to console; false by default
        incomingAudioDeviceId={'default'} // default, or a deviceId obtained from navigator.mediaDevices.enumerateDevices()
        outboundAudioDeviceId={'default'} // default, or a deviceId obtained from navigator.mediaDevices.enumerateDevices()
        getSetting={getSetting}
        {...config}
      >
        <Dispatcher />
      </SipProvider>
    );

};

export { SipUaProvider };

import React, { useEffect, useState, useRef } from "react";
import { useCiophoneContext } from "../../providers/SipUaProvider/store";
import { DialerView } from "../../views/DialerView/DialerView";
import { IncallView } from "../../views/IncallView/IncallView";
import { IncomingView } from "../../views/IncomingView/IncomingView";


const PhoneRouter = (props) => {

    const [state, dispatcher] = useCiophoneContext();
    const {
        calls,
        makeCall,
    } = state;
    const handleConnect = async () => {
        // dispatch sip action
        // redux
    };
    const callEventHandler = (event, params) => {
        // call event
        console.log(event);
    };
    const onDial = (target, isVideoCall) => {
        makeCall(target, isVideoCall, {}, callEventHandler);
    };
    const onAnswer = (call) => {
      call.accept(true, false, callEventHandler);
    };

    let view = 'dial';
    let incomingCall = null;
    if (calls.length >0 ) {
        incomingCall = calls.find((call) => call.isRinging() === true);
        if (incomingCall !== undefined) {
            view = 'incoming';
        } else {
            view = 'incall';
        }
    }


    /*
      <DialerView onDial={onDial} />
      */

    return (
      <>
        { view === 'incoming' &&
          <IncomingView call={incomingCall} onAnswer={onAnswer} />
        }
        { view === 'dial' &&
          <DialerView onDial={onDial} />
        }
        { view === 'incall' &&
          <IncallView />
        }
      </>

    );

};

export { PhoneRouter };

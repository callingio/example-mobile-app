import PropTypes from 'prop-types';
import { createReducerContext } from 'react-use';
import { useEffect } from 'react';
import {
  callInfoListPropType,
  sipPropType,
  mediaDeviceListPropType
} from '@callingio/react-native-sip';
import { cloneDeep } from 'lodash';
import { EventEmitter } from 'events';
const eventEmitter = new EventEmitter();

const Dispatcher = (props, context) => {
  const {
    sip,
    calls,
    isRegistered,
    isLineConnected,
    hasError,
    getErrorMessage,
    registerSip,
    unregisterSip,
    makeCall,
    setSpeakerVolume,
    getSpeakerVolume,
    setMicVolume,
    getMicVolume,
    setRingVolume,
    getRingVolume,
    changeAudioInput,
    changeAudioOutput,
    changeVideoInput,
    changeVideoResolution,
    getVideoResolution,
    mediaDevices,
    getPreferredDevice
  } = context;

  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useCiophoneContext();

  useEffect(() => {
    // console.log('ciophone dispatcher updating context thru reducer');
    dispatch({
      type: 'sip:update',
      payload: {
        sip,
        calls,
        isRegistered,
        isLineConnected,
        hasError,
        getErrorMessage,
        registerSip,
        unregisterSip,
        makeCall,
        setSpeakerVolume,
        getSpeakerVolume,
        setMicVolume,
        getMicVolume,
        setRingVolume,
        getRingVolume,
        changeAudioInput,
        changeAudioOutput,
        changeVideoInput,
        changeVideoResolution,
        getVideoResolution,
        mediaDevices,
        getPreferredDevice
      }
    });
  }, [
    sip,
    calls,
    isRegistered,
    isLineConnected,
    hasError,
    getErrorMessage,
    registerSip,
    unregisterSip,
    makeCall,
    setSpeakerVolume,
    getSpeakerVolume,
    setMicVolume,
    getMicVolume,
    setRingVolume,
    getRingVolume,
    changeAudioInput,
    changeAudioOutput,
    changeVideoInput,
    changeVideoResolution,
    getVideoResolution,
    mediaDevices,
    getPreferredDevice
  ]);

  // console.log('Dispatch sipstatus:', sip.status);
  return null;
};

Dispatcher.contextTypes = {
  // device: PropTypes.any,
  sip: sipPropType,
  calls: callInfoListPropType,
  isRegistered: PropTypes.func,
  isLineConnected: PropTypes.func,
  hasError: PropTypes.func,
  getErrorMessage: PropTypes.func,
  registerSip: PropTypes.func,
  unregisterSip: PropTypes.func,
  makeCall: PropTypes.func,
  setSpeakerVolume: PropTypes.func,
  getSpeakerVolume: PropTypes.func,
  setMicVolume: PropTypes.func,
  getMicVolume: PropTypes.func,
  setRingVolume: PropTypes.func,
  getRingVolume: PropTypes.func,
  changeAudioInput: PropTypes.func,
  changeAudioOutput: PropTypes.func,
  changeVideoInput: PropTypes.func,
  changeVideoResolution: PropTypes.func,
  getVideoResolution: PropTypes.func,
  mediaDevices: mediaDeviceListPropType,
  getPreferredDevice: PropTypes.func
};

export const initialState = {
  // entire sip context ()
  mainTab: 'dialer',
  device: null,
  channels: [],
  parked_calls: [],
  last_register_key: null,
  eventBus: eventEmitter,
};

export const reducer = (state = initialState, action) => {
  state = { ...initialState, ...state };
  switch (action.type) {
    case 'sip:update':
      // device, last_register_key
      return { ...state, ...action.payload };

    case 'sip:clear':
      return cloneDeep(initialState);

    default:
      throw new Error();
  }
};

const [useCiophoneContext, CiophoneProvider] = createReducerContext(
  reducer,
  initialState
);

export { useCiophoneContext, CiophoneProvider, Dispatcher };

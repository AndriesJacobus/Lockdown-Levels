import * as React from 'react';
import { Text } from 'react-native';

export function MonoText(props) {
  return <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />;
}

export function Alegreya(props) {
  return <Text {...props} style={[props.style, { fontFamily: 'alegreya-reg' }]} />;
}

export function BalooM(props) {
  return <Text {...props} style={[props.style, { fontFamily: 'baloo-medium' }]} />;
}

export function BalooR(props) {
  return <Text {...props} style={[props.style, { fontFamily: 'baloo-reg' }]} />;
}

export function BalooSB(props) {
  return <Text {...props} style={[props.style, { fontFamily: 'baloo-sb' }]} />;
}

export function Cinzel(props) {
  return <Text {...props} style={[props.style, { fontFamily: 'cinzel-reg' }]} />;
}

export function CormorantB(props) {
  return <Text {...props} style={[props.style, { fontFamily: 'cormorant-bol' }]} />;
}

export function CormorantL(props) {
  return <Text {...props} style={[props.style, { fontFamily: 'cormorant-lig' }]} />;
}

export function CormorantR(props) {
  return <Text {...props} style={[props.style, { fontFamily: 'cormorant-reg' }]} />;
}

export function CormorantMI(props) {
  return <Text {...props} style={[props.style, { fontFamily: 'cormorant-medi' }]} />;
}

export function AlegreyaI(props) {
  return <Text {...props} style={[props.style, { fontFamily: 'alegreya-ita' }]} />;
}

export function AlegreyaMI(props) {
  return <Text {...props} style={[props.style, { fontFamily: 'alegreya-medi' }]} />;
}

export function CreteRoundR(props) {
  return <Text {...props} style={[props.style, {fontFamily:'creteRoundR'}]}></Text>;
}

export function CreteRoundI(props){
  return <Text {...props} style={[props.style, {fontFamily:'creteRoundI'}]}></Text>;
}
import { Ionicons, Entypo } from '@expo/vector-icons';
import * as React from 'react';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  if (props.itype == "ion") {
    return (
      <Ionicons
        name={props.name}
        size={26}
        style={{ marginBottom: 5, marginTop: 10, }}
        color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }
  if (props.itype == "en") {
    return (
      <Entypo
        name={props.name}
        size={22}
        style={{ marginBottom: 5, marginTop: 10, }}
        color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }
  
}

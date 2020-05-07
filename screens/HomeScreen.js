import React, { Component } from 'react';
import * as WebBrowser from "expo-web-browser";
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { MonoText, BalooM, BalooR, } from "../components/StyledText";
import HomeLevelView from "../components/HomeLevelView"

export class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HomeLevelView levels={5} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default HomeScreen;
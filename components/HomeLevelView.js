import PropTypes from "prop-types";
import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { Provider } from "react-native-paper";
import { MonoText, BalooM, BalooR } from "../components/StyledText";

export class HomeLevelView extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      //
    };
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <Provider style={{ paddingTop: 15 }}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer} >

          <View style={styles.getStartedContainer}>

            <Text style={styles.getStartedText}>
              Text styles we will be using:
            </Text>

            <Text style={styles.getStartedText}>For code:</Text>
            <MonoText>screens/HomeScreen.js</MonoText>

            <Text style={styles.getStartedText}>For headings:</Text>
            <BalooR>This: screens/HomeScreen.js</BalooR>
            <BalooM>This: screens/HomeScreen.js</BalooM>

          </View>

        </ScrollView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    paddingTop: 15,
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center",
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center",
    marginTop: 15,
  },
  bannerText: {
    fontSize: 24,
    color: "#083D77",
    textAlign: "left",
    textAlign: "right",
    justifyContent: "center",
    alignItems: "center",
  },
  rowStyle: {
    flexDirection: "row",
    textAlign: "right",
    width: "80%",
  },
  labelText: {
    paddingTop: 32,
    paddingRight: 10,
    fontSize: 20,
    color: "#083D77",
    position: "relative",
    width: "65%",
  },
  dropdownStyle: {
    width: "35%",
    paddingBottom: 15,
    position: "relative",
  },
  horizontalLine: {
    borderBottomColor: "lightblue",
    borderBottomWidth: 2,
    width: "80%",
  },
  tempText: {
    paddingTop: 95,
    paddingRight: 15,
    fontSize: 20,
    color: "#083D77",
    position: "relative",
    width: "50%",
  },
  tempContainer: {
    height: "50%",
    paddingLeft: 15,
    position: "relative",
    width: "50%",
  },
});

export default HomeLevelView;

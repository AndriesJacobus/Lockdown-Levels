import PropTypes from "prop-types";
import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text, Dimensions } from "react-native";
import { Provider } from "react-native-paper";
import { MonoText, BalooM, BalooR } from "../components/StyledText";
import Colors from "../constants/Colors";

const width = Dimensions.get('window').width;

export class HomeLevelView extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      levelDeviders: [],
      showLevels: false,
    };
  }

  componentDidMount() {
    this._isMounted = true;

    this.setDeviders();
  }

  setDeviders() {
    let localDeviders = [];

    for (let i = this.props.levels; i > 0; i--) {
      localDeviders.push({
        name: "Level " + i,
      });
    }

    this.setState({
      levelDeviders: localDeviders,
      showLevels: true,
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  addLevel(name) {
    return <View style={styles.rowStyle}>
      <View
        style={{
          height: 1,
          width: 50,
          borderRadius: 1,
          borderWidth: 1,
          borderColor: Colors.tabIconSelected,
          marginLeft: -5,
          marginTop: 10,
          marginRight: 5,
        }} >
      </View>

      <BalooR>{name}</BalooR>
    </View>
  }

  render() {
    return (
      <Provider>
        
        <View style={styles.rowStyle}>
          <View style={styles.levelStyle}></View>

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
        </View>

        <ScrollView
          style = {{
            position: "absolute",
            width: "22%",
            marginTop: '5%',
            height: '90%',
          }}
          >
          {
            (this.state.showLevels == true) ? (
              
              this.state.levelDeviders.map((element, index) => {

                return <View
                  key={index + "v1"}
                  style={{
                    marginLeft: 10,
                    paddingBottom: 15,
                    marginTop: (width / this.props.levels) - (width * 0.02),
                  }}>

                  <BalooR key={index + "t"} style={{
                    marginLeft: 30,
                  }}>{element.name}</BalooR>

                  <View
                    key={index + "v2"}
                    style={{
                      height: 1,
                      width: '100%',
                      borderRadius: 1,
                      borderWidth: 1,
                      borderColor: Colors.tabIconSelected,
                      marginLeft: -5,
                      marginRight: 5,
                    }} >
                  </View>
                </View>
              })

            ) :
              null
          }
        </ScrollView>
      </Provider>
    );
  }
}

HomeLevelView.propTypes = {
  levels: PropTypes.number,
};

const styles = StyleSheet.create({
  rowStyle: {
    flexDirection: "row",
    paddingTop: 15,
    paddingBottom: 15,
    flex: 1,
  },

  levelStyle: {
    height: "100%",
    width: "10%",
    borderRadius: 1,
    borderStyle: "dashed",
    borderWidth: 4,
    borderColor: Colors.tabIconSelected,
    marginLeft: -10,
  },

  container: {
    backgroundColor: "#fff",
    width: "80%",
    marginLeft: "8%",
  },

  contentContainer: {
    paddingTop: 15,
  },
  getStartedContainer: {
    position: "relative",
    flex: 1,
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

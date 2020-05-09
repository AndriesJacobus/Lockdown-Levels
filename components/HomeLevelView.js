import PropTypes from "prop-types";
import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Dimensions, Text, Image } from "react-native";
import { Provider } from "react-native-paper";
import { MonoText, BalooM, BalooR } from "../components/StyledText";
import Colors from "../constants/Colors";

import Svg, {
  Circle,
  Ellipse,
  G,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';

import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

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
    return (
      <View style={styles.rowStyle}>
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
          }}
        ></View>

        <BalooR>{name}</BalooR>
      </View>
    );
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

              <View style={[styles.item, styles.itemIn]}>
                <View style={[styles.balloon, { backgroundColor: "#A9BCD0", borderWidth: 1, borderColor: "#A9BCD0", }]}>
                  
                  <Text style={{ paddingTop: 5, color: "white", textAlign: "center", }}>
                    Hey! How are you?
                  </Text>

                  <View
                    style={[styles.arrowContainer, styles.arrowLeftContainer]} >

                    <Svg
                      style={styles.arrowLeft}
                      width={moderateScale(16.5, 0.6)}
                      height={moderateScale((height * 0.6), 0.6)}
                      viewBox="34.5 0 10 100"
                      enable-background="new 34.5 0 10 100"
                      >

                      {/* <Path
                        d="M 38.5, 17.5 c 0, 8.75, 1, 13.5-6, 17.5 C 51.5, 35, 52.5, 17.5, 38.5, 17.5 z"
                        fill="#A9BCD0"
                        x="0"
                        y="0"
                      /> */}

                      {/* <Path
                        d="M 38.5, 17.5 c 0, 8.75, 1, 13.5-6, 17.5"
                        stroke="blue"
                        stroke-width="5"
                        fill="none"
                      /> */}

                      <Path
                        d="M 36, -40 c 10 -20, 5 -10, 70 -400 L 45 -40 l -7, 0"
                        stroke="#A9BCD0"
                        strokeWidth="1"
                        fill="#A9BCD0"
                      />

                      <Path
                        d="M 36, -40 c 10 20, 5 -10, 70 400 L 45 -40 l -7, -1"
                        stroke="#A9BCD0"
                        strokeWidth="1"
                        fill="#A9BCD0"
                      />
                    </Svg>
                  </View>
                </View>
              </View>
              
            </View>
          </ScrollView>
        </View>

        <ScrollView
          style={{
            position: "absolute",
            width: "22%",
            marginTop: "5%",
            height: "90%",
          }}
        >
          {this.state.showLevels == true
            ? this.state.levelDeviders.map((element, index) => {
                return (
                  <View
                    key={index + "v1"}
                    style={{
                      marginLeft: 10,
                      paddingBottom: 15,
                      marginTop: width / this.props.levels - width * 0.02,
                    }}
                  >
                    <BalooR
                      key={index + "t"}
                      style={{
                        fontSize: 14,
                        marginLeft: 30,
                      }}
                    >
                      {element.name}
                    </BalooR>

                    <View
                      key={index + "v2"}
                      style={{
                        height: 1,
                        width: "100%",
                        borderRadius: 1,
                        borderWidth: 1,
                        borderColor: Colors.tabIconSelected,
                        marginLeft: -5,
                        marginRight: 5,
                      }}
                    ></View>
                  </View>
                );
              })
            : null}
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

  // Bubble

  item: {
    marginVertical: moderateScale(7, 2),
    flexDirection: "row",
  },
  itemIn: {
    // marginLeft: 20,
  },
  itemOut: {
    alignSelf: "flex-end",
    // marginRight: 20,
  },
  balloon: {
    maxWidth: moderateScale((width * 0.7) - 20, 2),
    paddingHorizontal: moderateScale(10, 2),
    paddingTop: moderateScale(5, 2),
    paddingBottom: moderateScale(7, 2),
    borderRadius: 10,
    width: width * 0.7 - 20,
    height: (height * 0.7),
    textAlign: "center",
  },
  arrowContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    flex: 0,
  },
  arrowLeftContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },

  arrowRightContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },

  arrowLeft: {
    left: moderateScale(-16, 0.6),
  },

  arrowRight: {
    right: moderateScale(-6, 0.5),
  },

  // Other

  contentContainer: {
    paddingTop: 15,
  },
  getStartedContainer: {
    position: "relative",
    flex: 1,
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
});

export default HomeLevelView;

import PropTypes from "prop-types";
import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Dimensions, Text, TouchableOpacity, Platform } from "react-native";
import { Provider } from "react-native-paper";
import { MonoText, BalooM, BalooR } from "../components/StyledText";
import Colors from "../constants/Colors";
import Svg, { Path, } from 'react-native-svg';
import { moderateScale } from 'react-native-size-matters';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export class HomeLevelView extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      levelDeviders: [],
      showLevels: false,
      currentLevel: this.props.defaultLevel,
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
        level: i,
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

  render() {
    return (
      <Provider>
        <View style={styles.rowStyle}>
          <View style={styles.levelStyle} />

          <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer} >

            <View style={styles.getStartedContainer}>
              <View style={styles.item}>
                <View style={styles.balloon}>
                  
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
                      enable-background="new 34.5 0 10 100" >

                      <Path
                        d={"M 36, 45 c 10 -20, 5 -10, 70 -400 L 45 45 l -7, 0"}
                        fill="#A9BCD0"
                      />

                      <Path
                        d={"M 36, 45 c 10 20, 5 -10, 70 400 L 45 45 l -7, -1"}
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
          style={styles.levelMarkerView} >

          {this.state.showLevels == true ?
            this.state.levelDeviders.map((element, index) => {
              return (
                <TouchableOpacity
                  key={index + "v1"}
                  onPress={() => {
                    this.setState({
                      currentLevel: element.level,
                    });
                  }}
                  style={{
                    marginLeft: 10,
                    paddingBottom: 15,
                    marginBottom: (( (height - 100) * 0.5) / this.props.levels),
                    
                  }} >

                  {
                    element.level == this.state.currentLevel &&
                    <BalooM
                      key={index + "t"}
                      style={[styles.levelMarkerText, Platform.OS === "ios" ? styles.levelMarkerSelectedIos : styles.levelMarkerSelected]} >

                      {element.name}
                    </BalooM>
                  }
                  {
                    element.level != this.state.currentLevel &&
                    <BalooR
                      key={index + "t"}
                      style={styles.levelMarkerText} >
  
                      {element.name}
                    </BalooR>
                  }
                  
                  <View
                    key={index + "v2"}
                    style={styles.levelMarkers}
                  ></View>
                </TouchableOpacity>

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
    borderWidth: 3,
    borderColor: Colors.tabIconSelected,
    marginLeft: -10,
  },

  container: {
    backgroundColor: "#fff",
    width: "90%",
    marginLeft: "4%",
  },
  
  levelMarkerView: {
    position: "absolute",
    width: "20%",
    marginTop: "15%",
    height: "80%",
  },
  
  levelMarkers: {
    height: 1,
    width: 58,
    borderRadius: 1,
    borderWidth: 1,
    borderColor: Colors.tabIconSelected,
    marginLeft: -5,
    marginRight: 5,
  },

  levelMarkerText: {
    fontSize: 14,
    marginLeft: 5,
    backgroundColor: "white",
  },

  levelMarkerSelected: {
    color: Colors.tabIconSelected,
    fontWeight: "bold",
  },

  levelMarkerSelectedIos: {
    color: Colors.tabIconSelected,
    fontWeight: "bold",
    fontSize: 16,
  },

  // Bubble
  item: {
    marginVertical: moderateScale(7, 2),
    flexDirection: "row",
  },
  itemOut: {
    alignSelf: "flex-end",
  },
  balloon: {
    width: width * 0.75 - 20,
    height: (height * 0.7),

    maxWidth: moderateScale((width * 0.7) - 20, 2),
    paddingHorizontal: moderateScale(10, 2),
    paddingTop: moderateScale(5, 2),
    paddingBottom: moderateScale(7, 2),

    borderRadius: 10,
    textAlign: "center",

    backgroundColor: "#A9BCD0", borderWidth: 1, borderColor: "#A9BCD0",
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

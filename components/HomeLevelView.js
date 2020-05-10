import PropTypes from "prop-types";
import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Dimensions, Text, TouchableOpacity, Platform, Animated } from "react-native";
import { Provider } from "react-native-paper";
import { MonoText, BalooM, BalooR } from "../components/StyledText";
import Colors from "../constants/Colors";
import Svg, { Path, } from 'react-native-svg';
import { moderateScale } from 'react-native-size-matters';
import LottieView from 'lottie-react-native';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export class HomeLevelView extends Component {
  _isMounted = false;
  animVal = new Animated.Value(0)

  constructor(props) {
    super(props);

    this.state = {
      levelDeviders: [],
      showLevels: false,
      currentLevel: this.props.defaultLevel,
      offset: {},
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

          <View
            style={{
              paddingLeft: "17%",
            }}>

            <Svg
              style={styles.arrowLeft}
              width={20}
              height={height}
              viewBox="34.5 0 10 100"
              enable-background="new 34.5 0 10 100" >

              {
                Platform.OS === "ios" ? [
                  <Path
                    key={"p1"}
                    d={"M 36, -100 c 10 -20, 5 -10, 70 -400 L 45 -100 l -7, 0"}
                    fill={Colors.customGrey}
                  />,
                  <Path
                    key={"p12"}
                    d={"M 36, -100 c 10 20, 5 -10, 70 400 L 45 -100 l -7, -1"}
                    fill={Colors.customGrey}
                  />
                ] : [
                  <Path
                    key={"p1"}
                    d={"M 36, -60 c 10 -20, 5 -10, 70 -400 L 45 -60 l -7, 0"}
                    fill={Colors.customGrey}
                  />,
                  <Path
                    key={"p2"}
                    d={"M 36, -60 c 10 20, 5 -10, 70 400 L 45 -60 l -7, -1"}
                    fill={Colors.customGrey}
                  />
                ]
              }
              
            </Svg>
          </View>

          <ScrollView
            style={styles.container}
            bounces={false}
            pagingEnabled
            contentOffset={this.state.offset}
            scrollEventThrottle={16}
            contentContainerStyle={styles.contentContainer} >

            <View style={styles.getStartedContainer}>
              <View style={styles.item}>
                <View style={styles.balloon}>
                  
                  <View style={styles.levelInfoHeader}>
                    <BalooM style={{color: "orange", fontSize: 24,}}>
                      Level {this.state.currentLevel}
                    </BalooM>

                    <Text style={{color: "black", fontSize: 16,}}>
                      <Text style={{color: "orange", fontSize: 16,}}>Moderate </Text>
                      to high
                      <Text style={{color: "orange", fontSize: 16,}}> Spread </Text>
                      with
                      <Text style={{color: "orange", fontSize: 16,}}> Moderate Readiness </Text>
                    </Text>
                  </View>

                  <View style={styles.levelInfoHeader}>

                    <View style={{ flex: 1, flexDirection: 'row', marginRight: 20, width: "75%", textAlign: "center",}}>

                      <BalooM style={{
                          color: Colors.tabIconSelected,
                          fontSize: 20,
                          alignSelf: "center",
                          textAlign: "center",
                          marginLeft: 5,
                          textDecorationLine: "underline",
                        }}>

                        Restrictions:
                      </BalooM>

                      <View
                          style={{
                              width: "30%",
                              maxHeight: 80,
                              marginLeft: "15%",
                          }} >
                          
                          <LottieView
                            autoPlay
                            loop={false}
                            speed={0.25}
                            source={require(`../assets/animations/stay-home.json`)}
                            style={{
                              height: 75,
                              flexDirection: "row",
                            }}
                          />
                      </View>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', marginRight: 20, width: "75%",}}>
                      <View
                          style={{
                              width: "30%",
                              maxHeight: 80,
                              alignSelf: "center",
                              left: -5,
                          }} >
                          
                          <LottieView
                            autoPlay
                            loop={false}
                            speed={0.25}
                            source={require(`../assets/animations/access-denied.json`)}
                            style={{
                              height: 50,
                              flexDirection: "row",
                            }}
                          />
                      </View>

                      <Text style={{color: "black", fontSize: 16, backgroundColor: "rgba(255,255,255, 0.5)",}}>
                        aflnafnaofbnaofbaodnaodnaoidbaobaoifboibaw
                        aflnafnaofbnaofbaodnaodnaoidbaobaoifboibaw
                      </Text>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', marginRight: 20, width: "75%", marginTop: 15,}}>
                      <View
                          style={{
                              width: "30%",
                              maxHeight: 80,
                              alignSelf: "center",
                              left: -5,
                          }} >
                          
                          <LottieView
                            autoPlay
                            loop={false}
                            speed={0.25}
                            source={require(`../assets/animations/access-denied.json`)}
                            style={{
                              height: 50,
                              flexDirection: "row",
                            }}
                          />
                      </View>

                      <Text style={{color: "black", fontSize: 16, backgroundColor: "rgba(255,255,255, 0.5)",}}>
                        aflnafnaofbnaofbaodnaodnaoidbaobaoifboibaw
                        aflnafnaofbnaofbaodnaodnaoidbaobaoifboibaw
                      </Text>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', marginRight: 20, width: "75%", marginTop: 15,}}>
                      <View
                          style={{
                              width: "30%",
                              maxHeight: 80,
                              alignSelf: "center",
                              left: -5,
                          }} >
                          
                          <LottieView
                            autoPlay
                            loop={false}
                            speed={0.25}
                            source={require(`../assets/animations/access-denied.json`)}
                            style={{
                              height: 50,
                              flexDirection: "row",
                            }}
                          />
                      </View>

                      <Text style={{color: "black", fontSize: 16, backgroundColor: "rgba(255,255,255, 0.5)",}}>
                        aflnafnaofbnaofbaodnaodnaoidbaobaoifboibaw
                        aflnafnaofbnaofbaodnaodnaoidbaobaoifboibaw
                      </Text>
                    </View>
                  </View>

                  <View style={styles.levelInfoHeader}>

                    <View style={{ flex: 1, flexDirection: 'row', marginRight: 20, width: "75%", textAlign: "center",}}>

                      <BalooM style={{
                          color: Colors.tabIconSelected,
                          fontSize: 20,
                          alignSelf: "center",
                          textAlign: "center",
                          marginLeft: 5,
                          textDecorationLine: "underline",
                        }}>

                        Permissions:
                      </BalooM>

                      <View
                          style={{
                              width: "30%",
                              maxHeight: 80,
                              marginLeft: "13%",
                          }} >
                          
                          <LottieView
                            autoPlay
                            loop={false}
                            speed={0.4}
                            source={require(`../assets/animations/open.json`)}
                            style={{
                              height: 75,
                              flexDirection: "row",
                            }}
                          />
                      </View>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', marginRight: 20, width: "75%",}}>
                      <View
                          style={{
                              width: "30%",
                              maxHeight: 80,
                              alignSelf: "center",
                              left: -10,
                          }} >
                          
                          <LottieView
                            autoPlay
                            loop={false}
                            speed={0.5}
                            source={require(`../assets/animations/verified.json`)}
                            style={{
                              height: 60,
                              flexDirection: "row",
                            }}
                          />
                      </View>

                      <Text style={{color: "black", fontSize: 16, backgroundColor: "rgba(255,255,255, 0.5)",}}>
                        aflnafnaofbnaofbaodnaodnaoidbaobaoifboibaw
                        aflnafnaofbnaofbaodnaodnaoidbaobaoifboibaw
                      </Text>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', marginRight: 20, width: "75%", marginTop: 15,}}>
                      <View
                          style={{
                              width: "30%",
                              maxHeight: 80,
                              alignSelf: "center",
                              left: -10,
                          }} >
                          
                          <LottieView
                            autoPlay
                            loop={false}
                            speed={0.5}
                            source={require(`../assets/animations/verified.json`)}
                            style={{
                              height: 60,
                              flexDirection: "row",
                            }}
                          />
                      </View>

                      <Text style={{color: "black", fontSize: 16, backgroundColor: "rgba(255,255,255, 0.5)",}}>
                        aflnafnaofbnaofbaodnaodnaoidbaobaoifboibaw
                        aflnafnaofbnaofbaodnaodnaoidbaobaoifboibaw
                      </Text>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', marginRight: 20, width: "75%", marginTop: 15,}}>
                      <View
                          style={{
                              width: "30%",
                              maxHeight: 80,
                              alignSelf: "center",
                              left: -10,
                          }} >
                          
                          <LottieView
                            autoPlay
                            loop={false}
                            speed={0.5}
                            source={require(`../assets/animations/verified.json`)}
                            style={{
                              height: 60,
                              flexDirection: "row",
                            }}
                          />
                      </View>

                      <Text style={{color: "black", fontSize: 16, backgroundColor: "rgba(255,255,255, 0.5)",}}>
                        aflnafnaofbnaofbaodnaodnaoidbaobaoifboibaw
                        aflnafnaofbnaofbaodnaodnaoidbaobaoifboibaw
                      </Text>
                    </View>
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
                  />
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

  levelInfoHeader: {
    marginTop: 12,
    marginLeft: 5,
    padding: 10,
    // height: "96%",
    backgroundColor: "white",
    // backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 20,
    borderColor: Colors.customGrey,
    borderWidth: 1,
  },

  // Level Marker
  
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
    // marginVertical: moderateScale(7, 2),
    flexDirection: "row",
  },
  itemOut: {
    alignSelf: "flex-end",
  },
  balloon: {
    width: width * 0.75 - 20,
    // height: (height * 0.7),

    maxWidth: moderateScale((width * 0.7) - 20, 2),
    paddingHorizontal: moderateScale(10, 2),
    paddingTop: moderateScale(5, 2),
    paddingBottom: moderateScale(7, 2),

    borderRadius: 20,
    textAlign: "center",

    backgroundColor: Colors.customGrey,
    borderWidth: 1,
    borderColor: Colors.customGrey,

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
    left: -20,
  },

  // Other

  container: {
    backgroundColor: "#fff",
    width: "90%",
    // marginLeft: "4%",

    left: -20,
  },

  contentContainer: {
    paddingTop: 15,
  },
  getStartedContainer: {
    position: "relative",
    flex: 1,
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center",
    // lineHeight: 24,
    // marginRight: "20%",
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center",
    marginTop: 15,
    // lineHeight: 24,
  },
});

export default HomeLevelView;

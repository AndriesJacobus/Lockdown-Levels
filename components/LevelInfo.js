import PropTypes from "prop-types";
import React, { Component } from "react";
import { StyleSheet, View, Dimensions, Text, } from "react-native";
import { Provider } from "react-native-paper";
import { MonoText, BalooM, BalooR } from "../components/StyledText";
import Colors from "../constants/Colors";
import { moderateScale } from "react-native-size-matters";
import LottieView from "lottie-react-native";
import Svg, { Path, G} from 'react-native-svg';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export class LevelInfo extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      showLevels: false,
    };
  }

  componentDidMount() {
    this._isMounted = true;

    this.setState({
      showLevels: true,
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <Provider>
        <View style={styles.levelInfoHeader}>
          <BalooM style={[styles.levelInfo, {color: this.props.levelColor}]}>
            Level {this.props.level}
          </BalooM>

          <Text style={{color: "black", fontSize: 16,}}>
            <Text style={{color: this.props.levelColor, fontSize: 16,}}>{this.props.spread} </Text>
            virus
            <Text style={{color: this.props.levelColor, fontSize: 16,}}> Spread </Text>
            with
            <Text style={{color: this.props.levelColor, fontSize: 16,}}> {this.props.readiness} </Text>
            health system
            <Text style={{color: this.props.levelColor, fontSize: 16,}}> Readiness </Text>
          </Text>
        </View>

        <View style={styles.levelInfoHeader}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginRight: 20,
              width: "75%",
              textAlign: "center",
            }} >

            <BalooM
              style={{
                color: Colors.tabIconSelected,
                fontSize: 20,
                alignSelf: "center",
                textAlign: "center",
                marginLeft: 5,
                textDecorationLine: "underline",
              }} >

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

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginRight: 20,
              width: "75%",
            }} >

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

            <Text
              style={{
                color: "black",
                fontSize: 16,
                backgroundColor: "rgba(255,255,255, 0.5)",
              }} >

              aflnafnaofbnaofbaodnaodnaoidbaobaoifboibaw
              aflnafnaofbnaofbaodnaodnaoidbaobaoifboibaw
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginRight: 20,
              width: "75%",
              marginTop: 15,
            }} >

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

            <Text
              style={{
                color: "black",
                fontSize: 16,
                backgroundColor: "rgba(255,255,255, 0.5)",
              }} >

              aflnafnaofbnaofbaodnaodnaoidbaobaoifboibaw
              aflnafnaofbnaofbaodnaodnaoidbaobaoifboibaw
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginRight: 20,
              width: "75%",
              marginTop: 15,
            }} >

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

            <Text
              style={{
                color: "black",
                fontSize: 16,
                backgroundColor: "rgba(255,255,255, 0.5)",
              }} >

              aflnafnaofbnaofbaodnaodnaoidbaobaoifboibaw
              aflnafnaofbnaofbaodnaodnaoidbaobaoifboibaw
            </Text>
          </View>
        </View>

        <View style={styles.levelInfoHeader}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginRight: 20,
              width: "75%",
              textAlign: "center",
            }} >
              
            <BalooM
              style={{
                color: Colors.tabIconSelected,
                fontSize: 20,
                alignSelf: "center",
                textAlign: "center",
                marginLeft: 5,
                textDecorationLine: "underline",
              }} >
                
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

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginRight: 20,
              width: "75%",
            }} >
              
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

            <Text
              style={{
                color: "black",
                fontSize: 16,
                backgroundColor: "rgba(255,255,255, 0.5)",
              }} >
                
              aflnafnaofbnaofbaodnaodnaoidbaobaoifboibaw
              aflnafnaofbnaofbaodnaodnaoidbaobaoifboibaw
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginRight: 20,
              width: "75%",
              marginTop: 15,
            }} >
              
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

            <Text
              style={{
                color: "black",
                fontSize: 16,
                backgroundColor: "rgba(255,255,255, 0.5)",
              }} >
                
              aflnafnaofbnaofbaodnaodnaoidbaobaoifboibaw
              aflnafnaofbnaofbaodnaodnaoidbaobaoifboibaw
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginRight: 20,
              width: "75%",
              marginTop: 15,
            }} >
              
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

            <Text
              style={{
                color: "black",
                fontSize: 16,
                backgroundColor: "rgba(255,255,255, 0.5)",
              }} >
                
              aflnafnaofbnaofbaodnaodnaoidbaobaoifboibaw
              aflnafnaofbnaofbaodnaodnaoidbaobaoifboibaw
            </Text>
          </View>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({

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

  levelInfo: {
    fontSize: 24
  },
  
});

export default LevelInfo;

import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabNavigator from './navigation/BottomTabNavigator';
import useLinking from './navigation/useLinking';

const Stack = createStackNavigator();

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
          'alegreya-reg': require('./assets/fonts/Alegreya-Regular.ttf'),
          'alegreya-medi': require('./assets/fonts/Alegreya-MediumItalic.ttf'),
          'alegreya-ita': require('./assets/fonts/Alegreya-Italic.ttf'),
          'baloo-medium': require('./assets/fonts/BalooPaaji2-Medium.ttf'),
          'baloo-reg': require('./assets/fonts/BalooPaaji2-Regular.ttf'),
          'baloo-sb': require('./assets/fonts/BalooPaaji2-SemiBold.ttf'),
          'cinzel-reg': require('./assets/fonts/Cinzel-Regular.ttf'),
          'cormorant-bol': require('./assets/fonts/CormorantGaramond-Bold.ttf'),
          'cormorant-reg': require('./assets/fonts/CormorantGaramond-Regular.ttf'),
          'cormorant-lig': require('./assets/fonts/CormorantGaramond-Light.ttf'),
          'cormorant-medi': require('./assets/fonts/CormorantGaramond-MediumItalic.ttf'),
          'creteRoundR': require('./assets/fonts/CreteRound-Regular.ttf'),
          'creteRoundI': require('./assets/fonts/CreteRound-Italic.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
          <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

import {
    StatusBar as StatusBarRN,
    ScrollView,
    SafeAreaView,
  } from "react-native";
  import { enableScreens } from "react-native-screens";
  import * as ScreenOrientation from 'expo-screen-orientation';
  
  export function BasicLayout(props) {
    const { children } = props;

    enableScreens();
    ScreenOrientation.unlockAsync();
  
    return (
      <>
        <StatusBarRN backgroundColor="#5ac343" />
        <SafeAreaView />
        <ScrollView>{children}</ScrollView>
      </>
    );
  }
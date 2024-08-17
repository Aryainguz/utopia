import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFonts } from "expo-font";
import { router, Slot, SplashScreen } from "expo-router";
import React, { useEffect, useState } from "react";
import 'react-native-gesture-handler';

const RootLayout = () => {
  const [user, setUser] = useState(null);
  const [isReady, setIsReady] = useState(false);

  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf")
  });

  useEffect(() => {
    const prepare = async () => {
      try {
        SplashScreen.preventAutoHideAsync();

        if (error) throw error;

        if (fontsLoaded) {
          const storedUser = await AsyncStorage.getItem("@user_details");
          setUser(storedUser);

          setIsReady(true); // Indicate that the app is ready to proceed
        }
      } catch (e) {
        console.warn(e);
      } finally {
        SplashScreen.hideAsync();
      }
    };

    prepare();
  }, [fontsLoaded, error]);

  useEffect(() => {
    if (isReady && user) {
      router.replace("/timeline");
    }
  }, [isReady, user]);

  if (!isReady) return null; // Wait until the app is ready

  return <Slot />;
};

export default RootLayout;

import { Feather } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, Tabs, useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-1">
      <Feather name={icon} size={20} color={"#fff"} />
      <Text
        className={`${
          focused
            ? "font-psemibold text-sm text-white"
            : "font-pregular text-xs text-white"
        }`}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  const [userDetails, setUserDetails] = useState({});

  const getUserDetails = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@user_details');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.error('Error reading user details:', e);
    }
  };
  
  useEffect(() => {
    const fetchUserDetails = async () => {
      const userDetails = await getUserDetails();
      if (userDetails) {
       setUserDetails(userDetails);
      } else {
        console.log('No user details found');
      }
    };
  
    fetchUserDetails();
  }, []);
  const navigation = useNavigation();
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#161622",
          },
          headerStyle: {
            backgroundColor: "#161622",
          },
          headerTintColor: "#fff",
        }}
      >
        <Tabs.Screen
          name="timeline"
          options={{
            headerStyle: {
              backgroundColor: "#161622",
            height: 100,
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Image
                  source={{
                    uri: userDetails?.avatarUrl,
                  }}
                  className="h-10 w-10 rounded-full ml-4"
                />
              </TouchableOpacity>
            ),

            headerTitle: () => (
              <Text className="font-pbold text-white text-xl ml-24">
                <Text className="text-violet-400">u</Text>topia.
              </Text>
            ),

            headerRight: () => (
              <TouchableOpacity onPress={() => router.replace("settings")}>
                <Ionicons
                  name="settings-outline"
                  size={24}
                  color="white"
                  style={{ marginRight: 10 }}
                />
              </TouchableOpacity>
            ),

            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={"home"}
                color={color}
                name="Timeline"
                focused={focused}
              />
            ),
          }}
        />


        <Tabs.Screen
          name="notifications"
          options={{
            title: "Notifications",
            headerShown: true,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={"bell"}
                color={color}
                name="Notifcations"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: true,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={"user"}
                color={color}
                name="Profile"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;

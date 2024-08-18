// app/profile/index.js
import { AntDesign } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import LikedPosts from "../../../components/LikedPosts";
import UserPosts from "../../../components/UserPosts";
import AsyncStorage from "@react-native-async-storage/async-storage";
const ProfilePage = () => {

  const [userData, setUserData] = useState(null);
  const fetchUserData = async () => {
    const jsonValue = await AsyncStorage.getItem('@user_details');
    setUserData(jsonValue != null ? JSON.parse(jsonValue) : null);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const Tab = createMaterialTopTabNavigator();
  return (
    <SafeAreaView className="flex-1 bg-primary">
      <View className="flex-row justify-center p-4">
        <View className="items-center mt-6">
          <Image
            source={{
              uri: userData?.avatarUrl,
            }}
            className="h-20 w-20 rounded-full"
          />
          <Text className="text-white text-lg mt-4">
            @{userData?.username} 
          </Text>

          <View className="flex-row mt-4">
            <Text className="text-white mr-2">100</Text>

            <TouchableOpacity onPress={() => router.navigate("following")}>
              <Text className="text-gray-400 mr-2">Following</Text>
            </TouchableOpacity>

            <Text className="text-white mx-2">100</Text>
            <TouchableOpacity onPress={() => router.navigate("followers")}>
              <Text className="text-gray-400">Followers</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="absolute right-0 mr-6 mt-4">
          
          {/* <Feather name="settings" size={24} color="white" /> */}

          <AntDesign name="adduser" size={28} color="white" />
        </View>
      </View>
      <View className="flex-1 mt-3">
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: "white",
            tabBarInactiveTintColor: "gray",
            tabBarIndicatorStyle: { backgroundColor: "#7C3AED" },
            tabBarLabelStyle: { fontSize: 12 },
            tabBarStyle: { backgroundColor: "#161622" },
          }}
        >
          <Tab.Screen name="Posts" component={UserPosts} />
          <Tab.Screen name="Likes" component={LikedPosts} />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
};

export default ProfilePage;

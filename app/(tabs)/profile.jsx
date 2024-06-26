// app/profile/index.js
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import LikedPosts from "../../components/LikedPosts";
import UserPosts from "../../components/UserPosts";
import { Feather } from "@expo/vector-icons";

const ProfilePage = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <SafeAreaView className="flex-1 bg-primary">
      <View className="flex-row justify-center p-4">
        <View className="items-center mt-6">
          <Image
            source={{
              uri: "https://marketplace.canva.com/EAFewoMXU-4/1/0/1600w/canva-purple-pink-gradient-man-3d-avatar-0o0qE2T_kr8.jpg",
            }}
            className="h-20 w-20 rounded-full"
          />
          <Text className="text-white text-lg mt-4">@username</Text>
        </View>
        <View className="absolute right-0 mr-6 mt-4">
          <Feather name="settings" size={24} color="white" />
        </View>
      </View>
      <View className="flex-1 mt-4">
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

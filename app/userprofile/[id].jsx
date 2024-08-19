// app/profile/index.js
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
    Image,
    SafeAreaView,
    Text,
    View
} from "react-native";
import AnotherUserPosts from "../../components/AnotherUserPosts";
// import LikedPosts from "../../components/LikedPosts";
const UserProfilePage = () => {

  const { id } = useLocalSearchParams();

  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
   const res = await fetch(`${process.env.EXPO_PUBLIC_BASE_URL}/user/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer LoremI[psum]&inguz.dev",
          },
        });
        const data = await res.json();
        setUserData(data.user);
    }

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


            {/* followers and following */}
          {/* <View className="flex-row mt-4">
            <Text className="text-white mr-2">100</Text>

            <TouchableOpacity onPress={() => router.navigate("following")}>
              <Text className="text-gray-400 mr-2">Following</Text>
            </TouchableOpacity>

            <Text className="text-white mx-2">100</Text>
            <TouchableOpacity onPress={() => router.navigate("followers")}>
              <Text className="text-gray-400">Followers</Text>
            </TouchableOpacity>
          </View> */}


        </View>

            {/* send follow request button   */}
        {/* <View className="absolute right-0 mr-6 mt-4">
          
          <Feather name="settings" size={24} color="white" />

          <AntDesign name="adduser" size={28} color="white" />
        </View> */}
        
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
          <Tab.Screen name="Posts" component={AnotherUserPosts}
          initialParams={{ userId: id }}
          />
          {/* <Tab.Screen name="Likes" component={LikedPosts}
          initialParams={{ userId: id }}
          /> */}
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
};

export default UserProfilePage;

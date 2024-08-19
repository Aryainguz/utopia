import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "./FormField";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { ToastService } from 'react-native-toastier';



const Settings = () => {



  const [userDetails, setUserDetails] = useState(null);
  const [username, setUsername] = useState(null);
  const [password,setPassword ] = useState(null);
  const [avatar, setAvatar] = useState();
  const [avatarLoading, setAvatarLoading] = useState(true);
  const [isLoading, setLoading] = useState(false);


  const getAvatar_URL = `${process.env.EXPO_PUBLIC_BASE_URL}/getavatar`;
  const update_URL = `${process.env.EXPO_PUBLIC_BASE_URL}/user/${userDetails?.id}`;
  
  const main = async () => {
    setAvatarLoading(true);
    const res = await fetch(getAvatar_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer LoremI[psum]&inguz.dev",
      },
    });
    const data = await res.json();
    setAvatar(data.url);
    setAvatarLoading(false);
  };

  const Regenerate = () => {
    main();
  };

  const fetchUserData = async () => {
    const jsonValue = await AsyncStorage.getItem("@user_details");
    const data = jsonValue != null ? JSON.parse(jsonValue) : null;
    setUserDetails(data);
  }
  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    setAvatar(userDetails?.avatarUrl);
    setAvatarLoading(false);
  }, [userDetails]);


  const handleUpdate = async () => {
    setLoading(true);
    if (!username && !password && !avatar) {
      ToastService.showError({ 
        message: "Nothing to update!" 
     }) 
     setLoading(false);
      return;
    }
  
    else{
      if (username?.length < 3 || password?.length < 6) {
        ToastService.showError({ 
          message: "Username or Password is too short!" 
       })
        setLoading(false);
        return;
      }else{
    const res = await fetch(update_URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer LoremI[psum]&inguz.dev",
      },
      body: JSON.stringify({
        avatarUrl: avatar,
        username: username,
        password: password,
      }),
    });
    const data = await res.json();
    setLoading(false);
    if (res.ok) {
      await AsyncStorage.setItem("@user_details", JSON.stringify(data.user));
      ToastService.show({ 
        message: 'Profile Updated Successfully!', 
        textStyle: { color: '#fff' }, 
        contentContainerStyle: { backgroundColor: '#a78bfa',flex:1, paddingLeft: 12, height: 70} 
     })
     router.replace("/timeline");
    } else {
      ToastService.showError({ 
        message: "Something went wrong, Please Try again later!" 
     }) 
    }
  }}
  }


  return (
    <SafeAreaView className="flex-1 bg-primary items-center">
      <View className="flex-col items-center p-4 mt-16">
      {
          avatarLoading ? <ActivityIndicator size="large" className="my-10"
          color="#fff" /> : 
         <Image
              source={{ uri: avatar }}
              className="h-28 w-28 rounded-full mb-1"
            />}

            <TouchableOpacity
              className="flex flex-row items-center"
              onPress={Regenerate}
            >
              <Text className="text-lg font-psemibold text-gray-100">
                Regenrate
              </Text>
              <Ionicons
                name="refresh"
                size={20}
                color="#fff"
                style={{ marginLeft: 2, marginBottom: 2 }}
              />
            </TouchableOpacity>
            <FormField
            title="Username"
            otherStyles="mt-7"
            keyboardType="username-address"
            username={username}
            onChangeText={(e) => setUsername(e)}
          />

          <FormField
            title="Password"
            value={password}
            handleChangeText={(e) => setPassword(e)}
            otherStyles="mt-7"
          />

        <TouchableOpacity className="bg-violet-400 rounded-xl p-4 mt-6 w-[90vw]"
        onPress={handleUpdate}
        >
          <Text className="text-white font-pregular text-center text-base"> 
          Update Profile
          {isLoading && (
                <ActivityIndicator
                  animating={isLoading}
                  color="#fff"
                  size="small"
                  className="ml-2"
                />
              )}
          </Text>
        </TouchableOpacity>

      
          {/* <Text className="text-red-500  text-center text-base my-6 font-psemibold"
          onPress={() => {
            handleUserDelete();
          }}
          > 
          Delete Account
          </Text> */}

          </View>

      </SafeAreaView>


  );
};

export default Settings;

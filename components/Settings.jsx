import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "./FormField";



const Settings = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  return (
    <SafeAreaView className="flex-1 bg-primary items-center">
      <View className="flex-col items-center p-4 mt-16">
       <Image
            source={{
              uri: "https://marketplace.canva.com/EAFewoMXU-4/1/0/1600w/canva-purple-pink-gradient-man-3d-avatar-0o0qE2T_kr8.jpg",
            }}
            className="h-24 w-24 rounded-full relative bottom-6"
          />


<FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

        <TouchableOpacity className="bg-violet-400 rounded-xl p-4 mt-6 w-[90vw]">
          <Text className="text-white font-pregular text-center text-base"> 
          Update Profile
          </Text>
        </TouchableOpacity>

      
          <Text className="text-red-500  text-center text-base my-6 font-psemibold"> 
          Delete Account
          </Text>

          </View>

      </SafeAreaView>


  );
};

export default Settings;

import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import FormField from "../../components/FormField";

const Profile = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = async () => {};
  return (
    <>
        
        <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View
          className="w-full flex justify-center h-full px-4 my-6"
        >

<View className="p-4 flex items-center">
          <Text className="text-stone-200 my-4 font-pbold text-3xl">
            @Profile
          </Text>
          <Image
            source={require("../../assets/images/avatar.png")}
            className="h-28 w-28 rounded-full"
          />
        </View>

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
            Log in
          </Text>
        </TouchableOpacity>

          
        </View>
      </ScrollView>
    </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    width: 350,
    borderRadius: 17,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Profile;

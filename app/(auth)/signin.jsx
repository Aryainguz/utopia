import { Link, router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../assets/images/triangular-logo.png";
import FormField from "../../components/FormField";
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignIn = () => {
  const userCheck_URL = `${process.env.EXPO_PUBLIC_BASE_URL}/user/login`;
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();


  const saveUserDetails = async (userDetails) => {
    try {
      // Convert the user details object to a string
      const jsonValue = JSON.stringify(userDetails);
      // Save the string to AsyncStorage
      await AsyncStorage.setItem('@user_details', jsonValue);
      console.log('User details saved');
    } catch (e) {
      // Saving error
      console.error('Error saving user details:', e);
    }
  };

  const submit = async () => {
    if (password == undefined || username == undefined) {
      Alert.alert("Fill all fields", "Please fill in all fields");
    }
    else{
      const res = await fetch(userCheck_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer LoremI[psum]&inguz.dev",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
      const data = await res.json();
      if(res.ok){
        if(data.success){
          Alert.alert("Login Successful", "You have successfully logged in");
          console.log(data.user)
          saveUserDetails(data.user);
          router.replace("/timeline");
        }
      }
      else{
        Alert.alert("Login Failed", "Please check your credentials or try again");
      }
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View
          className="w-full flex justify-center h-full px-4 my-6"
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >
          <View className="flex justify-center items-center bg-purple-500 h-14 w-14 rounded-full">
            <Image source={logo} className="h-7 w-7" />
          </View>

          <Text className="text-2xl font-semibold text-white mt-6 font-psemibold">
            Log in to utopia.
          </Text>

          <FormField
            placeholder="Enter your username"
            title=" Username"
            value={username}
            onChangeText={(e) => setUsername(e)}
            otherStyles="mt-7"
          />

          <FormField
            title="Password"
            value={password}
            handleChangeText={(e) => setPassword(e)}
            otherStyles="mt-7"
          />

          <TouchableOpacity
            className="bg-violet-400 rounded-xl p-4 mt-6 w-[90vw]"
            onPress={submit}
          >
            <Text className="text-white font-pregular text-center text-base">
              Log in
            </Text>
          </TouchableOpacity>

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an account?
            </Text>
            <Link
              href="/signup"
              className="text-lg font-psemibold text-violet-400"
            >
              Signup
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

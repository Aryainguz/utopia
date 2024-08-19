import { Ionicons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../assets/images/triangular-logo.png";
import FormField from "../../components/FormField";

const SignUp = () => {
  const getAvatar_URL = `${process.env.EXPO_PUBLIC_BASE_URL}/getavatar`;
  const register_URL = `${process.env.EXPO_PUBLIC_BASE_URL}/user/register`;
  
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
  useEffect(() => {
    main();
  }, []);

  const [avatar, setAvatar] = useState();
  const [avatarLoading, setAvatarLoading] = useState(true);

  const Regenerate = () => {
    main();
  };

  const [isLoading, setLoading] = useState(false);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const submit = async () => {
    if (password == undefined || username == undefined) {
      Alert.alert("Fill all fields", "Please fill in all fields");
    }
    else if (password.length < 8) {
      Alert.alert(
        "Password is too short",
        "Password must be at least 8 characters"
      );
    }
    else if (username.length < 3) {
      Alert.alert(
        "Username is too short",
        "Username must be at least 3 characters"
      );
    }
    else{
    setLoading(true);
    const res = await fetch(register_URL, {
      method: "POST",
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

    if (res.ok) {
      if(data.success) {
        Alert.alert("Success", "Account created successfully!");
        router.replace("/signin");
      }
    } else {
      Alert.alert("Error", "Account creation failed, try unique username");
    }
  }

  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View
          className="w-full flex justify-center h-full px-4 mb-6"
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >
          <View className="flex justify-center items-center bg-purple-500 h-14 w-14 rounded-full">
            <Image source={logo} className="h-7 w-7" />
          </View>

          <View className="space-y-2 mt-2 items-center">
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
          </View>

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
          />

          <TouchableOpacity
            className="bg-violet-400 rounded-xl p-4 mt-6 w-[90vw]"
            activeOpacity={0.7}
            disabled={isLoading}
            onPress={submit}
          >
            <Text className="text-white font-pregular text-center text-base">
              SignUp{" "}
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

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Already have an account?
            </Text>
            <Link
              href="/signin"
              className="text-lg font-psemibold text-violet-400"
            >
              Login
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    marginTop: 30,
    padding: 4,
  },
  dropdownButtonStyle: {
    width: 200,
    height: 50,
    backgroundColor: "#E9ECEF",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: "#E9ECEF",
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
});

export default SignUp;

import { Link } from "expo-router";
import { useState } from "react";
import {
  Button,
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

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = async () => {};

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
          <Link href={'/timeline'}>
          <Text className="text-white font-pregular text-center text-base"> 
            Log in
          </Text>
          </Link>
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

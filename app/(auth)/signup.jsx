import { Link } from "expo-router";
import { useState } from "react";
import {
  Button,
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
import SectionedMultiSelect from "react-native-sectioned-multi-select";
import { MaterialIcons as Icon } from "@expo/vector-icons";

const items = [
  { name: "Software", id: 1 },
  { name: "Sports", id: 2 },
  { name: "Booknotics", id: 3 },
  { name: "Enterntainment", id: 4 },
  { name: "Politics and News", id: 5 },
];

const SignUp = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const submit = async () => {};

  const changeSelectedItems = (selectedItems) => {
    if (selectedItems.length > 2) {
      selectedItems.shift();
    }
    setSelectedItems(selectedItems);
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
            SignUp to utopia.
          </Text>

          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-7"
            keyboardType="username-address"
          />

          <View className="space-y-2 mt-2">
            <Text className="text-base text-gray-100 font-pmedium py-2">
              Select Clans
            </Text>
            <View className="w-full h-16 bg-black-100 rounded-2xl my-7 border-black-200 focus:border-violet-400">
              <SectionedMultiSelect
                items={items}
                IconRenderer={Icon}
                uniqueKey="id"
                onSelectedItemsChange={changeSelectedItems}
                selectedItems={selectedItems}
                searchPlaceholderText="Search clans..."
                modalAnimationType="slide"
                colors={{ primary: "#7C3AED" }}
                confirmText="Select"
              />
            </View>
          </View>

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-3"
          />

          <TouchableOpacity className="bg-violet-400 rounded-xl p-4 mt-6 w-[90vw]">
            <Link href={"/timeline"}>
              <Text className="text-white font-pregular text-center text-base">
                SignUp
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    marginTop: 30,
    padding: 4,
  },
});

export default SignUp;

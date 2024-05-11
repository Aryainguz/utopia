import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Profile = () => {
  return (
    <>
      <ScrollView>
        <View className="h-72 rounded-b-[100px] bg-black-200 p-4 flex items-center">
          <Text className="text-stone-200 my-4 font-pbold text-3xl">
            @Profile
          </Text>
          <Image
            source={require("../../assets/images/avatar.png")}
            className="h-28 w-28 rounded-full"
          />
        </View>
        <View className="h-72 p-4 flex items-center">
          <TextInput placeholder="useless placeholder" style={styles.input} />
          <TextInput
            style={styles.input}
            placeholder="useless placeholder"
            keyboardType="numeric"
          />
          <TouchableOpacity className="rounded-xl w-32 p-4 bg-violet-500">
            <Text className="text-stone-200 font-pbold text-xl text-center">
              Update
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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

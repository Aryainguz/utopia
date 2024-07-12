import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { icons } from "../constants";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  username,
  regenUsername,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>

      <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-violet-400 flex flex-row items-center">
        {title === "Username" ? (
          <TextInput
            className="flex-1 text-white font-psemibold text-base"
            placeholder="Choose a cool username..."
            placeholderTextColor="#7B7B8B"
            {...props}
          />
        ) : (
          <TextInput
            className="flex-1 text-white font-psemibold text-base"
            value={value}
            placeholder="*********"
            placeholderTextColor="#7B7B8B"
            onChangeText={handleChangeText}
            secureTextEntry={title === "Password" && !showPassword}
            {...props}
          />
        )}

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;

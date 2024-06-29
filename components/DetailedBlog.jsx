import { Entypo, Ionicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import React, { useState } from "react";
import { Image, Text, View } from "react-native";

const DetailedBlog = ({ name, uri, blog, time, heartCount }) => {
  const [loved, setLoved] = useState(false);
  const [showHeartcount, setshowHeartCount] = useState(heartCount);

  const handlelog = () => {
    setLoved(!loved);
    if (heartCount <= 0) {
      setshowHeartCount(0);
    }
    setshowHeartCount(loved ? showHeartcount - 1 : showHeartcount + 1);
  };
  return (
    <View className="shadow-lg w-[100vw] p-4 h-auto border-y-[.4px] border-white bg-primary mx-auto">
      <View className="flex flex-row justify-between items-center mb-2">
        <View className="flex flex-row items-center">
          <Image source={{ uri: uri }} className="h-11 w-11 rounded-full" />
          <Text className="text-lg font-pbold text-left ml-5 bottom-2 text-white">
            @{name}
          </Text>
        </View>
        <Entypo
          name="dots-three-vertical"
          size={22}
          color="white"
          onPress={() => {
            console.log("clicked");
          }}
        />
      </View>
      <Text className="font-pextralight relative left-16 bottom-6 mb-4 text-white">
        - he/him
      </Text>

      <Text className="font-pregular text-md text-left mb-6 text-white relative bottom-2" >
        {blog}
      </Text>

      <View
        style={{
          position: "absolute",
          flexDirection: "row",
          bottom: 13,
          right: 13,
          zIndex: 1,
        }}
      >
        <View className="flex flex-row mx-4">
          <Ionicons name="stats-chart" size={20} color="white" />
          <Text className="text-sm font-pmedium text-left ml-2 mt-1 text-white">
            0
          </Text>
        </View>

        <View className="flex flex-row mr-3">
          {loved ? (
            <AntDesign name="heart" size={20} color="red" onPress={handlelog} />
          ) : (
            <AntDesign
              name="hearto"
              size={20}
              color="white"
              onPress={handlelog}
            />
          )}
          <Text className="text-sm font-pmedium text-left relative left-2 top-1 text-white">
            {showHeartcount}
          </Text>
        </View>
      </View>

      <Text className="text-sm font-pextralight text-left mt-2 text-white">
        {time}
      </Text>
    </View>
  );
};

export default DetailedBlog;

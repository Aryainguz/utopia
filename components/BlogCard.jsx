import { Feather, Ionicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link } from "expo-router";
import * as Sharing from "expo-sharing";
import React, { useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import ViewShot from "react-native-view-shot";

const BlogCard = ({ name, time, username, blog, heartCount, uri, id,impressions }) => {
  const previewLimit = 175;
  const viewShotRef = useRef();

  const [loved, setLoved] = useState(false);
  const [showHeartcount, setshowHeartCount] = useState(heartCount);

  const handlelog = () => {
    setLoved(!loved);
    if (heartCount <= 0) {
      setshowHeartCount(0);
    }
    setshowHeartCount(loved ? showHeartcount - 1 : showHeartcount + 1);
  };

  const handleShare = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`Sharing is not available on your platform`);
      return;
    }

    try {
      const uri = await viewShotRef.current.capture();
      await Sharing.shareAsync(uri, {
        mimeType: "image/jpeg",
        dialogTitle: `Check out this blog by @${name}`,
        UTI: "public.image",
      });
    } catch (error) {
      console.log("Error sharing blog:", error);
    }
  };

  return (
    <ViewShot ref={viewShotRef} options={{ format: "jpg", quality: 0.9 }}>
      <View className="shadow-lg w-[100vw] p-4 h-auto border-y-[.4px] border-white bg-primary mx-auto">
        <View className="flex flex-row justify-between items-center mb-2">
          <View className="flex flex-row items-center">
            <Image source={{ uri: uri }} className="h-11 w-11 rounded-full" />
            <Text className="text-lg font-pbold text-left ml-5 bottom-2 text-white">
              @{username}
            </Text>
          </View>
          <TouchableOpacity
            onPress={handleShare}
            style={{ position: "relative" }}
          >
            <Feather name="share" size={22} color="white" />
          </TouchableOpacity>
        </View>
        <Text className="font-pextralight relative left-16 bottom-6 mb-4 text-white">
          - yet another dreamer
        </Text>

        {blog?.length > previewLimit ? (
          <Link href={`/blog/${id}`} asChild className="relative bottom-2">
            <Text className="font-pregular text-md text-left mb-6 text-white">
              {`${blog.slice(0, previewLimit)}`}
              {blog.length > previewLimit ? "..." : ""}
              <Text className="text-purple-500">
                {blog.length > previewLimit ? "Show more" : ""}
              </Text>
            </Text>
          </Link>
        ) : (
          <Link href={`/blog/${id}`} asChild className="relative bottom-2">
            <Text className="font-pregular text-md text-left mb-6 text-white">
              {blog}
            </Text>
          </Link>
        )}

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
             {impressions}
            </Text>
          </View>

          <View className="flex flex-row mr-3">
            {loved ? (
              <AntDesign
                name="heart"
                size={20}
                color="red"
                onPress={handlelog}
              />
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
    </ViewShot>
  );
};

export default BlogCard;

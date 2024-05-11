import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";

const BlogCard = ({ name, time, username, blog, bookmarked }) => {
  const handlelog = () => {
    console.log("bookmarked");
  };
  return (
    <ScrollView>
      <View className="shadow-lg w-[90vw] p-4 rounded-lg h-auto bg-white dark:bg-primary mx-auto my-4">
        <View className="flex flex-row">
          <Image
            source={require("../assets/images/avatar.png")}
            className="h-11 w-11 rounded-full"
          />
          <Text className="text-lg font-pbold text-left ml-5">@{name}</Text>
        </View>
        <Text className="font-pextralight relative left-16 bottom-4 mb-4">
          - {username}
        </Text>
        <Text className="font-pregular text-left">{blog}</Text>
        <TouchableOpacity
          onPress={handlelog}
          className="relative left-[61vw] top-6"
        >
          {/* {bookmarked ? (
            <Image
              className="h-5 w-5"
              source={require("../assets/images/bookmark-colored.png")}
            />
          ) : (
            <Image
              className="h-5 w-5"
              source={require("../assets/images/bookmark.png")}
            />
          )} */}
          <Text className="text-violet-500 font-pbold">Bookmark</Text>
        </TouchableOpacity>
        <Text className="text-sm font-pextralight text-left mt-2">{time}</Text>

      </View>
    </ScrollView>
  );
};

export default BlogCard;

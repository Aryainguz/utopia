import React from "react";
import { ScrollView, View } from "react-native";
import data from "../data.json";
import BlogCard from "./BlogCard";

const ExploreTimeline = () => {
  return (
    <ScrollView >
      <View>

        {data.map((item, index) => {
          return (
            <BlogCard
              name={item.name}
              username={item.username}
              time={item.time}
              blog={item.blog}
              heartCount={item.heartCount}
              key={index}
            />
          );
        })}

      </View>
    </ScrollView>
  )
}

export default ExploreTimeline

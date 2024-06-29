import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ScrollView } from "react-native";
import DetailedBlog from "../../components/DetailedBlog";
import data from "../../data.json";

const Blog = () => {
  const { id } = useLocalSearchParams();

  const filteredData = data.filter((item) => item.id == id);

  const the_name = filteredData[0].name;
  const uri = filteredData[0].uri;
  const blog = filteredData[0].blog;
  const time = filteredData[0].time;
  const heartCount = filteredData[0].heartCount;


  return (
    <>
      <ScrollView
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
        style={{
          backgroundColor: "#161622",
        }}
      >
        <DetailedBlog
          name={the_name}
          uri={uri}
          blog={blog}
          time={time}
          heartCount={heartCount}
        />
      </ScrollView>
    </>
  );
};

export default Blog;

import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import DetailedBlog from "../../components/DetailedBlog";
import BlogCardSkeleton from "../../components/SkeletonBlog";

const Blog = () => {
  const { id } = useLocalSearchParams();
  const [Blog, setBlog] = useState(null);

  const increaseViwCount = async () => {
    try {
      const res = await fetch(`${process.env.EXPO_PUBLIC_BASE_URL}/blog/increaseview/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer LoremI[psum]&inguz.dev",
        },
      });
    } catch (error) {
      console.error("Error increasing view count:", error);
      Alert.alert("Error", "An error occurred while increasing view count");
    }
  }

  useEffect(() => {
    increaseViwCount();
  }, []);

  const getBlog_URL = `${process.env.EXPO_PUBLIC_BASE_URL}/blog/${id}`;
  const fetchBlog = async () => {
    try {
      const res = await fetch(getBlog_URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer LoremI[psum]&inguz.dev",
        },
      });
      const data = await res.json();
      if (res.ok) {
        setBlog(data.post);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
      Alert.alert("Error", "An error occurred while fetching blogs");
    }
  };

  useEffect(() => {
    fetchBlog();
  }, []);


  function timeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diff = Math.floor((now - date) / 1000); // Difference in seconds

    const intervals = [
      { label: "year", seconds: 31536000 },
      { label: "month", seconds: 2592000 },
      { label: "week", seconds: 604800 },
      { label: "day", seconds: 86400 },
      { label: "hour", seconds: 3600 },
      { label: "minute", seconds: 60 },
      { label: "second", seconds: 1 },
    ];

    for (const interval of intervals) {
      const time = Math.floor(diff / interval.seconds);
      if (time > 1) {
        return `${time} ${interval.label}s ago`;
      } else if (time === 1) {
        return `${time} ${interval.label} ago`;
      }
    }

    return "just now";
  }


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
       { Blog ? ( <DetailedBlog
          name={Blog.user?.username}
          uri={Blog.user?.avatarUrl}
          blog={Blog?.content}
          time={timeAgo(Blog?.createdAt)}
          heartCount={3}
          impressions={Blog?.impressions}
        />):
        (
          <BlogCardSkeleton />
        )
        }
      </ScrollView>
    </>
  );
};

export default Blog;

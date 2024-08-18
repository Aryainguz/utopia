import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import data from "../data.json";
import BlogCard from './BlogCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BlogCardSkeleton from './SkeletonBlog';
const UserPosts = () => {

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


  const [userBlogs, setUserBlogs] = useState(null);
  const [userData, setUserData] = useState(null);
  const fetchUserData = async () => {
    const jsonValue = await AsyncStorage.getItem('@user_details');
    setUserData(jsonValue != null ? JSON.parse(jsonValue) : null);
  };
  const getBlogs_URL = `${process.env.EXPO_PUBLIC_BASE_URL}/blog/user/${userData?.id}`;
  const fetchBlogs = async () => {
    try {
      const res = await fetch(getBlogs_URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer LoremI[psum]&inguz.dev",
        },
      });
      const data = await res.json();
      console.log(data.posts)
      if (res.ok) {
        setUserBlogs(data.posts);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
      Alert.alert("Error", "An error occurred while fetching blogs");
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  useEffect(() => {
    fetchBlogs();
  }, [userData]);
  return (
    <View style={{ flex: 1, backgroundColor: "#1E293B" }}>
   {
   userBlogs == null ? (
    <>
      <BlogCardSkeleton />
      <BlogCardSkeleton />
    </>
  ) : userBlogs.length === 0 ? (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center",backgroundColor:"#161622" }}>
      <Text className="text-white font-pbold text-lg mb-6">No liked post yet!</Text>
  
      <Image source={noposts} style={{ width: 200, height: 200 }} />
    </View>
  ) 
   :
   (<FlatList
      data={userBlogs}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <BlogCard
          name={userData?.username}
          username={userData?.username}
          time={timeAgo(item?.createdAt)}
          blog={item?.content}
          heartCount={0}
          impressions={item?.impressions}
          uri={userData?.avatarUrl}
          id={item?.id}
        />
      )}
    />
    
  )}
  </View>
  )
}

export default UserPosts
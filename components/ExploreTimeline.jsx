import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Alert, Animated, RefreshControl, View } from "react-native";
import { FloatingAction } from "react-native-floating-action";
import BlogCard from "./BlogCard";
import BlogCardSkeleton from "./SkeletonBlog";

const ExploreTimeline = () => {



  function timeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diff = Math.floor((now - date) / 1000); // Difference in seconds
  
    const intervals = [
      { label: 'year', seconds: 31536000 },
      { label: 'month', seconds: 2592000 },
      { label: 'week', seconds: 604800 },
      { label: 'day', seconds: 86400 },
      { label: 'hour', seconds: 3600 },
      { label: 'minute', seconds: 60 },
      { label: 'second', seconds: 1 }
    ];
  
    for (const interval of intervals) {
      const time = Math.floor(diff / interval.seconds);
      if (time > 1) {
        return `${time} ${interval.label}s ago`;
      } else if (time === 1) {
        return `${time} ${interval.label} ago`;
      }
    }
  
    return 'just now';
  }
  

  const [blogs, setBlogs] = useState(null);
  const getBlogs_URL = `${process.env.EXPO_PUBLIC_BASE_URL}/blog/all`;

  // Function to shuffle the array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const fetchBlogs = async () => {
    try {
      const res = await fetch(getBlogs_URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer LoremI[psum]&inguz.dev",
        },
      });
      const data = await res.json();
      if(res.ok){
        shuffleArray(data.posts);
        setBlogs(data.posts);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
      Alert.alert("Error", "An error occurred while fetching blogs");
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    const refeshBlogs = async () => {
      setRefreshing(true);
      await fetchBlogs();
      setRefreshing(false);
    };
    refeshBlogs();
  }, []);

  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const scrollY = useRef(new Animated.Value(0)).current;
  const previousScrollY = useRef(0); // Use useRef for previousScrollY

  useEffect(() => {
    const listener = scrollY.addListener(({ value }) => {
      if (value > previousScrollY.current) {
        setIsScrollingUp(false); // Scroll down
      } else if (value < previousScrollY.current) {
        setIsScrollingUp(true); // Scroll up
      }
      previousScrollY.current = value;
    });
    return () => {
      scrollY.removeListener(listener);
    };
  }, [scrollY]);




    // Simulate a call to your API to increase views
  const increaseViewCount = async () => {
    const res = await fetch(`${process.env.EXPO_PUBLIC_BASE_URL}/blog/increaseview/all`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer LoremI[psum]&inguz.dev",
      },
    })
  };

  // Increase views when the card is rendered
  useEffect(() => {
    increaseViewCount();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#1E293B" }}>
       {blogs ?  (
        <Animated.FlatList
          data={blogs}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <BlogCard
              name={item.user?.username}
              username={item.user?.username}
              time={timeAgo(item.createdAt)}
              blog={item?.content}
              heartCount={item.likes} 
              impressions={item.impressions}
              uri={item.user?.avatarUrl}
              id={item.id}
            />
          )}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
          )}
          scrollEventThrottle={16}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor="#fff"
            />
          }
        />
      ):
      <>
      <BlogCardSkeleton />
      <BlogCardSkeleton />
      <BlogCardSkeleton />
      </>
      }
      {isScrollingUp && (
        <FloatingAction
          onPressMain={() => router.navigate("Create")}
          color="#7C3AED"
          distanceToEdge={{ vertical: 30, horizontal: 30 }}
          showBackground={false}
          floatingIcon={<Ionicons name="add" size={25} color="#fff" />}
        />
      )}
    </View>
  );
};

const styles = {
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  modalContent: {
    width: "95%",
    height: "27%",
    backgroundColor: "#1E293B",
    padding: 20,
    borderRadius: 10,
  },
  input: {
    color: "#A7B6C2",
    fontSize: 16,
    marginBottom: 20,
  },
  closeIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
};

export default ExploreTimeline;

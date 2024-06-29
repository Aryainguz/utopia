import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Animated,
  RefreshControl,
  View
} from "react-native";
import { FloatingAction } from "react-native-floating-action";
import data from "../data.json";
import BlogCard from "./BlogCard";

const ForTimeline = () => {


  const [refreshing, setRefreshing] = useState(false);
  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // Simulate a network request
    wait(1000).then(() => setRefreshing(false));
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


  return (
    <View style={{ flex: 1, backgroundColor: "#1E293B" }}>
      <Animated.FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <BlogCard
            name={item.name}
            username={item.username}
            time={item.time}
            blog={item.blog}
            heartCount={item.heartCount}
            uri={item.uri}
            id={item.id}
          />
        )}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#fff" />
        }
      />
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

export default ForTimeline;

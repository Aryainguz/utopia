import { AntDesign } from "@expo/vector-icons";
import React, { useState, useEffect, useRef } from "react";
import { ScrollView, TextInput, View, Animated, TouchableOpacity, Text } from "react-native";
import { FloatingAction } from "react-native-floating-action";
import data from "../data.json";
import BlogCard from "./BlogCard";
import FormField from "./FormField";
import { Modal } from "react-native";
import { useRoute } from '@react-navigation/native'; // Import useRoute

const ForTimeline = () => {
  const [showModal, setShowModal] = useState(false);
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




  const openModal = () => {

    setShowModal(true);
   
  };

  const closeModal = () => {
    setShowModal(false);
    
  };

 const route = useRoute(); // Use useRoute to get the current route



  return (
    <View style={{ flex: 1, backgroundColor: "#1E293B" }}>
      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      >
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
      </Animated.ScrollView>
      {isScrollingUp && (
        <FloatingAction
          color="#7C3AED"
          distanceToEdge={{ vertical: 30, horizontal: 30 }}
          // onPressMain={openModal}
          showBackground={false}
          onClose={closeModal}
          onOpen={openModal}
          openModal={openModal}
          
        />
      )}
      {showModal && (
        <Modal
          visible={showModal}
          animationType="slide"
          transparent={true}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TextInput
                style={styles.input}
                placeholder="Write a whatever you want..."
                placeholderTextColor="#A7B6C2"
                multiline={true}
                numberOfLines={4}
              />
              <AntDesign
                name="close"
                size={24}
                color="#A7B6C2"
                style={styles.closeIcon}
                onPress={closeModal}
              />
              <TouchableOpacity
                style={{ backgroundColor: "#7C3AED", padding: 10, borderRadius: 5, position: "relative", bottom: -20}}
              >
                <Text style={{ color: "#fff", textAlign: "center" }}>
                  Post
                </Text>
              </TouchableOpacity>

            </View>
          </View>
        </Modal>
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
    height : "27%",
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

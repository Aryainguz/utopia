import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import React, { useRef, useState } from 'react';
import { Animated, Image, PanResponder, Text, TouchableOpacity } from 'react-native';

const NotificationBanner = ({ user, notification, imageURI }) => {
  const [button, setButton] = useState(false);
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan.x }], { useNativeDriver: false }),
      onPanResponderRelease: (e, gesture) => {
        if (gesture.dx > 120) {
          // Adjust swipe threshold as needed
          onSwipeAction();
        } else {
          Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: false }).start();
          setButton(prev=>!prev)
        }
      },
    })
  ).current;

  const onSwipeAction = () => {
  setButton(prev=>!prev)
  }

  const deleteNotification = () => {
    console.log('Notification Deleted');
  }
  
  return (
    <Animated.View className="flex-row items-center py-7 px-2 border-y-[0.5px] border-white"
      style={{
        transform: [{ translateX: pan.x }],
      }}
      {...panResponder.panHandlers}
    >
         {
              button ? (
               <MaterialIcons name="delete" size={24} color="red"
               onPress={
                () => deleteNotification()
               }
                className="absolute left-0 right-0 top-0 bottom-0 m-auto"
               />
              ) : null

                }
     <TouchableOpacity
    //   onPress={() => navigation.navigate("Profile")}
      >
                <Image
                  source={{
                    uri: `${imageURI}`,
                  }}
                  className="h-11 w-11 rounded-full ml-2"
                />
              </TouchableOpacity>
              <Text className="font-pbold text-white text-sm ml-2">
                @{user}
                </Text>
                <Text className="font-pregular text-white text-sm ml-1">
                {notification}
                </Text>
             
            </Animated.View>
  );
};



export default NotificationBanner;

import AntDesign from '@expo/vector-icons/AntDesign';
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  View
} from "react-native";


const BlogCard = ({ name, time, username, blog,heartCount }) => {

  const [loved, setLoved] = useState(false);
  const [showHeartcount,setshowHeartCount] = useState(heartCount);

  const handlelog = () => {
    setLoved(!loved);
    if(heartCount <=0){
      setshowHeartCount(0);
    }
    setshowHeartCount(loved ? showHeartcount - 1 : showHeartcount + 1);
  };
  return (
    <ScrollView>
      <View className="shadow-lg w-[100vw] p-4 h-auto border-y-[.4px] border-white bg-primary mx-auto">
        <View className="flex flex-row">
          <Image
            source={require("../assets/images/avatar.png")}
            className="h-11 w-11 rounded-full"
          />
          <Text className="text-lg font-pbold text-left ml-5 text-white">@{name}</Text>
        </View>
        <Text className="font-pextralight relative left-16 bottom-4 mb-4 text-white">
          - he/him
        </Text>
        <Text className="font-pregular text-left mb-6 text-white">{blog}</Text>

        <View
        style={{ position: "absolute", bottom: 13, right: 13, zIndex: 1}}
        >


      {
        loved ? <AntDesign name="heart" size={24} color="red"
        onPress={handlelog}
        /> :  
      
        <AntDesign name="hearto" size={24} color="white"
        onPress={handlelog}
        />}
        <Text className="text-sm font-pmedium text-left relative left-2 mt-2 text-white">{showHeartcount}</Text>

        </View>
        

     
        <Text className="text-sm font-pextralight text-left mt-2 text-white">{time}</Text>
      </View>
    </ScrollView>
  );
};

export default BlogCard;

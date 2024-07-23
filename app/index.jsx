import { router } from "expo-router";
import React from "react";
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import illustration from "../assets/images/Saly-17.png";
import logo from "../assets/images/triangular-logo.png";



const Index = () => {

  return (
    <ImageBackground source={require('../assets/images/screen.png')} style={{flex: 1}}>
 <SafeAreaView className="h-full">
  <ScrollView  contentContainerStyle={{height:"100%"}}>
    <View className="w-full justify-center items-center h-full px-4">
      <View className="mb-28">
        <View className="flex justify-center items-center bg-purple-500 h-14 w-14 mb-2 rounded-full">
          <Image source={logo} className="h-7 w-7" />
        </View>
      <Text className="font-pregular text-2xl text-white">
Express yourself in 
      </Text>
<Text className="font-pbold text-7xl text-white">
        Utopia.
      </Text>
      <TouchableOpacity className="bg-violet-400 rounded-xl p-4 my-2 w-[70vw]"
      onPress={() =>router.push("/onBoarding")}>
        <Text className="text-white font-pregular text-center text-base"> 
          Enter Now
        </Text>
      </TouchableOpacity>
      </View>
      <Text className="text-white font-pextralight relative bottom-28 left-10"> 
         Software By The Xiting Way
        </Text>
    <Image
     source={illustration}
     className="absolute h-72 w-full bottom-[0px]"
    /> 
    </View>
  </ScrollView>
  
 </SafeAreaView>
</ImageBackground>

  );
};


export default Index;
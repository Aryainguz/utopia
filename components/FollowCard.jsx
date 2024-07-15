import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const FollowCard = ({username,userImg}) => {
  return (
    <View 
    className="bg-primary text-white flex flex-row items-center p-6 border-b-[0.2px]
    border-white "
    >
      <Image  
        source={{uri: `${userImg}`}}
        className="w-12 h-12 rounded-full mr-4"
      />
      <Text className="text-white ml-1 font-psemibold"
      >@{username}</Text>
      <TouchableOpacity
        className="ml-auto"
      >

        
        <Text className="text-white bg-purple-500 p-2 rounded-lg">Follow</Text>
      </TouchableOpacity>
    </View>
  )
}

export default FollowCard
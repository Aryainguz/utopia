import React from 'react'
import { ScrollView, Text, View } from 'react-native'

const Notifications = () => {
  return (
    <ScrollView className="bg-slate-800">
       <Text
        className="text-xl text-white font-pbold text-left mt-5 ml-5 border-b-2 border-purple-500 w-48"
      >
        Your Notifications
      </Text>
    </ScrollView>
  )
}

export default Notifications
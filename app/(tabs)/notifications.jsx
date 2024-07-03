import { Link } from 'expo-router'
import React from 'react'
import { ScrollView, Text } from 'react-native'

const Notifications = () => {
  return (
    <>
    <ScrollView className="bg-slate-800">
<Link href={'signin'}>
      <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
        signin
      </Text>
      </Link>
      <Text
        className="text-xl text-white font-pbold text-left mt-5 ml-5 border-b-2 border-purple-500 w-48"
      >
        Your Notifications
      </Text>
    </ScrollView>
    </>
  )
}

export default Notifications
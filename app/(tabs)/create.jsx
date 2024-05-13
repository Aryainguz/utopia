import { Link } from 'expo-router'
import React from 'react'
import { ScrollView, Text } from 'react-native'

const Explore = () => {
  return (
    <>
    <ScrollView className="bg-slate-800">
<Link href={'signin'}>
      <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
        signin
      </Text>
      </Link>
    </ScrollView>
    </>
  )
}

export default Explore
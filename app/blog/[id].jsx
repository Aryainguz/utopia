import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import BlogCard from '../../components/BlogCard'


const Blog = () => {
  const { id } = useLocalSearchParams()
  return (
    <>
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>Blog: {id}</Text>
      </View>
    </>
  )
}

export default Blog
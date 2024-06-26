import React from 'react'
import { Animated, FlatList, View } from 'react-native'
import data from "../data.json"
import BlogCard from './BlogCard'

const LikedPosts = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#1E293B" }}>
    <FlatList
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
    />
  </View>
  )
}

export default LikedPosts
import { View, Text } from 'react-native'
import React from 'react'
import data from "../../data.json"
import BlogCard from '../../components/BlogCard'

const Bookmark = () => {
  return (
    <View>
       <Text
        className="text-xl font-pbold text-left mt-5 ml-5 border-b-2 border-purple-500 w-1/3"
      >
        Your Bookmarks
      </Text>
     
     {
        data.map((item,index) => {
          return <BlogCard name={item.name} username={item.username} time={item.time} blog={item.blog} key={index} bookmarked={true} />
        })


     }

    </View>
  )
}

export default Bookmark
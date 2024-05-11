import React from 'react'
import { ScrollView, Text } from 'react-native'
import BlogCard from '../../components/BlogCard'
import data from "../../data.json"

const Explore = () => {
  return (
    <>
    <ScrollView>
    <Text
        className="text-xl font-pbold text-left mt-5 ml-5 border-b-2 border-purple-500 w-1/3"
      >
        the world   
      </Text>
    {
        data.map((item,index) => {
          return <BlogCard name={item.name} username={item.username} time={item.time} blog={item.blog} key={index}/>
        })
    }
    </ScrollView>
    </>
  )
}

export default Explore
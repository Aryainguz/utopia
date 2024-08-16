import React, { useEffect, useRef } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';


const CreateCard = () => {

  const createPost_URL = `${process.env.EXPO_PUBLIC_BASE_URL}/blog/new`;
  

  const  InputRef = useRef(null)

    const [text, setText] = React.useState('')
    const onChangeText = (text) =>{
       setText(text)
       }
    const handleSubmit = async () => {
    const res = await fetch(createPost_URL,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer LoremI[psum]&inguz.dev'
      },
      body: JSON.stringify({
        content: text,
        userId: "clzqjsfhz00003fll3p6oit10"
      })
    }
    )
    const data = await res.json()
    console.log(data)
    setText('')
    }


    setTimeout(() => InputRef.current.focus(), 100)





  return (
    <ScrollView className="bg-primary" keyboardShouldPersistTaps={'always'}>

    <View className="flex flex-row px-6 py-4">
    <Image
      source={
        {
          uri: "https://marketplace.canva.com/EAFewoMXU-4/1/0/1600w/canva-purple-pink-gradient-man-3d-avatar-0o0qE2T_kr8.jpg"
        }
      }
      className="h-12 w-12 rounded-full"
    />
    <TextInput
      ref={InputRef}
    multiline={true}
      onChangeText={onChangeText}
      placeholderTextColor={'#718096'}
      maxLength={225}
      value={text}
      placeholder="Write whatever you want..."
      className="ml-5 text-white placeholder:text-lg font-pregular placeholder-opacity-50 w-[100%] flex-wrap pr-11" 
    />

  </View>
  <View className="flex flex-row justify-start px-6 py-4">
  {
    text.length == 225 ?
    <Text className="text-red-500 text-md font-pregular">You have reached the maximum limit of 200 characters</Text>
    : <Text className="text-white text-md font-pregular">{text.length}/225</Text>
    }
  </View> 
  <View className="flex flex-row justify-end px-6">
  <TouchableOpacity className="bg-purple-500 py-2 px-6 rounded-full"
  onPress={
    handleSubmit
  }
  >
    <Text className="text-white text-md font-pbold">Post</Text>
  </TouchableOpacity>
  </View>
  </ScrollView >
  )
}

export default CreateCard
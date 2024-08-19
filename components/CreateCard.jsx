import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Alert, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ToastService } from 'react-native-toastier';
import { router } from 'expo-router';

const CreateCard = () => {

  const [userAvatar, setUserAvatar] = useState(null)
  const [userId,setUserId] = useState(null)
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUserAvatar = async () => {
      const user = await AsyncStorage.getItem('@user_details')
      const userAvatar = JSON.parse(user).avatarUrl
      setUserAvatar(userAvatar)
      setUserId(JSON.parse(user).id)
    }
    fetchUserAvatar()
  }, [])

  const createPost_URL = `${process.env.EXPO_PUBLIC_BASE_URL}/blog/new`;
  

  const  InputRef = useRef(null)

    const [text, setText] = React.useState('')
    const onChangeText = (text) =>{
       setText(text)
       }
    const handleSubmit = async () => {
      setIsLoading(true)
      if (text.length == 0) {
        setIsLoading(false)
        ToastService.show({ 
          message: 'No thought?, write whatever you want...', 
          textStyle: { color: '#fff' }, 
          contentContainerStyle: { backgroundColor: '#a78bfa',flex:1, paddingLeft: 12, height: 70} 
       })
        return
      }
    const res = await fetch(createPost_URL,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer LoremI[psum]&inguz.dev'
      },
      body: JSON.stringify({
        content: text,
        userId: userId
      })
    }
    )
    const data = await res.json()
    if(res.ok){
      if(data.success){
        ToastService.show({ 
          message: 'Posted Created Successfully!', 
          textStyle: { color: '#fff' }, 
          contentContainerStyle: { backgroundColor: '#a78bfa',flex:1, paddingLeft: 12, height: 70} 
       })
       router.replace("/timeline")
      }
    }
    else{
      ToastService.showError({ 
        message: "Something went wrong, Try again later!" 
     }) 
    }
    setText('')
    }


    setTimeout(() => InputRef.current.focus(), 100)





  return (
    <ScrollView className="bg-primary" keyboardShouldPersistTaps={'always'}>

    <View className="flex flex-row px-6 py-4">
    <Image
      source={
        {
          uri: userAvatar
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
    
    {isLoading ? (
                <ActivityIndicator
                  animating={isLoading}
                  color="#fff"
                  size="small"
                  className="ml-2"
                />
              ):
              (
                <Text className="text-white text-md font-pbold">Post</Text>

              )
              }
  </TouchableOpacity>
  </View>
  </ScrollView >
  )
}

export default CreateCard
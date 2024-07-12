import React, { useRef } from 'react';
import { Image, ScrollView, Text, TextInput, View } from 'react-native';


const CreateCard = () => {


  const  InputRef = useRef(null)

    const [text, setText] = React.useState('')
    const onChangeText = (text) =>{
       setText(text)
       }
    const handleSubmit = () => {
    console.log(text)
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
  <View className="flex flex-row justify-end px-6 py-4">
  {
    text.length == 275 ?
    <Text className="text-red-500 text-md font-pregular">You have reached the maximum limit of 200 characters</Text>
    : <Text className="text-white text-md font-pregular">{text.length}/225</Text>
    }
  </View> 
  </ScrollView >
  )
}

export default CreateCard
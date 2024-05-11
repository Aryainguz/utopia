import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


const CreateCard = () => {

    const [text, setText] = React.useState('')
    const onChangeText = (text) => setText(text)
    const handleSubmit = () => {
    console.log(text)
    }
  return (
    <SafeAreaView>
       <TextInput
        className="w-[95vw] h-28 mx-auto p-2 border border-gray-300 rounded-lg"
        onChangeText={onChangeText}
        value={text}
        placeholder='write whatever shit you want...'
      />
       <TouchableOpacity className="bg-violet-500 rounded-xl p-2 my-2 w-[40vw] absoulute left-56" onPress={handleSubmit}>
        <Text className="text-white font-pregular text-center text-xl"> 
          Post
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default CreateCard
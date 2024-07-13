import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const NotificationBanner = ({user,notification,imageURI}) => {
  return (
    <View className="flex-row items-center py-7 px-2 border-y-[0.5px] border-white">
     <TouchableOpacity
    //   onPress={() => navigation.navigate("Profile")}
      >
                <Image
                  source={{
                    uri: `${imageURI}`,
                  }}
                  className="h-10 w-10 rounded-full ml-2"
                />
              </TouchableOpacity>
              <Text className="font-pbold text-white text-xs ml-2">
                @{user}
                </Text>
                <Text className="font-pregular text-white text-sm ml-2">
                {notification}
                </Text>
            </View>
  )
}

export default NotificationBanner
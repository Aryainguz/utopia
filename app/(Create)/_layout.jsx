import React from 'react';
import { Stack } from 'expo-router';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';  // Import the icon library
import { useRouter } from 'expo-router';

const Layout = () => {
  const router = useRouter();

  return (
    <Stack>
      <Stack.Screen
        name="Create"
        options={{
          title: 'Create Post',
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()} style={{ marginHorizontal: 10 }}>
              <Icon name="arrow-back" size={25} color="#fff" />
            </TouchableOpacity>
          ),
             headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                // Logic for posting the tweet can go here
                console.log('Tweet posted');
                router.back(); // Navigate back after posting
              }}
              style={{ marginRight: 5,backgroundColor: '#7C3AED',marginTop:7,paddingHorizontal: 25,paddingVertical:10,borderRadius:30}}
            >
              <Text style={{ color: '#fff', fontSize: 16 }}>Post</Text>
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: '#161622', 
          },
          headerTitleStyle: {
            color: '#fff', 
          },
        }}
      />
    </Stack>
  );
};

export default Layout;

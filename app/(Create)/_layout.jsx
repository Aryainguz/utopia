import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import the icon library

const Layout = () => {
  const router = useRouter();

  return (
    <Stack>
      <Stack.Screen
        name="Create"
        options={{
          title: 'Create Post',
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.replace("timeline")} style={{ marginHorizontal: 10 }}>
              <Icon name="arrow-back" size={25} color="#fff" />
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

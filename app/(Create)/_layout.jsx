import React from 'react';
import { Stack } from 'expo-router';
import { TouchableOpacity } from 'react-native';
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
            <TouchableOpacity onPress={() => router.back()} style={{ marginLeft: 10 }}>
              <Icon name="arrow-back" size={25} color="#fff" />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: '#7C3AED', 
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

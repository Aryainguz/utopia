import { Feather, Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ToastService } from 'react-native-toastier';

export default function CustomDrawerContent(props) {

  const [userDetails, setUserDetails] = useState({});

  const getUserDetails = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@user_details');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.error('Error reading user details:', e);
    }
  };
  
  useEffect(() => {
    const fetchUserDetails = async () => {
      const userDetails = await getUserDetails();
      if (userDetails) {
       setUserDetails(userDetails);
      } else {
        console.log('No user details found');
      }
    };
  
    fetchUserDetails();
  }, []);
  const logout = async () => {
    try {
      await AsyncStorage.removeItem('@user_details');
      ToastService.show({ 
        message: 'Logged Out Successfully!', 
        textStyle: { color: '#fff' }, 
        contentContainerStyle: { backgroundColor: '#a78bfa',flex:1, paddingLeft: 12, height: 70,
          width: '90%',
        } 
     })
      router.replace('/signin');
    } catch (e) {
      console.error('Error removing user details:', e);
    }
  };

  
  
  const router = useRouter();
  return (
    <DrawerContentScrollView {...props} 
    className="bg-primary"
    >
      <Image
            source={{
              uri: userDetails?.avatarUrl,
            }}
            className="h-24 w-24 rounded-full mx-auto mt-10 mb-4"
          />
          <Text className="text-white text-center text-xl font-bold mb-10">
            {userDetails?.username}
          </Text>
    
      <View style={styles.settingsContainer}>
        <DrawerItem
          label="Edit Profile"
          onPress={() => {
            router.push('/settings');
          }}
          style={styles.settings}
          labelStyle={styles.settingsLabel}
          icon={({ focused, size }) => (
            <Feather
            name='edit-3'
              size={size}
              color={focused ? 'white' : 'gray'}
            />
          )}
        />
      </View>
      <View style={styles.logoutContainer}>

<DrawerItem
  label="Logout"
  onPress={() => logout()}
  style={styles.logout}
  labelStyle={styles.logoutLabel}
  icon={({ focused, size }) => (

    <Ionicons
      name="log-out"
      size={size}
      color={focused ? 'white' : 'gray'}
      />
  )}
/>
</View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  logoutContainer: {
    borderTopWidth: 1,
    borderTopColor: 'white',
    marginTop: 10,
    paddingTop: 10,
  },
  logoutLabel: {
    color: 'white',
    fontSize: 18, // Make text bigger if needed
    paddingVertical: 10,
    marginHorizontal: -10,
    marginVertical: -10,
  },
  settingsContainer: {
    borderTopColor: 'white',
    marginTop: 10,
    paddingTop: 10,
  },
  settingsLabel: {
    color: 'white',
    fontSize: 18, // Make text bigger if needed
    paddingVertical: 10,
    marginHorizontal: -10,
    marginVertical: -10,
  },
});
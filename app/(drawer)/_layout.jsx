import { Feather } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { withLayoutContext } from 'expo-router';
import React from 'react';
import CustomDrawerContent from '../../components/CustomDrawer';


const DrawerNavigator = createDrawerNavigator().Navigator;
const Drawer = withLayoutContext(DrawerNavigator);

export default function DrawerLayout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: 'white',
        drawerActiveBackgroundColor: '#161622',
        drawerInactiveBackgroundColor: '#161622',
        drawerLabelStyle: {
          paddingVertical: 10,
          fontSize: 18,
          marginHorizontal: -15,
          marginVertical: -10,
        },
        drawerStyle: {
          backgroundColor: '#161622',
          width: 240,
        },
        headerShown: false,
      }}
    >
      <Drawer.Screen name="(tabs)" options={{ headerShown: false,
        title: 'Home',
        drawerIcon: ({ focused, size }) => (
          <Feather
            name="home"
            size={size}
            color={focused ? 'white' : 'gray'}
          />
        ),
       }} 
       
       />
      
    </Drawer>
  );
}

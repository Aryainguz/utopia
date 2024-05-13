import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { icons } from "../../constants";
import Ionicons from '@expo/vector-icons/Ionicons';



const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-1">
      <Ionicons name={icon} size={24} color={"#fff"} />
      <Text
        className={`${focused ? "font-psemibold text-sm text-white" : "font-pregular text-xs text-white"}`}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#161622"
          },
          headerStyle: {
            backgroundColor: "#161622",
          
          },
          headerTintColor: "#fff"
        }}


      >
        <Tabs.Screen
          name="timeline"
          options={{
            title: "Timeline",
            headerShown: true,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon= {"home"}
                color={color}
                name="Timeline"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: true,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={"create"}
                color={color}
                name="Create"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="notifications"
          options={{
            title: "Notifications",
            headerShown: true,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={"notifications"}
                color={color}
                name="Notifcations"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: true,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={"person-circle"}
                color={color}
                name="Profile"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;

import { Ionicons } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function CustomDrawerContent(props) {4
  
  const router = useRouter();
  return (
    <DrawerContentScrollView {...props} 
    className="bg-primary"
    >
      <Image
            source={{
              uri: "https://marketplace.canva.com/EAFewoMXU-4/1/0/1600w/canva-purple-pink-gradient-man-3d-avatar-0o0qE2T_kr8.jpg",
            }}
            className="h-24 w-24 rounded-full mx-auto mt-10 mb-4"
          />
          <Text className="text-white text-center text-xl font-bold mb-10">
            @username
          </Text>
      <DrawerItemList
      {...props}
      />

      <View style={styles.settingsContainer}>
        <DrawerItem
          label="Settings"
          onPress={() => {
            router.push('/settings');
          }}
          style={styles.settings}
          labelStyle={styles.settingsLabel}
          icon={({ focused, size }) => (
            <Ionicons
              name="settings"
              size={size}
              color={focused ? 'white' : 'gray'}
            />
          )}
        />
      </View>
      <View style={styles.logoutContainer}>

<DrawerItem
  label="Logout"
  onPress={() => {
    router.replace('/');
  }}
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
    borderTopWidth: 1,
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
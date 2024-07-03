import { MaterialIcons as Icon } from "@expo/vector-icons";
import { Link } from "expo-router";
import { generateUsername } from "friendly-username-generator";
import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SectionedMultiSelect from "react-native-sectioned-multi-select";
import SelectDropdown from "react-native-select-dropdown";
import logo from "../../assets/images/triangular-logo.png";
import FormField from "../../components/FormField";

const items = [
  { name: "Software", id: 1 },
  { name: "Sports", id: 2 },
  { name: "Booknotics", id: 3 },
  { name: "Enterntainment", id: 4 },
  { name: "Politics and News", id: 5 },
];

const genders = [
  { title: 'Male', icon: 'male' },
  { title: 'Female', icon: 'female' },
]

const SignUp = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const [isLoading, setLoading] = useState(false);

  const [username, setUsername] = useState(generateUsername());
  const [interests, setInterests] = useState([]);


  const regenUsername = () => {
    const options = {
      useHyphen: true, // if false, a hyphen will NOT be used. (True by default)
      useRandomNumber: false, // if false, a random number will NOT be appended to the end of the random username. (True by default)
    };
    const gen_username = generateUsername(options);
    setUsername(gen_username);
  };

  const [form, setForm] = useState({
    username: username,
    password: "",
    interests: interests,
  });

  const submit = async () => {
    if (form.password === "" || selectedItems.length === 0) {
      Alert.alert("Fill all fields", "Please fill in all fields");
    }
    if (form.password.length < 8) {
      Alert.alert("Password is too short", "Password must be at least 8 characters");
    }

    setLoading(true);
    try {
      form.interests = selectedItems.map((item) => items[item-1].name);
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  const changeSelectedItems = (selectedItems) => {
    if (selectedItems.length > 3) {
      selectedItems.shift();
    }
    setSelectedItems(selectedItems);
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View
          className="w-full flex justify-center h-full px-4 my-6"
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >
          <View className="flex justify-center items-center bg-purple-500 h-14 w-14 rounded-full">
            <Image source={logo} className="h-7 w-7" />
          </View>

          <Text className="text-2xl font-semibold text-white mt-6 font-psemibold">
            SignUp to utopia.
          </Text>

          <FormField
            title="Username"
            otherStyles="mt-7"
            keyboardType="username-address"
            username={username}
            regenUsername={regenUsername}
          />


<SelectDropdown
    data={genders}

    renderButton={(selectedItem, isOpened) => {
      return (
        <View style={styles.dropdownButtonStyle}>
          {selectedItem && (
            <Icon name={selectedItem.icon} style={styles.dropdownButtonIconStyle} />
          )}
          <Text style={styles.dropdownButtonTxtStyle}>
            {(selectedItem && selectedItem.title) || 'Select your gender'}
          </Text>
        </View>
      );
    }}
    renderItem={(item, index, isSelected) => {
      return (
        <View style={{...styles.dropdownItemStyle, ...(isSelected && {backgroundColor: '#D2D9DF'})}}>
          <Icon name={item.icon} style={styles.dropdownItemIconStyle} />
          <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
        </View>
      );
    }}
    showsVerticalScrollIndicator={false}
    dropdownStyle={styles.dropdownMenuStyle}
  />

          <View className="space-y-2 mt-2">
            <Text className="text-base text-gray-100 font-pmedium py-2">
              Select Interests (Max 3)
            </Text>
            <View className="w-full h-16 bg-black-100 rounded-2xl my-7 border-black-200 focus:border-violet-400">
              <SectionedMultiSelect
                items={items}
                IconRenderer={Icon}
                uniqueKey="id"
                onSelectedItemsChange={changeSelectedItems}
                selectedItems={selectedItems}
                searchPlaceholderText="Search clans..."
                modalAnimationType="slide"
                colors={{ primary: "#7C3AED" }}
                confirmText="Select"
              />
            </View>
          </View>

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles={
              selectedItems.length == 3
                ? "mt-14"
                : selectedItems.length > 0
                ? "mt-6"
                : "mt-0"
            }
          />

          <TouchableOpacity
            className="bg-violet-400 rounded-xl p-4 mt-6 w-[90vw]"
            activeOpacity={0.7}
            disabled={isLoading}
            onPress={submit}
          >
            <Text className="text-white font-pregular text-center text-base">
              SignUp {isLoading && (
              <ActivityIndicator
                animating={isLoading}
                color="#fff"
                size="small"
                className="ml-2"
              />
            )}
            </Text>
            
          </TouchableOpacity>

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Already have an account?
            </Text>
            <Link
              href="/signin"
              className="text-lg font-psemibold text-violet-400"
            >
              Login
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    marginTop: 30,
    padding: 4,
  },
  dropdownButtonStyle: {
    width: 200,
    height: 50,
    backgroundColor: '#E9ECEF',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: '#E9ECEF',
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  }
});

export default SignUp;

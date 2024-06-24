// import React from 'react'
// import { ScrollView, Text, View } from 'react-native'
// import BlogCard from '../../components/BlogCard'
// import CreateCard from '../../components/CreateCard'
// import data from "../../data.json"

// const timeline = () => {
//   return (
//     <ScrollView>
//     <View>
//       <Text
//         className="text-xl font-pbold text-left mt-5 ml-5 border-b-2 border-purple-500 w-1/3"
//       >
//         For You
//       </Text>
     
//      {
//         data.map((item,index) => {
//           return <BlogCard name={item.name} username={item.username} time={item.time} blog={item.blog} key={index}/>
//         })


//      }

//       <CreateCard/>

//     </View></ScrollView>
//   )
// }

// export default timeline



import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ForTimeline from '../../components/ForTimeline';

const Tab = createMaterialTopTabNavigator();

const timeline = ()=>{
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: 'gray',
      tabBarIndicatorStyle: { backgroundColor: '#7C3AED' },
      tabBarLabelStyle: { fontSize: 12 },
      tabBarStyle: { backgroundColor: '#161622' }
    }}
    >
      <Tab.Screen name="For You" component={ForTimeline} />
      <Tab.Screen name="Explore" component={ForTimeline} />
    </Tab.Navigator>
  );
}


export default timeline

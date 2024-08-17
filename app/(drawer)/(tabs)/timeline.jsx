import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ForTimeline from '../../../components/ForTimeline';
import ExploreTimeline from '../../../components/ExploreTimeline';

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
      <Tab.Screen name="Explore" component={ExploreTimeline} />
    </Tab.Navigator>
  );
}


export default timeline

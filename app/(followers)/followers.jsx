import React from 'react'
import FollowCard from '../../components/FollowCard'
import { Animated } from 'react-native'

const followers = () => {
  const followers = [
    { id: 1, name: 'John Doe', userImg: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png" },
    { id: 2, name: 'Jane Doe', userImg: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png" },
    { id: 3, name: 'John Doe', userImg: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png" },
    { id: 4, name: 'Jane Doe', userImg: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png" }
  ]

  return (
    <Animated.FlatList
    style={{backgroundColor: '#161622'}}
      data={followers}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => <FollowCard 
        username={item.name} 
        userImg={item.userImg}
      />}
    />

  )
}

export default followers
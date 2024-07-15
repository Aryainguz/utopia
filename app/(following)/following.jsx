import React from 'react'
import FollowCard from '../../components/FollowCard'
import { Animated } from 'react-native'

const following = () => {
  const following = [
    { id: 1, name: 'John Doe', userImg: "https://sm.ign.com/ign_pk/cover/a/avatar-gen/avatar-generations_rpge.jpg"
    },
    { id: 2, name: 'Jane Doe', userImg: "https://sm.ign.com/ign_pk/cover/a/avatar-gen/avatar-generations_rpge.jpg"
    },
    { id: 3, name: 'John Doe', userImg: "https://sm.ign.com/ign_pk/cover/a/avatar-gen/avatar-generations_rpge.jpg"
    },
    { id: 4, name: 'Jane Doe', userImg: "https://sm.ign.com/ign_pk/cover/a/avatar-gen/avatar-generations_rpge.jpg"
    }
  ]
  return (
    <Animated.FlatList  
    style={{backgroundColor: '#161622'}}
      data={following}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => <FollowCard 
        username={item.name} 
        userImg={item.userImg}
      />}
    />
  )
}

export default following
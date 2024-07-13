import React from 'react'
import { Animated } from 'react-native'
import NotificationBanner from '../../../components/NotificationBanner'

const allNotifications = [
  {
    id: 1,
   user: 'aryainguz',
   imageURI:"https://marketplace.canva.com/EAFewoMXU-4/1/0/1600w/canva-purple-pink-gradient-man-3d-avatar-0o0qE2T_kr8.jpg",
    notification: 'started following you'
  },
  {
    id: 2,
    user: 'johndoe',
    imageURI:"https://sm.ign.com/ign_pk/cover/a/avatar-gen/avatar-generations_rpge.jpg",
    notification: 'liked your post'
  },
  {
    id: 3,
    user: "kamal",
    imageURI:"https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png",
    notification: "started following you"
  },
  {
    id: 4,
   user: 'aryainguz',
   imageURI:"https://marketplace.canva.com/EAFewoMXU-4/1/0/1600w/canva-purple-pink-gradient-man-3d-avatar-0o0qE2T_kr8.jpg",
    notification: 'started following you'
  },
  {
    id: 5,
    user: 'johndoe',
    imageURI:"https://sm.ign.com/ign_pk/cover/a/avatar-gen/avatar-generations_rpge.jpg",
    notification: 'liked your post'
  },
  {
    id: 6,
    user: "kamal",
    imageURI:"https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png",
    notification: "started following you"
  }
]

const Notifications = () => {
  return (
   <Animated.FlatList
   className="bg-primary"
        data={allNotifications}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <NotificationBanner
            user={item.user}
            notification={item.notification}
            imageURI={item.imageURI}
          />
        )}
      />
  )
}

export default Notifications
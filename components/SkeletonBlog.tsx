import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather, Ionicons, AntDesign } from "@expo/vector-icons";

const BlogCardSkeleton = () => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.profile}>
          <View style={styles.profilePic} />
          <View style={styles.username} />
        </View>
        <View style={styles.shareButton} />
      </View>

      <View style={styles.dreamerTag} />

      <View style={styles.blogText} />

      <View style={styles.statsSection}>
        <View style={styles.stats}>
          <Ionicons name="stats-chart" size={20} color="#888" />
          <View style={styles.statText} />
        </View>

        <View style={styles.heartSection}>
          <AntDesign name="hearto" size={20} color="#888" />
          <View style={styles.heartText} />
        </View>
      </View>

      <View style={styles.time} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    width: '100%',
    padding: 16,
    borderBottomWidth: 0.4,
    borderBottomColor: 'white',
    backgroundColor: '#161622', // Assuming bg-primary is dark
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    height: 44,
    width: 44,
    borderRadius: 22,
    backgroundColor: '#888',
  },
  username: {
    height: 18,
    width: 120,
    backgroundColor: '#888',
    marginLeft: 20,
  },
  shareButton: {
    height: 22,
    width: 22,
    backgroundColor: '#888',
    borderRadius: 11,
  },
  dreamerTag: {
    height: 14,
    width: 160,
    backgroundColor: '#888',
    marginBottom: 16,
    alignSelf: 'flex-start',
    marginLeft: 64, // Adjust this value to position it correctly
  },
  blogText: {
    height: 80,
    width: '90%',
    backgroundColor: '#888',
    marginBottom: 16,
    alignSelf: 'flex-start',
  },
  statsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 13,
    right: 13,
  },
  stats: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  statText: {
    height: 14,
    width: 30,
    backgroundColor: '#888',
    marginLeft: 8,
  },
  heartSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  heartText: {
    height: 14,
    width: 30,
    backgroundColor: '#888',
    marginLeft: 8,
  },
  time: {
    height: 14,
    width: 100,
    backgroundColor: '#888',
    marginTop: 16,
    alignSelf: 'flex-start',
  },
});

export default BlogCardSkeleton;

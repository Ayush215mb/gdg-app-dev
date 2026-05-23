import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  const userProfile = {
    name: "Jordan Smith",
    role: "Full Stack Developer",
    bio: "Passionate about building amazing apps and learning new technologies",
    followers: 1240,
    following: 358,
    posts: 85,
    avatar: "👨‍💻",
  };

  const stats = [
    { label: "Posts", value: userProfile.posts },
    { label: "Followers", value: userProfile.followers },
    { label: "Following", value: userProfile.following },
  ];

  const highlights = [
    { id: "1", title: "React Expert", emoji: "⚛️" },
    { id: "2", title: "Mobile Dev", emoji: "📱" },
    { id: "3", title: "UI/UX Design", emoji: "🎨" },
    { id: "4", title: "Problem Solver", emoji: "🧩" },
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView contentContainerStyle={{ paddingVertical: 16 }}>
        {/* Profile Card */}
        <View className="bg-white mx-4 rounded-2xl p-5 items-center mb-4 shadow-sm">
          <Text className="text-6xl mb-3">{userProfile.avatar}</Text>
          <Text className="text-2xl font-bold text-gray-900">{userProfile.name}</Text>
          <Text className="text-sm font-semibold text-blue-600 mt-1">{userProfile.role}</Text>
          <Text className="text-sm text-gray-600 text-center mt-2 leading-5">{userProfile.bio}</Text>
        </View>

        {/* Stats */}
        <View className="bg-white mx-4 rounded-2xl py-4 flex-row justify-around mb-4 shadow-sm">
          {stats.map((stat) => (
            <View key={stat.label} className="items-center">
              <Text className="text-2xl font-bold text-blue-600">{stat.value}</Text>
              <Text className="text-xs text-gray-500 mt-1">{stat.label}</Text>
            </View>
          ))}
        </View>

        {/* Action Buttons */}
        <View className="flex-row mx-4 mb-4 gap-3">
          <TouchableOpacity className="flex-1 bg-blue-600 rounded-lg py-3 items-center shadow-sm">
            <Text className="text-white text-sm font-semibold">Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 bg-white border-2 border-blue-600 rounded-lg py-3 items-center shadow-sm">
            <Text className="text-blue-600 text-sm font-semibold">Share Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Highlights */}
        <View className="mx-4 mb-4">
          <Text className="text-lg font-bold text-gray-900 mb-3">Highlights</Text>
          <View className="flex-row flex-wrap justify-between">
            {highlights.map((highlight) => (
              <View key={highlight.id} className="w-5/12 bg-white rounded-lg p-3 items-center mb-3 shadow-sm">
                <Text className="text-3xl mb-2">{highlight.emoji}</Text>
                <Text className="text-xs font-semibold text-gray-900 text-center">{highlight.title}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Recent Activity */}
        <View className="mx-4">
          <Text className="text-lg font-bold text-gray-900 mb-3">Recent Activity</Text>
          <View className="bg-white rounded-lg p-3 flex-row items-center mb-3 shadow-sm">
            <Text className="text-2xl mr-3">⭐</Text>
            <View className="flex-1">
              <Text className="text-sm font-semibold text-gray-900">Liked a post</Text>
              <Text className="text-xs text-gray-500 mt-0.5">2 hours ago</Text>
            </View>
          </View>
          <View className="bg-white rounded-lg p-3 flex-row items-center mb-3 shadow-sm">
            <Text className="text-2xl mr-3">💬</Text>
            <View className="flex-1">
              <Text className="text-sm font-semibold text-gray-900">Commented on a post</Text>
              <Text className="text-xs text-gray-500 mt-0.5">5 hours ago</Text>
            </View>
          </View>
          <View className="bg-white rounded-lg p-3 flex-row items-center mb-8 shadow-sm">
            <Text className="text-2xl mr-3">📝</Text>
            <View className="flex-1">
              <Text className="text-sm font-semibold text-gray-900">Posted new content</Text>
              <Text className="text-xs text-gray-500 mt-0.5">1 day ago</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

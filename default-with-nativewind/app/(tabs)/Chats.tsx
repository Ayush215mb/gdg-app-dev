import React, { useState } from "react";
import { Text, View, FlatList, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Chats = () => {
  const [searchText, setSearchText] = useState("");

  const chatData = [
    {
      id: "1",
      name: "Alex Johnson",
      lastMessage: "Hey! How are you doing?",
      timestamp: "2 min ago",
      unread: 3,
      avatar: "👨",
    },
    {
      id: "2",
      name: "Sarah Williams",
      lastMessage: "Thanks for the help earlier!",
      timestamp: "15 min ago",
      unread: 0,
      avatar: "👩",
    },
    {
      id: "3",
      name: "Dev Team",
      lastMessage: "Release notes have been updated",
      timestamp: "1 hour ago",
      unread: 5,
      avatar: "👥",
    },
    {
      id: "4",
      name: "Maria Garcia",
      lastMessage: "See you tomorrow!",
      timestamp: "3 hours ago",
      unread: 0,
      avatar: "👩",
    },
  ];

  const renderChatItem = ({ item }: any) => (
    <TouchableOpacity className="flex-row items-center px-4 py-3 border-b border-gray-100">
      <View className="w-12 h-12 rounded-full bg-gray-100 justify-center items-center mr-3">
        <Text className="text-2xl">{item.avatar}</Text>
      </View>
      <View className="flex-1">
        <View className="flex-row justify-between items-center mb-1">
          <Text className="text-base font-semibold text-gray-900">{item.name}</Text>
          <Text className="text-xs text-gray-500">{item.timestamp}</Text>
        </View>
        <Text className="text-sm text-gray-600" numberOfLines={1}>
          {item.lastMessage}
        </Text>
      </View>
      {item.unread > 0 && (
        <View className="bg-blue-600 rounded-full w-6 h-6 justify-center items-center ml-2">
          <Text className="text-white text-xs font-bold">{item.unread}</Text>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Search */}
      <View className="px-4 py-3 border-b border-gray-100">
        <TextInput
          className="bg-gray-100 rounded-full px-4 py-2.5 text-sm text-gray-900"
          placeholder="Search conversations..."
          value={searchText}
          onChangeText={setSearchText}
          placeholderTextColor="#999"
        />
      </View>

      {/* Chat List */}
      <FlatList
        data={chatData}
        renderItem={renderChatItem}
        keyExtractor={(item) => item.id}
        scrollEnabled={true}
      />
    </SafeAreaView>
  );
};

export default Chats;

import React from "react";
import { Text, View, ScrollView, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";

const Home = () => {
  const categories = [
    { id: "1", title: "Apps", icon: "phone-portrait-outline", color: "#6C63FF" },
    { id: "2", title: "Coding", icon: "code-slash-outline", color: "#6C63FF" },
    { id: "3", title: "Design", icon: "color-palette-outline", color: "#6C63FF" },
    { id: "4", title: "Startup", icon: "rocket-outline", color: "#6C63FF" },
  ];

  const projects = [
    {
      id: "1",
      title: "React Native App",
      subtitle: "Modern mobile application UI",
      icon: "logo-react",
      color: "#61DBFB",
    },
    {
      id: "2",
      title: "Portfolio Website",
      subtitle: "Responsive frontend design",
      icon: "globe-outline",
      color: "#FF9800",
    },
    {
      id: "3",
      title: "Backend API",
      subtitle: "Node.js & MongoDB server",
      icon: "server-outline",
      color: "#4CAF50",
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-blue-50">
      {/* Header */}
      <View className="flex-row justify-between items-center px-5 mb-6 pt-4">
        <View>
          <Text className="text-3xl font-bold text-gray-900">Hello Aayush 👋</Text>
          <Text className="text-gray-500 mt-1 text-base">Welcome back</Text>
        </View>
        <TouchableOpacity className="bg-white w-12 h-12 rounded-full justify-center items-center shadow-md">
          <Ionicons name="notifications-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 60 }}>
        {/* Banner */}
        <View className="bg-blue-600 rounded-3xl p-5 flex-row items-center mb-6">
          <View className="flex-1">
            <Text className="text-white text-2xl font-bold">Build Amazing Apps</Text>
            <Text className="text-gray-200 mt-2 leading-5">Continue learning React Native and become a pro developer.</Text>
            <TouchableOpacity className="bg-white self-start px-4 py-2 rounded-2xl mt-4">
              <Text className="text-blue-600 font-bold">Get Started</Text>
            </TouchableOpacity>
          </View>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
            }}
            className="w-24 h-24 ml-2"
          />
        </View>

        {/* Categories */}
        <Text className="text-2xl font-bold text-gray-900 mb-4">Categories</Text>
        <View className="flex-row flex-wrap justify-between mb-6">
          {categories.map((category) => (
            <TouchableOpacity key={category.id} className="bg-white w-5/12 h-32 rounded-3xl justify-center items-center mb-3 shadow-sm">
              <Ionicons name={category.icon as any} size={28} color={category.color} />
              <Text className="mt-2 font-semibold text-base text-gray-900">{category.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Recent Projects */}
        <Text className="text-2xl font-bold text-gray-900 mb-4">Recent Projects</Text>
        <View>
          {projects.map((project) => (
            <TouchableOpacity key={project.id} className="bg-white rounded-3xl p-4 flex-row items-center mb-3 shadow-sm">
              <View className="w-16 h-16 rounded-2xl bg-gray-100 justify-center items-center mr-4">
                <Ionicons name={project.icon as any} size={35} color={project.color} />
              </View>
              <View className="flex-1">
                <Text className="text-lg font-bold text-gray-900">{project.title}</Text>
                <Text className="text-gray-500 mt-1">{project.subtitle}</Text>
              </View>
              <Ionicons name="chevron-forward" size={22} color="gray" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

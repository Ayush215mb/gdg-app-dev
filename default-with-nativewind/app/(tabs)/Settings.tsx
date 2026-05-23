import { Text, View, ScrollView, TouchableOpacity, Switch } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Settings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const settingGroups = [
    {
      title: "Notifications",
      settings: [
        {
          id: "1",
          label: "Push Notifications",
          description: "Receive push notifications",
          value: notificationsEnabled,
          onToggle: () => setNotificationsEnabled(!notificationsEnabled),
        },
      ],
    },
    {
      title: "Display",
      settings: [
        {
          id: "2",
          label: "Dark Mode",
          description: "Use dark mode theme",
          value: darkModeEnabled,
          onToggle: () => setDarkModeEnabled(!darkModeEnabled),
        },
      ],
    },
    {
      title: "Account",
      settings: [
        {
          id: "3",
          label: "Edit Profile",
          description: "Update your profile information",
          action: true,
        },
        {
          id: "4",
          label: "Change Password",
          description: "Update your password",
          action: true,
        },
        {
          id: "5",
          label: "Privacy Settings",
          description: "Manage privacy options",
          action: true,
        },
      ],
    },
  ];

  const renderSetting = (setting: any) => {
    if (setting.value !== undefined) {
      return (
        <View key={setting.id} className="flex-row justify-between items-center px-4 py-4 border-b border-gray-100">
          <View className="flex-1">
            <Text className="text-base font-semibold text-gray-900">{setting.label}</Text>
            <Text className="text-sm text-gray-500 mt-1">{setting.description}</Text>
          </View>
          <Switch
            value={setting.value}
            onValueChange={setting.onToggle}
            trackColor={{ false: "#ccc", true: "#667eea" }}
            thumbColor={setting.value ? "#667eea" : "#f0f0f0"}
          />
        </View>
      );
    }

    return (
      <TouchableOpacity key={setting.id} className="flex-row justify-between items-center px-4 py-4 border-b border-gray-100">
        <View className="flex-1">
          <Text className="text-base font-semibold text-gray-900">{setting.label}</Text>
          <Text className="text-sm text-gray-500 mt-1">{setting.description}</Text>
        </View>
        <Text className="text-2xl text-gray-300">›</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView contentContainerStyle={{ paddingVertical: 16 }}>
        {settingGroups.map((group) => (
          <View key={group.title}>
            <Text className="text-xs font-semibold text-gray-500 uppercase px-4 mt-4 mb-2">
              {group.title}
            </Text>
            <View className="bg-white border-t border-b border-gray-300">
              {group.settings.map((setting) => renderSetting(setting))}
            </View>
          </View>
        ))}

        <TouchableOpacity className="mx-4 mt-6 mb-8 bg-red-500 rounded-lg py-3 items-center">
          <Text className="text-white text-base font-semibold">Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;


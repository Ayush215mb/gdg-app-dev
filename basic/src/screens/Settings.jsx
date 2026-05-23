import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Switch,
} from "react-native";
import React, { useState } from "react";

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

  const renderSetting = (setting) => {
    if (setting.value !== undefined) {
      return (
        <View key={setting.id} style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Text style={styles.settingLabel}>{setting.label}</Text>
            <Text style={styles.settingDescription}>{setting.description}</Text>
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
      <TouchableOpacity key={setting.id} style={styles.settingItem}>
        <View style={styles.settingInfo}>
          <Text style={styles.settingLabel}>{setting.label}</Text>
          <Text style={styles.settingDescription}>{setting.description}</Text>
        </View>
        <Text style={styles.settingArrow}>›</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {settingGroups.map((group) => (
          <View key={group.title}>
            <Text style={styles.groupTitle}>{group.title}</Text>
            <View style={styles.settingGroup}>
              {group.settings.map((setting) => renderSetting(setting))}
            </View>
          </View>
        ))}
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#667eea",
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },
  scrollContent: {
    paddingVertical: 16,
  },
  groupTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#999",
    paddingHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
    textTransform: "uppercase",
  },
  settingGroup: {
    backgroundColor: "white",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: "#e0e0e0",
    borderBottomColor: "#e0e0e0",
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  settingInfo: {
    flex: 1,
  },
  settingLabel: {
    fontSize: 15,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  settingDescription: {
    fontSize: 13,
    color: "#999",
  },
  settingArrow: {
    fontSize: 24,
    color: "#ccc",
  },
  logoutButton: {
    marginHorizontal: 16,
    marginTop: 24,
    marginBottom: 32,
    backgroundColor: "#ff6b6b",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
  },
  logoutButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

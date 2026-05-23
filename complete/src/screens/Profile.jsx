import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";

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
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.avatarSection}>
            <Text style={styles.avatar}>{userProfile.avatar}</Text>
          </View>
          <Text style={styles.name}>{userProfile.name}</Text>
          <Text style={styles.role}>{userProfile.role}</Text>
          <Text style={styles.bio}>{userProfile.bio}</Text>
        </View>

        {/* Stats */}
        <View style={styles.statsContainer}>
          {stats.map((stat) => (
            <View key={stat.label} style={styles.statItem}>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={[styles.button, styles.editButton]}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.shareButton]}>
            <Text style={styles.shareButtonText}>Share Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Skills/Highlights */}
        <View style={styles.highlightsSection}>
          <Text style={styles.sectionTitle}>Highlights</Text>
          <View style={styles.highlightsGrid}>
            {highlights.map((highlight) => (
              <View key={highlight.id} style={styles.highlightItem}>
                <Text style={styles.highlightEmoji}>{highlight.emoji}</Text>
                <Text style={styles.highlightTitle}>{highlight.title}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Recent Activity */}
        <View style={styles.activitySection}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <View style={styles.activityCard}>
            <Text style={styles.activityEmoji}>⭐</Text>
            <View style={styles.activityContent}>
              <Text style={styles.activityTitle}>Liked a post</Text>
              <Text style={styles.activityTime}>2 hours ago</Text>
            </View>
          </View>
          <View style={styles.activityCard}>
            <Text style={styles.activityEmoji}>💬</Text>
            <View style={styles.activityContent}>
              <Text style={styles.activityTitle}>Commented on a post</Text>
              <Text style={styles.activityTime}>5 hours ago</Text>
            </View>
          </View>
          <View style={styles.activityCard}>
            <Text style={styles.activityEmoji}>📝</Text>
            <View style={styles.activityContent}>
              <Text style={styles.activityTitle}>Posted new content</Text>
              <Text style={styles.activityTime}>1 day ago</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

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
  profileCard: {
    backgroundColor: "white",
    marginHorizontal: 16,
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  avatarSection: {
    marginBottom: 12,
  },
  avatar: {
    fontSize: 64,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  role: {
    fontSize: 14,
    color: "#667eea",
    fontWeight: "600",
    marginBottom: 8,
  },
  bio: {
    fontSize: 13,
    color: "#666",
    textAlign: "center",
    lineHeight: 20,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 16,
    marginBottom: 16,
    backgroundColor: "white",
    borderRadius: 12,
    paddingVertical: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  statItem: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#667eea",
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: "#999",
  },
  actionButtons: {
    flexDirection: "row",
    marginHorizontal: 16,
    marginBottom: 16,
    gap: 12,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  editButton: {
    backgroundColor: "#667eea",
  },
  editButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
  shareButton: {
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#667eea",
  },
  shareButtonText: {
    color: "#667eea",
    fontSize: 14,
    fontWeight: "600",
  },
  highlightsSection: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 12,
  },
  highlightsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  highlightItem: {
    width: "48%",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  highlightEmoji: {
    fontSize: 32,
    marginBottom: 8,
  },
  highlightTitle: {
    fontSize: 12,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
  },
  activitySection: {
    marginHorizontal: 16,
    marginBottom: 24,
  },
  activityCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  activityEmoji: {
    fontSize: 24,
    marginRight: 12,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 13,
    fontWeight: "600",
    color: "#333",
    marginBottom: 2,
  },
  activityTime: {
    fontSize: 12,
    color: "#999",
  },
});

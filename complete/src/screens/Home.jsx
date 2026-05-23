import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello Aayush 👋</Text>
          <Text style={styles.subText}>Welcome back</Text>
        </View>

        <TouchableOpacity style={styles.notificationBtn}>
          <Ionicons
            name="notifications-outline"
            size={24}
            color="#000"
          />
        </TouchableOpacity>
      </View>

      {/* Scroll Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContainer}
      >
        {/* Banner */}
        <View style={styles.banner}>
          <View style={{ flex: 1 }}>
            <Text style={styles.bannerTitle}>
              Build Amazing Apps
            </Text>

            <Text style={styles.bannerSubtitle}>
              Continue learning React Native and become a
              pro developer.
            </Text>

            <TouchableOpacity style={styles.bannerBtn}>
              <Text style={styles.bannerBtnText}>
                Get Started
              </Text>
            </TouchableOpacity>
          </View>

          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
            }}
            style={styles.bannerImage}
          />
        </View>

        {/* Categories */}
        <Text style={styles.sectionTitle}>Categories</Text>

        <View style={styles.categoryContainer}>
          <TouchableOpacity style={styles.categoryCard}>
            <Ionicons
              name="phone-portrait-outline"
              size={28}
              color="#6C63FF"
            />

            <Text style={styles.categoryText}>Apps</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryCard}>
            <Ionicons
              name="code-slash-outline"
              size={28}
              color="#6C63FF"
            />

            <Text style={styles.categoryText}>Coding</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryCard}>
            <Ionicons
              name="color-palette-outline"
              size={28}
              color="#6C63FF"
            />

            <Text style={styles.categoryText}>Design</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryCard}>
            <Ionicons
              name="rocket-outline"
              size={28}
              color="#6C63FF"
            />

            <Text style={styles.categoryText}>Startup</Text>
          </TouchableOpacity>
        </View>

        {/* Recent Projects */}
        <Text style={styles.sectionTitle}>
          Recent Projects
        </Text>

        <View style={styles.projectCard}>
          <View style={styles.projectLeft}>
            <Ionicons
              name="logo-react"
              size={35}
              color="#61DBFB"
            />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.projectTitle}>
              React Native App
            </Text>

            <Text style={styles.projectSubtitle}>
              Modern mobile application UI
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={22}
            color="gray"
          />
        </View>

        <View style={styles.projectCard}>
          <View style={styles.projectLeft}>
            <Ionicons
              name="globe-outline"
              size={35}
              color="#FF9800"
            />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.projectTitle}>
              Portfolio Website
            </Text>

            <Text style={styles.projectSubtitle}>
              Responsive frontend design
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={22}
            color="gray"
          />
        </View>

        <View style={styles.projectCard}>
          <View style={styles.projectLeft}>
            <Ionicons
              name="server-outline"
              size={35}
              color="#4CAF50"
            />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.projectTitle}>
              Backend API
            </Text>

            <Text style={styles.projectSubtitle}>
              Node.js & MongoDB server
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={22}
            color="gray"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f7fb",
    paddingTop: 15,
  },

  scrollView: {
    flex: 1,
  },
  
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 60,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
    paddingHorizontal: 20,
  },

  greeting: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111",
  },

  subText: {
    color: "gray",
    marginTop: 5,
    fontSize: 15,
  },

  notificationBtn: {
    backgroundColor: "#fff",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 5,
  },

  banner: {
    backgroundColor: "#6C63FF",
    borderRadius: 25,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },

  bannerTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
  },

  bannerSubtitle: {
    color: "#E5E5E5",
    marginTop: 10,
    lineHeight: 20,
  },

  bannerBtn: {
    backgroundColor: "#fff",
    alignSelf: "flex-start",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 12,
    marginTop: 18,
  },

  bannerBtnText: {
    color: "#6C63FF",
    fontWeight: "700",
  },

  bannerImage: {
    width: 100,
    height: 100,
    marginLeft: 10,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 15,
    color: "#111",
  },

  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 25,
  },

  categoryCard: {
    backgroundColor: "#fff",
    width: "48%",
    height: 120,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 4,
  },

  categoryText: {
    marginTop: 10,
    fontWeight: "600",
    fontSize: 16,
    color: "#111",
  },

  projectCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 4,
  },

  projectLeft: {
    width: 60,
    height: 60,
    borderRadius: 18,
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  projectTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#111",
  },

  projectSubtitle: {
    color: "gray",
    marginTop: 5,
  },
});
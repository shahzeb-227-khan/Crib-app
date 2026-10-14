import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
        padding: 20,
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 26,
            fontWeight: "bold",
            marginBottom: 12,
          }}
        >
          My Profile
        </Text>

        <Text style={{ fontSize: 16, color: "#666666" }}>
          Manage your profile and account settings.
        </Text>
      </View>
    </SafeAreaView>
  );
}